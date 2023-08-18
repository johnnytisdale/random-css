import FormSection from "./FormSection";
import GlyphInput from "../../types/GlyphInput";
import StyleInput from "../../types/StyleInput";

import * as React from "react";
import { useMemo, useState } from "react";

interface Props {
  external: boolean;
  glyphConfig: GlyphInput;
  styleConfig: StyleInput;
}

const cspLink = (
  <a
    href={
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"
    }
    target="_blank"
  >
    Content Security Policy
  </a>
);

const cssLink = (
  <a href="random.css" target="_blank">
    external CSS file
  </a>
);

const styleSrcLink = (
  <a
    href={
      "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src"
    }
    target="_blank"
  >
    style-src
  </a>
);

const externalNotice = (
  <div id="external-notice">
    You selected the "external" option. Don't forget to use the {cssLink} and
    ensure that it is specified in the {styleSrcLink} directive of your{" "}
    {cspLink}.
  </div>
);

export default function FormSectionExport({
  external,
  glyphConfig,
  styleConfig,
}: Props): React.ReactNode {
  const [copiedGlyph, setCopiedGlyph] = useState<boolean>(null);
  const [copiedStyle, setCopiedStyle] = useState<boolean>(null);
  const glyphJson = useMemo(() => JSON.stringify(glyphConfig), [glyphConfig]);
  const glyphPopup = useMemo(
    () =>
      "popup-text" +
      (copiedGlyph === true ? " show" : copiedGlyph === false ? " hide" : ""),
    [copiedGlyph]
  );
  const styleJson = useMemo(() => JSON.stringify(styleConfig), [styleConfig]);
  const stylePopup = useMemo(
    () =>
      "popup-text" +
      (copiedStyle === true ? " show" : copiedStyle === false ? " hide" : ""),
    [copiedStyle]
  );
  return (
    <FormSection id="export-options" title="export">
      <div className="export-subsection">
        <div className="label">style</div>
        {external && externalNotice}
        <div className="textarea">
          <textarea
            spellCheck={false}
            value={styleJson}
            onChange={() => null}
          />
        </div>
        <div className="export-button">
          <div className="input popup-container">
            <button
              onClick={() => {
                navigator.clipboard.writeText(styleJson);
                setCopiedStyle(true);
                setTimeout(() => setCopiedStyle(false), 1500);
              }}
            >
              copy
            </button>
            <div className={stylePopup}>copied!</div>
          </div>
        </div>
      </div>
      <div className="export-subsection">
        <div className="label">glyphConfig</div>
        <div className="textarea">
          <textarea
            spellCheck={false}
            value={glyphJson}
            onChange={() => null}
          />
        </div>
        <div className="export-button">
          <div className="input popup-container">
            <button
              onClick={() => {
                navigator.clipboard.writeText(glyphJson);
                setCopiedGlyph(true);
                setTimeout(() => setCopiedGlyph(false), 1500);
              }}
            >
              copy
            </button>
            <div className={glyphPopup}>copied!</div>
          </div>
        </div>
      </div>
    </FormSection>
  );
}
