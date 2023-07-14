import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['text-decoration-line'];

export default class TextDecorationLine extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsPercentages = false;
  protected acceptsKeywords = true;
  public name = json.camelCase;

  protected keywords = json.values;

  protected keywordLimit = 1;
}