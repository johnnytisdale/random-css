import CssProperty from "./CssProperty";

export default class TextDecorationLine extends CssProperty {

  acceptsColors = false;
  acceptsLengths = false;
  acceptsPercentages = false;
  acceptsKeywords = true;

  name = "textDecorationLine";

  keywords = [
    "blink",
    "line-through",
    "overline",
    "underline",
  ];

  keywordLimit = 0;
}