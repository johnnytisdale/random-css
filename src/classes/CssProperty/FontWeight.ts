import ECssProperty from "../../enums/ECssProperty";
import ELengthUnit from "../../enums/ELengthUnit";
import CssProperty from "./CssProperty";

export default class FontWeight extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = true;
  protected acceptsKeywords = true;
  protected acceptsPercentages = false;
  protected lengthUnit: ELengthUnit = ELengthUnit.NONE;
  public name: string = ECssProperty.fontWeight;

  constructor() {
    super();
  }

  protected keywords: string[] = [
    "bold",
    "bolder",
    "lighter",
    "normal",
  ];

  protected getRandomLengthValue(): string {
    return `${this.getRandomNumber(1, 9) * 100}`;
  }
}