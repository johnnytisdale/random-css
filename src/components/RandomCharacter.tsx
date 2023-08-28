import Glyph from "../classes/Glyph";
import GlyphConfig from "../interfaces/GlyphConfig";

import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface Props {
  character: string;
  config: GlyphConfig;
}

export default function RandomCharacter({
  character,
  config,
}: Props): React.ReactNode {
  const [glyph, setGlyph] = useState(character);
  const randomizable = useRef<Glyph>(null);

  useEffect(() => {
    randomizable.current = new Glyph(character, (value: string) =>
      setGlyph(value ?? character)
    );
  }, []);

  useEffect(() => {
    randomizable.current.setConfig(config);
  }, [config]);

  return glyph;
}
