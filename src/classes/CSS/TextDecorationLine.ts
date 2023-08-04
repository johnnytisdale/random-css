import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['text-decoration-line'];

export default class TextDecorationLine extends CssProperty {

  protected acceptsLengths = false;
  protected acceptsKeywords = true;
  public name = json.camelCase;

  protected keywords = json.values;

  protected keywordLimit = 1;
}