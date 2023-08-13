import Option from "./Option";

export default interface GlyphConfig {
  leet?: Option;
  unicode?: Option;
}

export const DEFAULT_GLYPH_OPTIONS: GlyphConfig = {
  leet: { enabled: false },
  unicode: { enabled: false },
};
