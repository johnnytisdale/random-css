import StyleConfig from "./StyleConfig";
import GlobalOptions from "./GlobalOptions";
import GlyphOptions from "./GlyphOptions";

export default interface Options {
  css: StyleConfig;
  global: GlobalOptions;
  glyph: GlyphOptions;
}
