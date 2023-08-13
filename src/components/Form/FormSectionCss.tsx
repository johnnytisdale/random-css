import AnimationOptions from "../../interfaces/AnimationOptions";
import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";
import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssColorProperty from "../../types/CssColorProperty";
import StyleConfig from "../../interfaces/StyleConfig";
import CssProperty from "../../enums/CssPropertyName";
import FontFamilyOptions from "../../interfaces/FontFamilyOptions";
import FontStyleOptions from "../../interfaces/FontStyleOptions";
import FontWeightValue from "../../enums/FontWeightValue";
import FormOptionArray from "./FormOptionArray";
import FormOptionBoolean from "./FormOptionBoolean";
import FormOptionLength from "./FormOptionLength";
import FormSection from "./FormSection";
import FormSubsection from "./FormSubsection";
import FormSubsectionAnimation from "./Animation/FormSubsectionAnimation";
import FormSubsectionBorderRadius from "./FormSubsectionBorderRadius";
import FormSubsectionColor from "./FormSubsectionColor";
import FormSubsectionFontFamily from "./FormSubsectionFontFamily";
import FormSubsectionFontStyle from "./FormSubsectionFontStyle";
import LengthOptions from "../../interfaces/LengthOptions";
import TextDecorationLineKeyword from "../../enums/TextDecorationLineKeyword";
import TextDecorationStyleKeyword from "../../enums/TextDecorationStyleKeyword";

import * as React from "react";
import { useCallback, useState } from "react";

interface ToggleCSS {
  all: boolean;
  none: boolean;
}

interface Props {
  styleConfig: StyleConfig;
  setStyleConfig: (styleConfig: StyleConfig) => void;
  external: boolean;
}

export default function FormSectionCss({
  styleConfig,
  setStyleConfig,
  external,
}: Props): React.ReactNode {
  const [toggleCss, setToggleCss] = useState<ToggleCSS>({
    all: false,
    none: false,
  });
  const setAnimationOption = useCallback(
    (option: AnimationOptions) =>
      setStyleConfig({
        animation: {
          ...styleConfig.animation,
          ...option,
        },
      }),
    [setStyleConfig, styleConfig]
  );

  const setBorderRadiusOption = useCallback(
    (option: BorderRadiusOptions) =>
      setStyleConfig({
        borderRadius: { ...styleConfig.borderRadius, ...option },
      }),
    [setStyleConfig, styleConfig]
  );

  const setLengthOption = useCallback(
    (
      key: Extract<CssProperty, CssProperty.BORDER_WIDTH>,
      option: LengthOptions
    ) => setStyleConfig({ [key]: { ...styleConfig[key], ...option } }),

    [setStyleConfig, styleConfig]
  );

  const setColorOption = useCallback(
    (key: CssColorProperty, option: ColorOptions) =>
      setStyleConfig({ [key]: { ...styleConfig[key], ...option } }),
    [setStyleConfig, styleConfig]
  );

  const setFontFamilyOption = useCallback(
    (option: FontFamilyOptions) =>
      setStyleConfig({ fontFamily: { ...styleConfig.fontFamily, ...option } }),
    [setStyleConfig, styleConfig]
  );

  const setFontStyleOption = useCallback(
    (option: FontStyleOptions) =>
      setStyleConfig({ fontStyle: { ...styleConfig.fontStyle, ...option } }),
    [setStyleConfig, styleConfig]
  );

  const toggleCssProperty = useCallback(
    (cssProperty: CssProperty, checked: boolean) => {
      const newCss: StyleConfig = {};

      /**
       * Defining using the spread operator is necessary to avoid problems with
       * prevProps in componentDidUpdate of the RandomCss component. If we don't
       * create a clone like this then prevProps will point to the same object as
       * the new props so the values in prevProps will reflect the updated values
       * instead of the previous values.
       */
      newCss[cssProperty] = {
        ...styleConfig[cssProperty],
        ...{ enabled: checked },
      };
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        newToggleCss.all = false;
      } else {
        newToggleCss.none = false;
      }
      setStyleConfig(newCss);
      setToggleCss(newToggleCss);
    },
    [setStyleConfig, setToggleCss, styleConfig, toggleCss]
  );

  const toggleAll = useCallback(
    (checked: boolean, select: boolean) => {
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        if (select) {
          newToggleCss.all = false;
        } else {
          newToggleCss.none = false;
        }
      } else {
        newToggleCss.all = select;
        newToggleCss.none = !select;
        const newCss: StyleConfig = {};
        Object.values(CssProperty).forEach((cssProperty) => {
          newCss[cssProperty] = {
            ...styleConfig[cssProperty],
            ...{ enabled: select },
          };
        });
        setStyleConfig(newCss);
      }
      setToggleCss(newToggleCss);
    },
    [setToggleCss, toggleCss, toggleCssProperty]
  );
  return (
    <FormSection id="style-config" title="style">
      <FormOptionBoolean
        checked={toggleCss.all}
        id="select-all-style"
        label="select all"
        setChecked={(checked) => toggleAll(checked, true)}
      />
      <FormOptionBoolean
        checked={toggleCss.none}
        id="select-none-style"
        label="select none"
        setChecked={(checked) => toggleAll(checked, false)}
      />
      <FormSubsectionAnimation
        external={external}
        option={styleConfig?.animation}
        setOption={setAnimationOption}
        toggle={toggleCssProperty}
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.BACKGROUND_COLOR}
        external={external}
        option={styleConfig?.backgroundColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.BORDER_COLOR}
        external={external}
        option={styleConfig?.borderColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
      />
      <FormSubsectionBorderRadius
        option={styleConfig?.borderRadius}
        setOption={setBorderRadiusOption}
        toggle={toggleCssProperty}
      />
      <FormOptionBoolean
        checked={styleConfig?.borderStyle?.enabled === true}
        label="borderStyle"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.BORDER_STYLE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => styleConfig?.borderStyle?.enabled !== true}
            possibleValues={Object.values(BorderStyleKeyword)}
            setValues={(borderStyles) =>
              setStyleConfig({
                borderStyle: {
                  ...styleConfig.borderStyle,
                  ...{ borderStyles },
                },
              })
            }
            values={styleConfig?.borderStyle.borderStyles}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormOptionLength
        label="borderWidth"
        option={styleConfig?.borderWidth}
        setOption={(option) =>
          setLengthOption(CssProperty.BORDER_WIDTH, option)
        }
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.COLOR}
        external={external}
        option={styleConfig?.color}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
      />
      <FormSubsectionFontFamily
        option={styleConfig?.fontFamily}
        setOption={(option) => setFontFamilyOption(option)}
        toggle={toggleCssProperty}
      />
      <FormSubsectionFontStyle
        external={external}
        option={styleConfig?.fontStyle}
        setOption={setFontStyleOption}
        toggle={toggleCssProperty}
      />
      <FormOptionBoolean
        checked={styleConfig?.fontWeight?.enabled === true}
        label="fontWeight"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.FONT_WEIGHT, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => styleConfig?.fontWeight?.enabled !== true}
            possibleValues={Object.values(FontWeightValue)}
            setValues={(fontWeights) =>
              setStyleConfig({
                fontWeight: {
                  ...styleConfig.fontWeight,
                  ...{ fontWeights },
                },
              })
            }
            values={styleConfig?.fontWeight?.fontWeights}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormSubsectionColor
        cssPropertyName={CssProperty.TEXT_DECORATION_COLOR}
        external={external}
        option={styleConfig?.textDecorationColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
      />
      <FormOptionBoolean
        checked={styleConfig?.textDecorationLine?.enabled === true}
        label="textDecorationLine"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.TEXT_DECORATION_LINE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => styleConfig?.textDecorationLine?.enabled !== true}
            possibleValues={Object.values(TextDecorationLineKeyword)}
            setValues={(lines) => {
              setStyleConfig({
                textDecorationLine: {
                  ...styleConfig.textDecorationLine,
                  ...{ lines },
                },
              });
            }}
            values={styleConfig?.textDecorationLine.lines}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormOptionBoolean
        checked={styleConfig?.textDecorationStyle?.enabled === true}
        label="textDecorationStyle"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.TEXT_DECORATION_STYLE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => styleConfig?.textDecorationStyle?.enabled !== true}
            possibleValues={Object.values(TextDecorationStyleKeyword)}
            setValues={(styles) =>
              setStyleConfig({
                textDecorationStyle: {
                  ...styleConfig.textDecorationStyle,
                  ...{ styles },
                },
              })
            }
            values={styleConfig?.textDecorationStyle.styles}
          />
        </FormSubsection>
      </FormOptionBoolean>
    </FormSection>
  );
}
