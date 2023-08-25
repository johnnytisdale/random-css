import RandomizableName from "../types/RandomizableName";

export default abstract class Randomizable {
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

  public abstract getRandomValue(): string;

  public maxDelay = 3000;
  public minDelay = 300;

  public shouldRepeat = true;

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
