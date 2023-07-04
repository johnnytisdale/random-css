import CssProperty from "./CssProperty";

export default class BackgroundColor extends CssProperty {

  acceptsColors = true;
  acceptsLengths = false;
  acceptsPercentages = false;
  acceptsKeywords = false;

  name: string = "borderColor";

}