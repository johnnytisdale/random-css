import ColorKeyword from "../../enums/ColorKeyword";
import ColorConfig from "../../interfaces/ColorConfig";
import CssProperty from "./CssProperty";
import {
  DEFAULT_COLOR_ALPHA,
  DEFAULT_COLOR_ALPHA_MAX,
  DEFAULT_COLOR_ALPHA_MIN,
  DEFAULT_COLOR_MAX,
  DEFAULT_COLOR_MIN,
  DEFAULT_COLOR_KEYWORDS,
} from "../../values/defaults/css/ColorDefaults";
import Plugins from "../../interfaces/Plugins";
import Randomizable from "../Randomizable";
import RGBA from "../../types/RGBA";
import Style from "../../types/Style";

export default abstract class ColorProperty extends CssProperty {
  private alpha: boolean;
  private aMax: number;
  private aMin: number;
  private bMax: number;
  private bMin: number;
  private gMax: number;
  private gMin: number;
  private rMax: number;
  private rMin: number;
  private colorKeywords: ColorKeyword[];
  public plugins: Plugins = {};

  protected setSpecificConfig(config: ColorConfig) {
    this.alpha = config.alpha ?? DEFAULT_COLOR_ALPHA;
    this.aMax = config.aMax ?? DEFAULT_COLOR_ALPHA_MAX;
    this.aMin = config.aMin ?? DEFAULT_COLOR_ALPHA_MIN;
    this.bMax = config.bMax ?? DEFAULT_COLOR_MAX;
    this.bMin = config.bMin ?? DEFAULT_COLOR_MIN;
    this.gMax = config.gMax ?? DEFAULT_COLOR_MAX;
    this.gMin = config.gMin ?? DEFAULT_COLOR_MIN;
    this.rMax = config.rMax ?? DEFAULT_COLOR_MAX;
    this.rMin = config.rMin ?? DEFAULT_COLOR_MIN;
    this.colorKeywords = config.colorKeywords ?? [...DEFAULT_COLOR_KEYWORDS];
    if (config.plugins?.colorContrast) {
      this.plugins.colorContrast = config.plugins.colorContrast;
      if (
        this.name === config.plugins.colorContrast.secondary?.cssPropertyName
      ) {
        this.enabled = false;
        return true;
      }
      this.update = this.update_colorContrast;
    } else {
      if (this.plugins.colorContrast) {
        delete this.plugins.colorContrast;
      }
      this.update = super.update;
    }
  }

  protected update_colorContrast() {
    const primaryColor = this.getRandomRGBA();
    const secondaryStyle: Style = {};
    const secondaryColors = Array.isArray(
      this.plugins.colorContrast.primary.secondary
    )
      ? this.plugins.colorContrast.primary.secondary
      : [this.plugins.colorContrast.primary.secondary];
    secondaryColors.forEach((cssPropertyName) => {
      secondaryStyle[cssPropertyName] = this.rgbaToString(
        this.contrasting(primaryColor)
      );
    });
    console.log({ primaryColor, secondaryStyle });
    this.setValue(this.rgbaToString(primaryColor));
    this.plugins.colorContrast.primary.setSecondaryStyle(secondaryStyle);
  }

  private contrasting(rgba: RGBA): RGBA {
    return rgba.map((base, i) =>
      i === 3
        ? base
        : base < 100
        ? Randomizable.number(base + 100, 255)
        : base > 155
        ? Randomizable.number(0, base - 100)
        : Randomizable.boolean()
        ? Randomizable.number(base + 100, 255)
        : Randomizable.number(0, base - 100)
    ) as RGBA;
  }

  private getRandomRGBA(): RGBA {
    return [
      Randomizable.number(this.rMin, this.rMax),
      Randomizable.number(this.gMin, this.gMax),
      Randomizable.number(this.bMin, this.bMax),
      this.alpha ? Randomizable.decimal(this.aMin, this.aMax) : 1,
    ];
  }

  private rgbaToString(rgba: RGBA): string {
    return `rgba(${rgba.join(",")})`;
  }

  public getRandomValue(): string {
    return this.external
      ? Randomizable.array(this.colorKeywords)
      : this.rgbaToString(this.getRandomRGBA());
  }
}
