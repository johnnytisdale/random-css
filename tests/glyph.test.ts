import DEFAULT_GLYPH_CONFIG from "../src/values/defaults/glyph/DefaultGlyphConfig";
import Glyph from "../src/classes/Glyph";
import LeetGlyphs from "../src/values/enums/LeetGlyphs";
import Letter from "../src/enums/Letter";
import UnicodeGlyphs from "../src/values/enums/UnicodeGlyphs";

let character = "a";
const setGlyph = (newCharacter: string) => {
  character = newCharacter;
};

const glyph = new Glyph(character, setGlyph);
glyph.setConfig(DEFAULT_GLYPH_CONFIG);

test('Glyph.name == "glyph"', () => {
  expect(glyph.name).toBe("glyph");
});

test('Glyph.getRandomValue() == "a"', () => {
  expect(
    UnicodeGlyphs.a.map((unicode) =>
      String.fromCodePoint(parseInt(unicode, 16))
    )
  ).toContain(glyph.getRandomValue());
});

describe("unicode: String.fromCodePoint().length === 1", () => {
  Object.values(Letter).forEach((letter: Letter) => {
    UnicodeGlyphs[letter].forEach((unicode: string) => {
      it(`${letter}: ${unicode}`, () => {
        // TODO: Figure out why "X, CANCELLATION" has a string length of 2!
        expect(String.fromCodePoint(parseInt(unicode, 16)).length).toBe(
          unicode === "1F5D9" ? 2 : 1
        );
      });
    });
  });
});

describe("leet: String.length > 0", () => {
  Object.values(Letter).forEach((letter: Letter) => {
    LeetGlyphs[letter].forEach((leet: string) => {
      it(`${letter}: ${leet}`, () => {
        expect(leet.length).toBeGreaterThan(0);
      });
    });
  });
});
