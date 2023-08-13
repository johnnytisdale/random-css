import GlyphOption from "../../enums/GlyphOption";
import GlyphConfig from "../../interfaces/GlyphConfig";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  options: GlyphConfig;
  setOptions: (options: GlyphConfig) => void;
}

export default function FormSectionGlyph({
  options,
  setOptions,
}: Props): React.ReactNode {
  return (
    <FormSection id="glyph-options" title="glyph options">
      <FormOptionBoolean
        checked={options?.leet?.enabled}
        label={GlyphOption.LEET}
        setChecked={(enabled) => setOptions({ leet: { enabled } })}
      />
      <FormOptionBoolean
        checked={options?.unicode?.enabled}
        label={GlyphOption.UNICODE}
        setChecked={(enabled) => setOptions({ unicode: { enabled } })}
      />
    </FormSection>
  );
}
