import GlyphConfig from "../interfaces/GlyphConfig";
import GlyphType from "../enums/GlyphType";

type GlyphInput = GlyphConfig | GlyphType | Array<GlyphConfig | GlyphType>;

export default GlyphInput;
