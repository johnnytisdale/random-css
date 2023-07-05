import Glyph from "../src/classes/Glyph";

const glyph = new Glyph('a', false, false);

test("Glyph.name == 'glyph'", () => {
  expect(glyph.name).toBe('glyph');
});

test("Glyph.getRandomValue() == 'a'", () => {
  expect(glyph.getRandomValue()).toBe('a');
});