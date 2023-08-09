export default abstract class Randomizable {
  abstract getRandomValue(): string;
  abstract name: string;

  public static array<T>(array: Array<T>) {
    return array[Randomizable.number(0, array.length - 1)];
  }

  public static boolean(): boolean {
    return Randomizable.number(0, 1) === 1;
  }

  public static decimal(min = 0, max = 1, places = 2): number {
    if (min < 0) {
      throw Error("getRandomDecimal: min cannot be less than 0.");
    } else if (min > 1) {
      throw Error("getRandomDecimal: max cannot be greater than 1.");
    }
    return parseFloat((Math.random() * (min - max) + max).toFixed(places));
  }

  public static number(min: number, max: number, integerOnly = true) {
    const random = Math.random() * (max - min + 1) + min;
    return integerOnly === true
      ? Math.floor(random)
      : parseFloat(random.toFixed(2));
  }
}
