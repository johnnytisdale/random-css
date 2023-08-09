import Option from "./Option";

export default interface GlyphOptions {
  leet?: Option;
  unicode?: Option;
}

export const DEFAULT_GLYPH_OPTIONS: GlyphOptions = {
  leet: { enabled: false },
  unicode: { enabled: false },
};
