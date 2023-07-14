import CssProperty from "./CssProperty";
import * as cssProperties from "../../json/cssProperties.json";

const json = cssProperties['background-color'];

export default class BackgroundColor extends CssProperty {

  protected acceptsColors = true;
  protected acceptsLengths = false;
  protected acceptsPercentages = false;
  protected acceptsKeywords = false;
  public name = json.camelCase;

}