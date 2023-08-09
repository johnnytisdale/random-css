import { DEFAULT_GLOBAL_OPTIONS_UNSAFE } from "../../interfaces/GlobalOptions";
import ECssProperty from "../../enums/CssProperty";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: ECssProperty;

  constructor(protected unsafe = DEFAULT_GLOBAL_OPTIONS_UNSAFE) {
    super();
  }

  public abstract getRandomValue(): string;
}
