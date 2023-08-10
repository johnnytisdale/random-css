import { DEFAULT_GLOBAL_OPTIONS_EXTERNAL } from "../../interfaces/GlobalOptions";
import CssPropertyName from "../../enums/CssPropertyName";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(protected external = DEFAULT_GLOBAL_OPTIONS_EXTERNAL) {
    super();
  }

  public abstract getRandomValue(): string;
}
