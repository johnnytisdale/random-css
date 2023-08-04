import CssProperty from "../../enums/CssProperty";
import LengthProperty, {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
  DEFAULT_LENGTH_OPTIONS,
  DEFAULT_LENGTH_UNITS,
  LengthOptions
} from "./LengthProperty";

export const DEFAULT_BORDER_WIDTH_ENABLED = false;

export const DEFAULT_BORDER_WIDTH: LengthOptions = {
  ...DEFAULT_LENGTH_OPTIONS,
  enabled: DEFAULT_BORDER_WIDTH_ENABLED
};

export default class BorderWidth extends LengthProperty {

  protected max;
  protected min;
  protected units;

  public name = CssProperty.BORDER_WIDTH;

  constructor(options: LengthOptions) {
    super();
    this.max = options.max ?? DEFAULT_LENGTH_MAX;
    this.min = options.min ?? DEFAULT_LENGTH_MIN;
    this.units = options.units ?? [ ...DEFAULT_LENGTH_UNITS ];
  }
}
