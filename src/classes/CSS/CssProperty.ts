import CssPropertyName from "../../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../../interfaces/RandomElementProps";
import Randomizable from "../Randomizable";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(protected external = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL) {
    super();
  }

  public abstract getRandomValue(): string;
}
