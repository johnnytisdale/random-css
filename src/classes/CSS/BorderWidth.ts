import CssProperty from "./CssProperty";
import cssProperties from "../../json/cssProperties.json";

const json = cssProperties['border-width'];

export default class BorderWidth extends CssProperty {

  constructor(min?: number, max?: number) {
    super();
    if (min != undefined) {
      this.minLength = min;
    }
    if (max != undefined) {
      this.maxLength = max;
    }
  }

  protected acceptsColors = false;
  protected acceptsLengths = true;
  protected acceptsPercentages = false;
  protected acceptsKeywords = false;
  public name = json.camelCase;

}