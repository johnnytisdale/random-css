import Glyph from "../classes/Glyph";
import GlyphOptions from "../interfaces/GlyphOptions";
import Randomizable from "../classes/Randomizable";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  character: string;
  options: GlyphOptions;
}

export default function Character({
  character,
  options,
}: Props): React.ReactNode {
  const [glyph, setGlyph] = useState(character);
  const randomizable = useRef<Glyph>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const timeoutFunction = useCallback(() => {
    if (randomizable.current == null) {
      return;
    }
    const newValue = randomizable.current.getRandomValue();
    if (newValue !== undefined && newValue !== glyph) {
      setGlyph(newValue);
    }
    timeout.current = setTimeout(
      () => timeoutFunction(),
      Randomizable.number(300, 3000)
    );
  }, [randomizable.current, timeout.current]);

  // randomizables changed
  useEffect(() => {
    randomizable.current = Glyph.enabled(options)
      ? new Glyph(character, options)
      : null;
    if (randomizable.current == null) {
      if (timeout.current == null) {
        return;
      }
      setGlyph(character);
      timeout.current = null;
    } else if (timeout.current) {
      /**
       * We don't need to add a new timeout for this one because it already
       * has a timeout.
       */
      return;
    } else {
      /**
       * This option was just enabled. There is no need to do setTimeout
       * here because that will happen at the end of timeoutFunction.
       */
      timeoutFunction();
    }
  }, [character, options]);

  return glyph;
}