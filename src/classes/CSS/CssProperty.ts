import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  protected separator = " ";

  // TODO: const DEFAULT_UNSAFE
  constructor(protected unsafe = false) {
    super();
  }

  public abstract getRandomValue(): string;
}
