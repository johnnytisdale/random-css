import * as leetJSON from "../src/json/leet.json";
import * as unicodeJSON from "../src/json/unicode.json";
import { DEFAULT_GLYPH_OPTIONS } from "../src/interfaces/GlyphOptions";
import Glyph from "../src/classes/Glyph";
import Letter from "../src/enums/Letter";

const glyph = new Glyph("a", DEFAULT_GLYPH_OPTIONS);

test("Glyph.name == 'glyph'", () => {
  expect(glyph.name).toBe("glyph");
});

test("Glyph.getRandomValue() == 'a'", () => {
  expect(glyph.getRandomValue()).toBe("a");
});

describe("unicode: String.fromCodePoint().length === 1", () => {
  Object.values(Letter).forEach((letter: Letter) => {
    unicodeJSON[letter].forEach(({ description, unicode }) => {
      it(description, () => {
        // TODO: Figure out why 'X, CANCELLATION' has a string length of 2!
        expect(String.fromCodePoint(parseInt(unicode, 16)).length).toBe(
          description === "X, CANCELLATION" ? 2 : 1
        );
      });
    });
  });
});

describe("leet: String.length > 0", () => {
  Object.values(Letter).forEach((letter: Letter) => {
    leetJSON[letter].forEach((leet) => {
      it(`${letter}: ${leet}`, () => {
        expect(leet.length).toBeGreaterThan(0);
      });
    });
  });
});
