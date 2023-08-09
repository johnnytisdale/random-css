import leetJSON from "../json/leet.json";
import unicodeJSON from "../json/unicode.json";

import Randomizable from "./Randomizable";

export default class Glyph extends Randomizable {
  public name = "glyph";

  private glyphs: Array<string> = [this.character];

  constructor(
    private character: string,
    private leet: boolean,
    private unicode: boolean
  ) {
    super();
    const lower = this.character.toLowerCase();
    if (this.leet) {
      this.glyphs.push(...getLeetValues(lower));
    }
    if (this.unicode) {
      this.glyphs.push(...getUnicodeValues(lower));
    }
  }

  public getRandomValue(): string {
    return Randomizable.array(this.glyphs);
  }
}

function getLeetValues(character: string): Array<string> {
  switch (character) {
    case "a":
      return leetJSON.a;
    case "b":
      return leetJSON.b;
    case "c":
      return leetJSON.c;
    case "d":
      return leetJSON.d;
    case "e":
      return leetJSON.e;
    case "f":
      return leetJSON.f;
    case "g":
      return leetJSON.g;
    case "h":
      return leetJSON.h;
    case "i":
      return leetJSON.i;
    case "j":
      return leetJSON.j;
    case "k":
      return leetJSON.k;
    case "l":
      return leetJSON.l;
    case "m":
      return leetJSON.m;
    case "n":
      return leetJSON.n;
    case "o":
      return leetJSON.o;
    case "p":
      return leetJSON.p;
    case "q":
      return leetJSON.q;
    case "r":
      return leetJSON.r;
    case "s":
      return leetJSON.s;
    case "t":
      return leetJSON.t;
    case "u":
      return leetJSON.u;
    case "v":
      return leetJSON.v;
    case "w":
      return leetJSON.w;
    case "x":
      return leetJSON.x;
    case "y":
      return leetJSON.y;
    case "z":
      return leetJSON.z;
    default:
      return [];
  }
}

// TODO: support "Force case" (only lowercase or only uppercase)
function getUnicodeValues(character: string): Array<string> {
  const mapFunction = ({ unicode }: { unicode: string }) => {
    return String.fromCodePoint(parseInt(unicode, 16));
  };
  switch (character) {
    case "a":
      return unicodeJSON.a.map(mapFunction);
    case "b":
      return unicodeJSON.b.map(mapFunction);
    case "c":
      return unicodeJSON.c.map(mapFunction);
    case "d":
      return unicodeJSON.d.map(mapFunction);
    case "e":
      return unicodeJSON.e.map(mapFunction);
    case "f":
      return unicodeJSON.f.map(mapFunction);
    case "g":
      return unicodeJSON.g.map(mapFunction);
    case "h":
      return unicodeJSON.h.map(mapFunction);
    case "i":
      return unicodeJSON.i.map(mapFunction);
    case "j":
      return unicodeJSON.j.map(mapFunction);
    case "k":
      return unicodeJSON.k.map(mapFunction);
    case "l":
      return unicodeJSON.l.map(mapFunction);
    case "m":
      return unicodeJSON.m.map(mapFunction);
    case "n":
      return unicodeJSON.n.map(mapFunction);
    case "o":
      return unicodeJSON.o.map(mapFunction);
    case "p":
      return unicodeJSON.p.map(mapFunction);
    case "q":
      return unicodeJSON.q.map(mapFunction);
    case "r":
      return unicodeJSON.r.map(mapFunction);
    case "s":
      return unicodeJSON.s.map(mapFunction);
    case "t":
      return unicodeJSON.t.map(mapFunction);
    case "u":
      return unicodeJSON.u.map(mapFunction);
    case "v":
      return unicodeJSON.v.map(mapFunction);
    case "w":
      return unicodeJSON.w.map(mapFunction);
    case "x":
      return unicodeJSON.x.map(mapFunction);
    case "y":
      return unicodeJSON.y.map(mapFunction);
    case "z":
      return unicodeJSON.z.map(mapFunction);
    default:
      return [];
  }
}
