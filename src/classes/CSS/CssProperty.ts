import CssPropertyName from "../../enums/CssPropertyName";
import Randomizable from "../Randomizable";
import Style from "../../types/Style";

export default abstract class CssProperty extends Randomizable {
  protected defaultValue: string;
  protected separator = " ";
  public name: CssPropertyName;

  constructor(
    style: Style,
    protected setStyle: (style: Style) => void
  ) {
    super();
    this.defaultValue = style[this.name] ?? "";
  }

  public abstract getRandomValue(): string;

  protected setValue(value: string) {
    this.setStyle({ [this.name]: value });
  }
}
