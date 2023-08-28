import CssPropertyName from "../../enums/CssPropertyName";
import Randomizable from "../Randomizable";
import Style from "../../types/Style";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(protected setStyle: (style: Style) => void) {
    super();
  }

  protected resetValue() {
    this.setStyle({ [this.name]: false });
  }

  protected setValue(value: string) {
    this.setStyle({ [this.name]: value });
  }
}
