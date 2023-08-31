import Letter from "../enums/Letter";

type GlyphSpecification = Partial<Record<Letter, Array<string>>>;

export default GlyphSpecification;
