import CssProperty from "./CssProperty";

export default class TextDecorationLine extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsPercentages = false;
  protected acceptsKeywords = true;
  public name = "textDecorationLine";

  protected keywords = [
    "blink",
    "line-through",
    "overline",
    "underline",
  ];

  protected keywordLimit = 0;
}