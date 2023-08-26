import CssPropertyName from "../../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../../values/defaults/RandomElementPropsDefaults";
import Option from "../../interfaces/Option";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(
    options: Option,
    protected external = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL
  ) {
    super(options);
  }

  public abstract getRandomValue(): string;
}
