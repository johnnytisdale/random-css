import { DEFAULT_GLOBAL_OPTIONS_UNSAFE } from "../../interfaces/GlobalOptions";
import CssPropertyName from "../../enums/CssPropertyName";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(protected unsafe = DEFAULT_GLOBAL_OPTIONS_UNSAFE) {
    super();
  }

  public abstract getRandomValue(): string;
}
