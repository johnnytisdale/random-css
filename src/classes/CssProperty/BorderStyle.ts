import CssProperty from "./CssProperty";

export default class BorderStyle extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected keywordLimit: number = 4;
  public name: string = "borderStyle";

  /* Keyword values */
  protected keywords: string[] = [
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
  ];

}