import Config from "../interfaces/Config";
import {
  DEFAULT_RANDOMIZABLE_ENABLED,
  DEFAULT_RANDOMIZABLE_MAX_DELAY,
  DEFAULT_RANDOMIZABLE_MIN_DELAY,
  DEFAULT_RANDOMIZABLE_REPEAT,
} from "../values/defaults/RandomizableDefaults";
import RandomizableName from "../types/RandomizableName";

export default abstract class Randomizable {
  /**
   * The name of this `Randomizable`. It should clearly describe what is being
   * randomized. For example: `"backgroundColor"` or `"glyph"`.
   */
  public abstract name: RandomizableName;

  /**
   * The `Config` object passed to this `Randomizable` the last time
   * `setConfig()` was called. This is used to compare new config to previous
   * config.
   */
  private config: Config;

  /**
   * The timeout used to repeatedly generate a random value, assuming `repeat`
   * is true.
   */
  private timeout: NodeJS.Timeout;

  /**
   * If this `Randomizable` is enabled, then it will generate a random value
   * (repeatedly if `repeat` is true). If it is not enabled, it will do nothing.
   */
  protected enabled: boolean;

  /**
   * The maximum number of milliseconds that should elapse before another random
   * value is generated (assuming `repeat` is true).
   */
  public maxDelay: number;

  /**
   * The minimum number of milliseconds that should elapse before another random
   * value is generated (assuming `repeat` is true).
   */
  public minDelay: number;

  /**
   * If true, a random value will be generated repeatedly. Each new random value
   * will be generated after a delay of random length whose range is defined by
   * `minDelay` and `maxDelay`.
   */
  public repeat: boolean;

  /**
   * Cancels `this.timeout` and sets it to `null`.
   */
  private clearTimeout() {
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  /**
   * Logic for clearing/setting `this.timeout` based on the config.
   * @param {Config} previousConfig The config before `setConfig()` was called.
   */
  private configDidChange(previousConfig: Config) {
    if (this.enabled) {
      if (!previousConfig?.enabled) {
        this.timeoutFunction();
      } else {
        if (this.repeat) {
          if (
            !previousConfig?.repeat ||
            previousConfig?.maxDelay !== this.maxDelay ||
            previousConfig?.minDelay !== this.minDelay
          ) {
            this.clearTimeout();
            this.setTimeout();
          }
        } else if (previousConfig?.repeat) {
          this.clearTimeout();
        }
      }
    } else if (previousConfig?.enabled) {
      this.resetValue();
      this.clearTimeout();
    }
  }

  /**
   * Schedules the execution of `this.timeoutFunction()`.
   */
  private setTimeout() {
    this.timeout = setTimeout(
      () => this.enabled && this.repeat && this.timeoutFunction(),
      Randomizable.number(this.minDelay, this.maxDelay)
    );
  }

  /**
   * Sets the value to a new randomly generated value. Schedules another
   * execution of itself if `this.enabled` and `this.repeat` are `true`.
   */
  private timeoutFunction() {
    this.setValue(this.getRandomValue());
    if (this.enabled && this.repeat) {
      this.setTimeout();
    }
  }

  /**
   * Resets the value to its default (i.e., whatever the value was at the time
   * of instantiation).
   */
  protected abstract resetValue(): void;

  /**
   * Sets config specific to this `Randomizable`. This method will be called by
   * `setConfig()`.
   * @param {Config} config The Config object.
   */
  protected abstract setSpecificConfig(config: Config): void;

  /**
   * Updates the value.
   * @param {string} value The new value.
   */
  protected abstract setValue(value: string): void;

  /**
   * Public setter for `this.config`.
   * @param {Config} config The Config object.
   */
  public setConfig(config: Config) {
    const previousConfig = !this.config ? null : { ...this.config };
    this.config = config;
    this.setGeneralConfig(config);
    this.setSpecificConfig(config);
    this.configDidChange(previousConfig);
  }

  /**
   * Sets general config, i.e. that which is common to all `Randomizable`
   * instances.
   * @param {Config} config The Config object.
   */
  private setGeneralConfig(config: Config) {
    this.enabled = config?.enabled ?? DEFAULT_RANDOMIZABLE_ENABLED;
    this.maxDelay = config?.maxDelay ?? DEFAULT_RANDOMIZABLE_MAX_DELAY;
    this.minDelay = config?.minDelay ?? DEFAULT_RANDOMIZABLE_MIN_DELAY;
    this.repeat = config?.repeat ?? DEFAULT_RANDOMIZABLE_REPEAT;
  }

  /**
   * Get a random value!
   */
  public abstract getRandomValue(): string;

  /**
   * Returns a random element of an array.
   * @param {Array<T>} array The array from which to return a random element.
   * @returns {T} An element of the given array.
   */
  public static array<T>(array: Array<T>): T {
    return array[Randomizable.number(0, array.length - 1)];
  }

  /**
   * Returns a random boolean.
   * @returns {boolean} A random boolean.
   */
  public static boolean(): boolean {
    return Randomizable.number(0, 1) === 1;
  }

  /**
   * Returns a float between 0 and 1, inclusive.
   * @param min The minimum value to be returned.
   * @param max The maximum value to be returned.
   * @param places The number of decimal places.
   * @returns {float} A float between 0 and 1, inclusive.
   */
  public static decimal(min = 0, max = 1, places = 2): number {
    return parseFloat((Math.random() * (min - max) + max).toFixed(places));
  }

  /**
   * Returns a random number between `min` and `max`, inclusive.
   * @param min The minimum value to be returned.
   * @param max The maximum value to be returned.
   * @param {boolean} integer Whether the value should be a whole number.
   * @returns {number} A random number between `min` and `max`.
   */
  public static number(min: number, max: number, integer = true): number {
    const random = Math.random() * (max - min + 1) + min;
    return integer === true
      ? Math.floor(random)
      : parseFloat(random.toFixed(2));
  }
}
