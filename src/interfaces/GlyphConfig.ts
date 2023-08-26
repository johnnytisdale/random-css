import Option from "./Option";

export default interface GlyphConfig extends Option {
  leet?: { enabled?: boolean };
  unicode?: { enabled?: boolean };
}
