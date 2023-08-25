import DEFAULT_RANDOMIZABLE from "./RandomizableDefaults";
import GlyphConfig from "../../interfaces/GlyphConfig";

const DEFAULT_GLYPH_CONFIG: GlyphConfig = {
  leet: { ...DEFAULT_RANDOMIZABLE },
  unicode: { ...DEFAULT_RANDOMIZABLE },
};

export default DEFAULT_GLYPH_CONFIG;
