import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['font-weight'];

export default class FontWeight extends CssProperty {

  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected keywordLimit = 1;
  public name = json.camelCase;

  protected keywords: string[] = json.values;
}