import Glyph from "../classes/Glyph";
import GlyphConfig from "../interfaces/GlyphConfig";
import Randomizable from "../classes/Randomizable";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const timeoutFunction = useCallback(() => {
    setGlyph(randomizable.current?.getRandomValue() ?? character);
    if (randomizable.current?.shouldRepeat) {
      timeout.current = setTimeout(
        timeoutFunction,
        Randomizable.number(
          randomizable.current.minDelay,
          randomizable.current.maxDelay
        )
      );
    }
  }, []);

  // config changed
  useEffect(() => {
    randomizable.current = Glyph.enabled(config)
      ? new Glyph(character, config)
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
  }, [config]);

  return glyph;
}
