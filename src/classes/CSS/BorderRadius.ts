import CssProperty from "./CssProperty";

export default class BorderRadius extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsPercentages = true;
  protected acceptsKeywords = false;
  public name = "borderRadius";

}