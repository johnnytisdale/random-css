import GlyphType from "../../enums/GlyphType";
import GlyphConfig from "../../interfaces/GlyphConfig";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  config: GlyphConfig;
  setConfig: (config: GlyphConfig) => void;
}

export default function FormSectionGlyph({
  config,
  setConfig,
}: Props): React.ReactNode {
  return (
    <FormSection id="glyph-config" title="glyph config">
      <FormOptionBoolean
        checked={config?.leet?.enabled}
        label={GlyphType.LEET}
        setChecked={(enabled) => setConfig({ leet: { enabled } })}
      />
      <FormOptionBoolean
        checked={config?.unicode?.enabled}
        label={GlyphType.UNICODE}
        setChecked={(enabled) => setConfig({ unicode: { enabled } })}
      />
    </FormSection>
  );
}
