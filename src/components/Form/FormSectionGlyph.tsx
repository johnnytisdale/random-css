import GlyphOption from "../../enums/GlyphOption";
import GlyphOptions from "../../interfaces/GlyphOptions";
import FormOptionBoolean from "./FormOptionBoolean";
import FormSection from "./FormSection";

import * as React from "react";

interface Props {
  options: GlyphOptions;
  toggle: (optionName: GlyphOption, enabled: boolean) => void;
}

export default function FormSectionGlyph({
  options,
  toggle,
}: Props): React.ReactNode {
  return (
    <FormSection id="glyph-options" title="glyph options">
      <FormOptionBoolean
        checked={options?.leet?.enabled}
        id="1337"
        label="1337"
        setChecked={(x) => toggle(GlyphOption.LEET, x)}
      />
      <FormOptionBoolean
        checked={options?.unicode?.enabled}
        id="unicode"
        label={GlyphOption.UNICODE}
        setChecked={(x) => toggle(GlyphOption.UNICODE, x)}
      />
    </FormSection>
  );
}
