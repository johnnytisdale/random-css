import Config from "./Config";

export default interface GlyphConfig extends Config {
  leet?: { enabled?: boolean };
  unicode?: { enabled?: boolean };
}
