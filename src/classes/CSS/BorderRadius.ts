import CssProperty from "./CssProperty";
import cssProperties from "../../json/cssProperties.json";

const json = cssProperties['border-radius'];

export default class BorderRadius extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsPercentages = true;
  protected acceptsKeywords = false;
  public name = json.camelCase;

  // TODO: support multiple values

}