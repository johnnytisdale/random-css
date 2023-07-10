import CssProperty from "./CssProperty";
import cssProperties from "../../json/cssProperties.json";

const json = cssProperties['text-decoration-style'];

export default class TextDecorationStyle extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsPercentages = false;
  protected acceptsKeywords = true;
  public name = json.camelCase;

  protected keywords = json.values;

  protected keywordLimit = 1;
}