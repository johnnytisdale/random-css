import Config from "./Config";
import GlyphTypeConfig from "./GlyphTypeConfig";

export default interface GlyphConfig extends Config {
  leet?: GlyphTypeConfig;
  unicode?: GlyphTypeConfig;
}
