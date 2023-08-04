import { DEFAULT_GLOBAL_OPTIONS_UNSAFE } from "../../interfaces/GlobalOptions";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {

  protected separator = " ";

  constructor(protected unsafe = DEFAULT_GLOBAL_OPTIONS_UNSAFE) {
    super();
  }

  public abstract getRandomValue(): string;
}
