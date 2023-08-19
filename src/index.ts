import AnimationDirection from "./enums/AnimationDirection";
import AnimationEasingFunction from "./enums/AnimationEasingFunction";
import AnimationFillMode from "./enums/AnimationFillMode";
import AnimationIterationCountOptions from "./interfaces/AnimationIterationCountOptions";
import AnimationOptions from "./interfaces/AnimationOptions";
import AnimationStepPosition from "./enums/AnimationStepPosition";
import AnimationTransformation from "./enums/AnimationTransformation";
import BorderRadiusOptions from "./interfaces/BorderRadiusOptions";
import BorderStyleKeyword from "./enums/BorderStyleKeyword";
import Color from "./classes/CSS/Color";
import ColorKeyword from "./enums/ColorKeyword";
import ColorOptions from "./interfaces/ColorOptions";
import type CssColorProperty from "./types/CssColorProperty";
import CssProperty from "./classes/CSS/CssProperty";
import CssPropertyName from "./enums/CssPropertyName";
import FontFamilyName from "./enums/FontFamilyName";
import FontFamilyOptions from "./interfaces/FontFamilyOptions";
import FontGenericName from "./enums/FontGenericName";
import FontStyleKeyword from "./enums/FontStyleKeyword";
import FontStyleOptions from "./interfaces/FontStyleOptions";
import FontWeightValue from "./enums/FontWeightValue";
import GlyphConfig from "./interfaces/GlyphConfig";
import type GlyphInput from "./types/GlyphInput";
import GlyphType from "./enums/GlyphType";
import LengthOptions from "./interfaces/LengthOptions";
import LengthUnit from "./enums/LengthUnit";
import RandomCharacter from "./components/RandomCharacter";
import RandomCssUtils from "./classes/RandomCssUtils";
import RandomElement from "./components/RandomElement";
import {
  RandomA,
  RandomBody,
  RandomButton,
  RandomDiv,
  RandomEm,
  RandomFooter,
  RandomForm,
  RandomH1,
  RandomH2,
  RandomH3,
  RandomH4,
  RandomH5,
  RandomH6,
  RandomHead,
  RandomHeader,
  RandomHtml,
  RandomImg,
  RandomInput,
  RandomLabel,
  RandomMain,
  RandomMenu,
  RandomNav,
  RandomOl,
  RandomOption,
  RandomP,
  RandomSection,
  RandomSelect,
  RandomSmall,
  RandomSpan,
  RandomStrong,
  RandomTable,
  RandomTbody,
  RandomTd,
  RandomTextarea,
  RandomTfoot,
  RandomTh,
  RandomThead,
  RandomTitle,
  RandomTr,
  RandomUl,
} from "./components/RandomElements";
import RandomString from "./components/RandomString";
import StyleConfig from "./interfaces/StyleConfig";
import type StyleInput from "./types/StyleInput";
import TextDecorationLineKeyword from "./enums/TextDecorationLineKeyword";
import TextDecorationStyleKeyword from "./enums/TextDecorationStyleKeyword";
import {
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL,
} from "./values/defaults/css/AnimationDefaults";
import {
  DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  DEFAULT_BORDER_RADIUS_MIN_RADIUS,
} from "./values/defaults/css/BorderRadiusDefaults";
import {
  DEFAULT_COLOR_ALPHA_MAX,
  DEFAULT_COLOR_ALPHA_MIN,
} from "./values/defaults/css/ColorDefaults";
import DEFAULT_GLYPH_CONFIG from "./values/defaults/DefaultGlyphConfig";
import { DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL } from "./values/defaults/RandomElementPropsDefaults";
import {
  DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES,
  DEFAULT_RANDOM_STRING_PROPS_SIZE,
  DEFAULT_RANDOM_STRING_PROPS_TEXT,
} from "./values/defaults/RandomStringPropsDefaults";
import {
  DEFAULT_FONT_STYLE_MAX_DEGREES,
  DEFAULT_FONT_STYLE_MIN_DEGREES,
} from "./values/defaults/css/FontStyleDefaults";
import {
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
} from "./values/defaults/css/LengthDefaults";
import DEFAULT_STYLE_CONFIG from "./values/defaults/DefaultStyleConfig";

const AnimationDirections = Object.values(AnimationDirection);
const AnimationEasingFunctions = Object.values(AnimationEasingFunction);
const AnimationFillModes = Object.values(AnimationFillMode);
const AnimationStepPositions = Object.values(AnimationStepPosition);
const AnimationTransformations = Object.values(AnimationTransformation);
const BorderStyleKeywords = Object.values(BorderStyleKeyword);
const ColorKeywords = Object.values(ColorKeyword);
const CssPropertyNames = Object.values(CssPropertyName);
const FontFamilyNames = Object.values(FontFamilyName);
const FontGenericNames = Object.values(FontGenericName);
const FontStyleKeywords = Object.values(FontStyleKeyword);
const FontWeightValues = Object.values(FontWeightValue);
const GlyphTypes = Object.values(GlyphType);
const LengthUnits = Object.values(LengthUnit);
const TextDecorationLineKeywords = Object.values(TextDecorationLineKeyword);
const TextDecorationStyleKeywords = Object.values(TextDecorationStyleKeyword);

export {
  AnimationDirection,
  AnimationDirections,
  AnimationEasingFunction,
  AnimationEasingFunctions,
  AnimationFillMode,
  AnimationFillModes,
  AnimationIterationCountOptions,
  AnimationOptions,
  AnimationStepPosition,
  AnimationStepPositions,
  AnimationTransformation,
  AnimationTransformations,
  BorderRadiusOptions,
  BorderStyleKeyword,
  BorderStyleKeywords,
  Color,
  ColorKeywords,
  ColorOptions,
  CssColorProperty,
  CssProperty,
  CssPropertyName,
  CssPropertyNames,
  DEFAULT_ANIMATION_DURATION_MAX,
  DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL,
  DEFAULT_ANIMATION_DURATION_MIN,
  DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL,
  DEFAULT_ANIMATION_ITERATION_COUNT_MAX,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN,
  DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL,
  DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  DEFAULT_BORDER_RADIUS_MIN_RADIUS,
  DEFAULT_COLOR_ALPHA_MAX,
  DEFAULT_COLOR_ALPHA_MIN,
  DEFAULT_FONT_STYLE_MAX_DEGREES,
  DEFAULT_FONT_STYLE_MIN_DEGREES,
  DEFAULT_GLYPH_CONFIG,
  DEFAULT_LENGTH_MAX,
  DEFAULT_LENGTH_MIN,
  DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL,
  DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES,
  DEFAULT_RANDOM_STRING_PROPS_SIZE,
  DEFAULT_RANDOM_STRING_PROPS_TEXT,
  DEFAULT_STYLE_CONFIG,
  FontFamilyName,
  FontFamilyNames,
  FontFamilyOptions,
  FontGenericName,
  FontGenericNames,
  FontStyleKeyword,
  FontStyleKeywords,
  FontStyleOptions,
  FontWeightValue,
  FontWeightValues,
  GlyphConfig,
  GlyphInput,
  GlyphType,
  GlyphTypes,
  LengthOptions,
  LengthUnit,
  LengthUnits,
  RandomA,
  RandomBody,
  RandomButton,
  RandomCharacter,
  RandomCssUtils,
  RandomDiv,
  RandomElement,
  RandomEm,
  RandomFooter,
  RandomForm,
  RandomH1,
  RandomH2,
  RandomH3,
  RandomH4,
  RandomH5,
  RandomH6,
  RandomHead,
  RandomHeader,
  RandomHtml,
  RandomImg,
  RandomInput,
  RandomLabel,
  RandomMain,
  RandomMenu,
  RandomNav,
  RandomOl,
  RandomOption,
  RandomP,
  RandomSection,
  RandomSelect,
  RandomSmall,
  RandomSpan,
  RandomString,
  RandomStrong,
  RandomTable,
  RandomTbody,
  RandomTd,
  RandomTextarea,
  RandomTfoot,
  RandomTh,
  RandomThead,
  RandomTitle,
  RandomTr,
  RandomUl,
  StyleConfig,
  StyleInput,
  TextDecorationLineKeyword,
  TextDecorationLineKeywords,
  TextDecorationStyleKeyword,
  TextDecorationStyleKeywords,
};