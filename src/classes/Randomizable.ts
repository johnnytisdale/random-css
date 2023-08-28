import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../values/defaults/RandomElementPropsDefaults";
import {
  DEFAULT_RANDOMIZABLE_ENABLED,
  DEFAULT_RANDOMIZABLE_MAX_DELAY,
  DEFAULT_RANDOMIZABLE_MIN_DELAY,
  DEFAULT_RANDOMIZABLE_SHOULD_REPEAT,
} from "../values/defaults/RandomizableDefaults";
import Option from "../interfaces/Option";
import RandomizableName from "../types/RandomizableName";

export default abstract class Randomizable {
  protected abstract defaultValue: string;

  public abstract name: RandomizableName;

  private config: Option;
  private timeout: NodeJS.Timeout;

  protected enabled: boolean;
  protected external: boolean;

  public maxDelay: number;
  public minDelay: number;
  public shouldRepeat: boolean;

  public static ignoreForSpaces: Record<RandomizableName, boolean> = {
    animation: false,
    backgroundColor: false,
    borderColor: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    color: true,
    fontFamily: true,
    fontStyle: true,
    fontWeight: true,
    glyph: true,
    textDecorationColor: true,
    textDecorationLine: true,
    textDecorationStyle: true,
  };

  private clearTimeout() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  private setTimeout() {
    this.timeout = setTimeout(
      () => this.enabled && this.shouldRepeat && this.timeoutFunction(),
      Randomizable.number(this.minDelay, this.maxDelay)
    );
  }

  private timeoutFunction() {
    this.setValue(this.getRandomValue());
    if (this.enabled && this.shouldRepeat) {
      this.setTimeout();
    }
  }

  protected abstract resetValue(): void;
  protected abstract setSpecificConfig(config: Option): void;
  protected abstract setValue(value: string): void;

  public setConfig(
    config: Option,
    external: boolean = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL
  ) {
    const previousConfig = !this.config ? null : { ...this.config };
    this.config = config;
    this.enabled = config?.enabled ?? DEFAULT_RANDOMIZABLE_ENABLED;
    this.maxDelay = config?.maxDelay ?? DEFAULT_RANDOMIZABLE_MAX_DELAY;
    this.minDelay = config?.minDelay ?? DEFAULT_RANDOMIZABLE_MIN_DELAY;
    this.shouldRepeat =
      config?.shouldRepeat ?? DEFAULT_RANDOMIZABLE_SHOULD_REPEAT;
    this.external = external;
    this.setSpecificConfig(config);

    // Just enabled.
    if (!previousConfig?.enabled && this.enabled) {
      console.log("JUST enabled");
      return this.timeoutFunction();
    }

    if (!this.enabled) {
      if (!previousConfig || previousConfig?.enabled) {
        if (this.timeout == null && previousConfig?.shouldRepeat) {
          return;
        }
        this.resetValue();
        this.clearTimeout();
      }
    } else if (this.timeout) {
      // Already has a timeout.
      if (!this.shouldRepeat) {
        this.clearTimeout();
      } else if (
        previousConfig?.maxDelay !== this.maxDelay ||
        previousConfig?.minDelay !== this.minDelay
      ) {
        this.clearTimeout();
        this.setTimeout();
      }
    }
  }

  public abstract getRandomValue(): string;

  public static array<T>(array: Array<T>) {
    return array[Randomizable.number(0, array.length - 1)];
  }

  public static boolean(): boolean {
    return Randomizable.number(0, 1) === 1;
  }

  public static decimal(min = 0, max = 1, places = 2): number {
    return parseFloat((Math.random() * (min - max) + max).toFixed(places));
  }

  public static number(min: number, max: number, integer = true) {
    const random = Math.random() * (max - min + 1) + min;
    return integer === true
      ? Math.floor(random)
      : parseFloat(random.toFixed(2));
  }
}
