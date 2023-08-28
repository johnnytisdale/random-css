import Config from "../../interfaces/Config";
import CssPropertyName from "../../enums/CssPropertyName";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "../../values/defaults/RandomElementPropsDefaults";
import Randomizable from "../Randomizable";
import Style from "../../types/Style";

export default abstract class CssProperty extends Randomizable {
  protected separator = " ";
  public name: CssPropertyName;

  constructor(protected setStyle: (style: Style) => void) {
    super();
  }

  /**
   * Whether to use an external stylesheet.
   */
  protected external: boolean;

  protected resetValue() {
    this.setStyle({ [this.name]: false });
  }

  protected setValue(value: string) {
    this.setStyle({ [this.name]: value });
  }

  public setConfig(
    config: Config,
    external: boolean = DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL
  ) {
    this.external = external;
    super.setConfig(config);
  }
}
