import DEFAULT_RANDOMIZABLE from "./RandomizableDefaults";
import GlyphConfig from "../../interfaces/GlyphConfig";

const DEFAULT_GLYPH_CONFIG: GlyphConfig = {
  ...DEFAULT_RANDOMIZABLE,
  leet: { enabled: false },
  unicode: { enabled: false },
};

export default DEFAULT_GLYPH_CONFIG;
