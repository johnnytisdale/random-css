import CssProperty from "./CssProperty";

export default class BorderRadius extends CssProperty {

  acceptsColors = false;
  acceptsLengths = false;
  acceptsPercentages = true;
  acceptsKeywords = false;

  name: string = "borderRadius";

}