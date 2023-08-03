import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['border-style'];

export default class BorderStyle extends CssProperty {
  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  // TODO: Support multiple values when unsafe === false
  protected keywordLimit = this.unsafe ? 4 : 1;
  protected keywords = json.values;
  public name = json.camelCase;
}