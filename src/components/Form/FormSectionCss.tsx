import AnimationOptions from "../../interfaces/AnimationOptions";
import BorderRadiusOptions from "../../interfaces/BorderRadiusOptions";
import BorderStyleKeyword from "../../enums/BorderStyleKeyword";
import ColorOptions from "../../interfaces/ColorOptions";
import CssColorProperty from "../../types/CssColorProperty";
import CssOptions from "../../interfaces/CssOptions";
import CssProperty from "../../enums/CssProperty";
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
  css: CssOptions;
  setCss: (css: CssOptions) => void;
  unsafe: boolean;
}

export default function FormSectionCss({
  css,
  setCss,
  unsafe,
}: Props): React.ReactNode {
  const [toggleCss, setToggleCss] = useState<ToggleCSS>({
    all: false,
    none: false,
  });
  const setAnimationOption = useCallback(
    (option: AnimationOptions) =>
      setCss({
        animation: {
          ...css.animation,
          ...option,
        },
      }),
    [css, setCss]
  );

  const setBorderRadiusOption = useCallback(
    (option: BorderRadiusOptions) =>
      setCss({ borderRadius: { ...css.borderRadius, ...option } }),
    [css, setCss]
  );

  const setLengthOption = useCallback(
    (
      key: Extract<CssProperty, CssProperty.BORDER_WIDTH>,
      option: LengthOptions
    ) => setCss({ [key]: { ...css[key], ...option } }),

    [css, setCss]
  );

  const setColorOption = useCallback(
    (key: CssColorProperty, option: ColorOptions) =>
      setCss({ [key]: { ...css[key], ...option } }),
    [css, setCss]
  );

  const setFontFamilyOption = useCallback(
    (option: FontFamilyOptions) =>
      setCss({ fontFamily: { ...css.fontFamily, ...option } }),
    [css, setCss]
  );

  const setFontStyleOption = useCallback(
    (option: FontStyleOptions) =>
      setCss({ fontStyle: { ...css.fontStyle, ...option } }),
    [css, setCss]
  );

  const toggleCssProperty = useCallback(
    (cssProperty: CssProperty, checked: boolean) => {
      const newCss: CssOptions = {};

      /**
       * Defining using the spread operator is necessary to avoid problems with
       * prevProps in componentDidUpdate of the RandomCss component. If we don't
       * create a clone like this then prevProps will point to the same object as
       * the new props so the values in prevProps will reflect the updated values
       * instead of the previous values.
       */
      newCss[cssProperty] = {
        ...css[cssProperty],
        ...{ enabled: checked },
      };
      const newToggleCss = { ...toggleCss };
      if (!checked) {
        newToggleCss.all = false;
      } else {
        newToggleCss.none = false;
      }
      setCss(newCss);
      setToggleCss(newToggleCss);
    },
    [css, setCss, setToggleCss, toggleCss]
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
        const newCss: CssOptions = {};
        Object.values(CssProperty).forEach((cssProperty) => {
          newCss[cssProperty] = {
            ...css[cssProperty],
            ...{ enabled: select },
          };
        });
        setCss(newCss);
      }
      setToggleCss(newToggleCss);
    },
    [setToggleCss, toggleCss, toggleCssProperty]
  );
  return (
    <FormSection id="css-options" title="css options">
      <FormOptionBoolean
        checked={toggleCss.all}
        id="select-all-css"
        label="select all"
        setChecked={(checked) => toggleAll(checked, true)}
      />
      <FormOptionBoolean
        checked={toggleCss.none}
        id="select-none-css"
        label="select none"
        setChecked={(checked) => toggleAll(checked, false)}
      />
      <FormSubsectionAnimation
        option={css?.animation}
        setOption={setAnimationOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.BACKGROUND_COLOR}
        option={css?.backgroundColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.BORDER_COLOR}
        option={css?.borderColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormSubsectionBorderRadius
        option={css?.borderRadius}
        setOption={setBorderRadiusOption}
        toggle={toggleCssProperty}
      />
      <FormOptionBoolean
        checked={css?.borderStyle?.enabled === true}
        label="borderStyle"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.BORDER_STYLE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => css?.borderStyle?.enabled !== true}
            possibleValues={Object.values(BorderStyleKeyword)}
            setValues={(borderStyles) =>
              setCss({
                borderStyle: { ...css.borderStyle, ...{ borderStyles } },
              })
            }
            values={css?.borderStyle.borderStyles}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormOptionLength
        label="borderWidth"
        option={css?.borderWidth}
        setOption={(option) =>
          setLengthOption(CssProperty.BORDER_WIDTH, option)
        }
      />
      <FormSubsectionColor
        cssPropertyName={CssProperty.COLOR}
        option={css?.color}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormSubsectionFontFamily
        option={css?.fontFamily}
        setOption={(option) => setFontFamilyOption(option)}
        toggle={toggleCssProperty}
      />
      <FormSubsectionFontStyle
        option={css?.fontStyle}
        setOption={setFontStyleOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormOptionBoolean
        checked={css?.fontWeight?.enabled === true}
        label="fontWeight"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.FONT_WEIGHT, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => css?.fontWeight?.enabled !== true}
            possibleValues={Object.values(FontWeightValue)}
            setValues={(fontWeights) =>
              setCss({
                fontWeight: {
                  ...css.fontWeight,
                  ...{ fontWeights },
                },
              })
            }
            values={css?.fontWeight?.fontWeights}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormSubsectionColor
        cssPropertyName={CssProperty.TEXT_DECORATION_COLOR}
        option={css?.textDecorationColor}
        setColorOption={setColorOption}
        toggle={toggleCssProperty}
        unsafe={unsafe}
      />
      <FormOptionBoolean
        checked={css?.textDecorationLine?.enabled === true}
        label="textDecorationLine"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.TEXT_DECORATION_LINE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => css?.textDecorationLine?.enabled !== true}
            possibleValues={Object.values(TextDecorationLineKeyword)}
            setValues={(lines) => {
              setCss({
                textDecorationLine: { ...css.textDecorationLine, ...{ lines } },
              });
            }}
            values={css?.textDecorationLine.lines}
          />
        </FormSubsection>
      </FormOptionBoolean>
      <FormOptionBoolean
        checked={css?.textDecorationStyle?.enabled === true}
        label="textDecorationStyle"
        setChecked={(checked) =>
          toggleCssProperty(CssProperty.TEXT_DECORATION_STYLE, checked)
        }
      >
        <FormSubsection>
          <FormOptionArray
            disabled={() => css?.textDecorationStyle?.enabled !== true}
            possibleValues={Object.values(TextDecorationStyleKeyword)}
            setValues={(styles) =>
              setCss({
                textDecorationStyle: {
                  ...css.textDecorationStyle,
                  ...{ styles },
                },
              })
            }
            values={css?.textDecorationStyle.styles}
          />
        </FormSubsection>
      </FormOptionBoolean>
    </FormSection>
  );
}
