import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";
import GlyphConfig from "../../../interfaces/GlyphConfig";
import LeetGlyphs from "../../enums/LeetGlyphs";
import UnicodeGlyphs from "../../enums/UnicodeGlyphs";

const DEFAULT_GLYPH_CONFIG: GlyphConfig = {
  ...DEFAULT_RANDOMIZABLE,
  leet: {
    enabled: false,
    glyphs: { ...LeetGlyphs },
  },
  unicode: {
    enabled: true,
    glyphs: { ...UnicodeGlyphs },
  },
};

export default DEFAULT_GLYPH_CONFIG;
