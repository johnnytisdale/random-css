import CssProperty from "./CssProperty";

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

  acceptsColors = false;
  acceptsLengths = true;
  acceptsPercentages = false;
  acceptsKeywords = false;

  name: string = "borderWidth";

}