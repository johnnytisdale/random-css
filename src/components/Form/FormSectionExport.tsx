import FormSection from "./FormSection";
import Options from "../../interfaces/Options";

import * as React from "react";
import { useMemo } from "react";

interface Props {
  copied: boolean;
  external: boolean;
  optionsToExport: Options;
  setCopied: (copied: boolean) => void;
}

export default function FormSectionExport({
  copied,
  external,
  optionsToExport,
  setCopied,
}: Props): React.ReactNode {
  const popupClassName = useMemo(
    () =>
      "popup-text" +
      (copied === true ? " show" : copied === false ? " hide" : ""),
    [copied]
  );
  return (
    <FormSection id="export-options" title="export">
      {external && (
        <div id="export-external-css">
          You selected the "external" option. Don't forget to use the{" "}
          <a href="random.css" target="_blank">
            external CSS file
          </a>{" "}
          and ensure that it is specified in the{" "}
          <a
            href={
              "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
              "Headers/Content-Security-Policy/style-src"
            }
            target="_blank"
          >
            style-src
          </a>{" "}
          directive of your{" "}
          <a
            href={
              "https://developer.mozilla.org/en-US/docs/Web/HTTP/" +
              "Headers/Content-Security-Policy"
            }
            target="_blank"
          >
            Content Security Policy
          </a>
          .
        </div>
      )}
      <div id="export-textarea" className="option">
        <div className="input">
          <textarea disabled={true} value={JSON.stringify(optionsToExport)} />
        </div>
      </div>
      <div id="export-button" className="option">
        <div className="input popup-container">
          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(optionsToExport));
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            copy
          </button>
          <div className={popupClassName}>copied!</div>
        </div>
      </div>
    </FormSection>
  );
}
