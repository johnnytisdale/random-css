import CssProperty from "../../enums/CssPropertyName";
import LengthOptions, {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
  DEFAULT_LENGTH_UNITS,
} from "../../interfaces/LengthOptions";
import LengthProperty from "./LengthProperty";

export default class BorderWidth extends LengthProperty {
  protected max;
  protected min;
  protected units;

  public name = CssProperty.BORDER_WIDTH;

  constructor(options: LengthOptions) {
    super();
    this.max = options.max ?? DEFAULT_LENGTH_MAX;
    this.min = options.min ?? DEFAULT_LENGTH_MIN;
    this.units = options.units ?? [...DEFAULT_LENGTH_UNITS];
  }
}
