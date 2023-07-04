import leetJSON from "../json/leet.json";
import unicodeJSON from "../json/unicode.json";

import Letter from "../enums/ELowercaseLetter";
import Randomizable from "./Randomizable";

type UnicodeObject = {
  desciption: string,
  unicode: string
};

export default class Glyph extends Randomizable {

  public name: string = 'glyph';

  private glyphs: Array<string> = [];

  constructor(
    private character: string,
    private leet: boolean,
    private unicode: boolean
  ) {
    super();
    this.glyphs.push(this.character);
    const lowerCase = this.character.toLowerCase();
    if (this.leet && leetJSON.hasOwnProperty(lowerCase)) {
      leetJSON[lowerCase].forEach((leet: string) => {
        this.glyphs.push(leet);
      });
    }
    if (this.unicode && unicodeJSON.hasOwnProperty(lowerCase)) {
      unicodeJSON[lowerCase].forEach((unicodeObject: UnicodeObject) => {
        this.glyphs.push(
          String.fromCodePoint(parseInt(unicodeObject.unicode, 16))
        );
      });
    }
  }


  public getRandomValue(): string {
    return this.getRandomArrayElement(this.glyphs);
  }
}