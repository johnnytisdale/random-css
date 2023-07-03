import CssProperty from "./CssProperty";

export default class Color extends CssProperty {

  acceptsColors = true;
  acceptsLengths = false;
  acceptsPercentages = false;
  acceptsKeywords = false;

  name: string = "color";

}