import CssProperty from "./CssProperty";

export default class Color extends CssProperty {

  protected acceptsColors = true;
  protected acceptsLengths = false;
  protected acceptsPercentages = false;
  protected acceptsKeywords = false;
  public name = "color";

}