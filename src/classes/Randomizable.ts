import {
  DEFAULT_RANDOMIZABLE_MAX_DELAY,
  DEFAULT_RANDOMIZABLE_MIN_DELAY,
  DEFAULT_RANDOMIZABLE_SHOULD_REPEAT,
} from "../values/defaults/RandomizableDefaults";
import Option from "../interfaces/Option";
import RandomizableName from "../types/RandomizableName";

export default abstract class Randomizable {
  constructor(options: Option) {
    this.maxDelay = options.maxDelay ?? DEFAULT_RANDOMIZABLE_MAX_DELAY;
    this.minDelay = options.minDelay ?? DEFAULT_RANDOMIZABLE_MIN_DELAY;
    this.shouldRepeat =
      options.shouldRepeat ?? DEFAULT_RANDOMIZABLE_SHOULD_REPEAT;
  }

  public abstract name: RandomizableName;

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

  public maxDelay: number;
  public minDelay: number;
  public shouldRepeat: boolean;

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
