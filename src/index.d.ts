declare module "random-css" {
  export type AnimationDirection =
    | "alternate"
    | "alternate-|reverse"
    | "normal"
    | "reverse";
  export const AnimationDirections: Array<AnimationDirection>;
  export type AnimationEasingFunction =
    | "cubic-bezier"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear"
    | "step-end"
    | "step-start"
    | "steps";
  export const AnimationEasingFunctions: Array<AnimationEasingFunction>;
  export type AnimationFillMode = "backwards" | "both" | "forwards";
  export const AnimationFillModes: Array<AnimationFillMode>;
  export interface AnimationIterationCountOptions {
    infinite?: boolean;
    infiniteProbability?: number;
    integersOnly?: boolean;
    max?: number;
    min?: number;
  }
  export interface AnimationOptions extends Option {
    directions?: AnimationDirection[];
    durationMax?: number;
    durationMin?: number;
    easingFunctions?: AnimationEasingFunction[];
    fillModes?: AnimationFillMode[];
    iterationCount?: AnimationIterationCountOptions;
    stepPositions?: AnimationStepPosition[];
    transformations?: AnimationTransformation[];
  }
  export type AnimationStepPosition =
    | "end"
    | "jump-both"
    | "jump-end"
    | "jump-none"
    | "jump-start"
    | "start";
  export const AnimationStepPositions: Array<AnimationStepPosition>;
  export type AnimationTransformation =
    | "rotate"
    | "scaleDown"
    | "scaleUp"
    | "skewX"
    | "skewXY"
    | "skewY";
  export const AnimationTransformations: Array<AnimationTransformation>;
  export interface BorderRadiusOptions extends Option {
    maxCorners?: number;
    minCorners?: number;
    maxRadius?: number;
    minRadius?: number;
    slash?: boolean;
    slashProbability?: number;
  }
  export type BorderStyleKeyword =
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "hidden"
    | "inset"
    | "none"
    | "outset"
    | "ridge"
    | "solid";
  export const BorderStyleKeywords: Array<BorderStyleKeyword>;
  export interface BorderStyleOptions extends Option {
    borderStyles?: BorderStyleKeyword[];
  }
  export type ColorKeyword =
    | "AliceBlue"
    | "AntiqueWhite"
    | "Aqua"
    | "Aquamarine"
    | "Azure"
    | "Beige"
    | "Bisque"
    | "Black"
    | "BlanchedAlmond"
    | "Blue"
    | "BlueViolet"
    | "Brown"
    | "BurlyWood"
    | "CadetBlue"
    | "Chartreuse"
    | "Chocolate"
    | "Coral"
    | "CornflowerBlue"
    | "Cornsilk"
    | "Crimson"
    | "Cyan"
    | "DarkBlue"
    | "DarkCyan"
    | "DarkGoldenrod"
    | "DarkGray"
    | "DarkGreen"
    | "DarkKhaki"
    | "DarkMagenta"
    | "DarkOliveGreen"
    | "DarkOrange"
    | "DarkOrchid"
    | "DarkRed"
    | "DarkSalmon"
    | "DarkSeaGreen"
    | "DarkSlateBlue"
    | "DarkSlateGray"
    | "DarkTurquoise"
    | "DarkViolet"
    | "DeepPink"
    | "DeepSkyBlue"
    | "DimGray"
    | "DodgerBlue"
    | "FireBrick"
    | "FloralWhite"
    | "ForestGreen"
    | "Fuchsia"
    | "Gainsboro"
    | "GhostWhite"
    | "Gold"
    | "Goldenrod"
    | "Gray"
    | "Green"
    | "GreenYellow"
    | "Honeydew"
    | "HotPink"
    | "IndianRed"
    | "Indigo"
    | "Ivory"
    | "Khaki"
    | "Lavender"
    | "LavenderBlush"
    | "LawnGreen"
    | "LemonChiffon"
    | "LightBlue"
    | "LightCoral"
    | "LightCyan"
    | "LightGoldenrodYellow"
    | "LightGreen"
    | "LightGrey"
    | "LightPink"
    | "LightSalmon"
    | "LightSeaGreen"
    | "LightSkyBlue"
    | "LightSlateGray"
    | "LightSteelBlue"
    | "LightYellow"
    | "Lime"
    | "LimeGreen"
    | "Linen"
    | "Magenta"
    | "Maroon"
    | "MediumAquamarine"
    | "MediumBlue"
    | "MediumOrchid"
    | "MediumPurple"
    | "MediumSeaGreen"
    | "MediumSlateBlue"
    | "MediumSpringGreen"
    | "MediumTurquoise"
    | "MediumVioletRed"
    | "MidnightBlue"
    | "MintCream"
    | "MistyRose"
    | "Moccasin"
    | "NavajoWhite"
    | "Navy"
    | "OldLace"
    | "Olive"
    | "OliveDrab"
    | "Orange"
    | "OrangeRed"
    | "Orchid"
    | "PaleGoldenrod"
    | "PaleGreen"
    | "PaleTurquoise"
    | "PaleVioletRed"
    | "PapayaWhip"
    | "PeachPuff"
    | "Peru"
    | "Pink"
    | "Plum"
    | "PowderBlue"
    | "Purple"
    | "RebeccaPurple"
    | "Red"
    | "RosyBrown"
    | "RoyalBlue"
    | "SaddleBrown"
    | "Salmon"
    | "SandyBrown"
    | "SeaGreen"
    | "Seashell"
    | "Sienna"
    | "Silver"
    | "SkyBlue"
    | "SlateBlue"
    | "SlateGray"
    | "Snow"
    | "SpringGreen"
    | "SteelBlue"
    | "Tan"
    | "Teal"
    | "Thistle"
    | "Tomato"
    | "Turquoise"
    | "Violet"
    | "Wheat"
    | "White"
    | "WhiteSmoke"
    | "Yellow"
    | "YellowGreen";
  export const ColorKeywords: Array<ColorKeyword>;
  export interface ColorOptions extends Option {
    alpha?: boolean;
    aMax?: number;
    aMin?: number;
    bMax?: number;
    bMin?: number;
    colorKeywords?: ColorKeyword[];
    gMax?: number;
    gMin?: number;
    rMax?: number;
    rMin?: number;
  }
  export type CssColorProperty = Extract<
    CssPropertyName,
    "backgroundColor" | "borderColor" | "color" | "textDecorationColor"
  >;
  export type CssPropertyName =
    | "animation"
    | "backgroundColor"
    | "borderColor"
    | "borderRadius"
    | "borderStyle"
    | "borderWidth"
    | "color"
    | "fontFamily"
    | "fontStyle"
    | "fontWeight"
    | "textDecorationColor"
    | "textDecorationLine"
    | "textDecorationStyle";
  export const CssPropertyNames: Array<CssPropertyName>;
  export const DEFAULT_ANIMATION_DURATION_MAX: number;
  export const DEFAULT_ANIMATION_DURATION_MAX_EXTERNAL: number;
  export const DEFAULT_ANIMATION_DURATION_MIN: number;
  export const DEFAULT_ANIMATION_DURATION_MIN_EXTERNAL: number;
  export const DEFAULT_ANIMATION_ITERATION_COUNT_MAX: number;
  export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN: number;
  export const DEFAULT_ANIMATION_ITERATION_COUNT_MIN_EXTERNAL: number;
  export const DEFAULT_BORDER_RADIUS_MAX_CORNERS: number;
  export const DEFAULT_BORDER_RADIUS_MAX_RADIUS: number;
  export const DEFAULT_BORDER_RADIUS_MIN_CORNERS: number;
  export const DEFAULT_BORDER_RADIUS_MIN_RADIUS: number;
  export const DEFAULT_COLOR_ALPHA_MAX: number;
  export const DEFAULT_COLOR_ALPHA_MIN: number;
  export const DEFAULT_FONT_STYLE_MAX_DEGREES: number;
  export const DEFAULT_FONT_STYLE_MIN_DEGREES: number;
  export const DEFAULT_GLYPH_CONFIG: GlyphConfig;
  export const DEFAULT_LENGTH_MAX: number;
  export const DEFAULT_LENGTH_MIN: number;
  export const DEFAULT_RANDOM_ELEMENT_PROPS_EXTERNAL: boolean;
  export const DEFAULT_RANDOM_STRING_PROPS_IGNORE_SPACES: boolean;
  export const DEFAULT_RANDOM_STRING_PROPS_SIZE: number;
  export const DEFAULT_RANDOM_STRING_PROPS_TEXT: string;
  export const DEFAULT_STYLE_CONFIG: StyleConfig;
  export type FontFamilyName =
    | "Arial"
    | '"Arial Black"'
    | "Bookman"
    | "Candara"
    | '"Comic Sans MS"'
    | "Courier"
    | '"Courier New"'
    | "Garamond"
    | "Georgia"
    | "Impact"
    | "Palatino"
    | "Roboto"
    | '"Times New Roman"'
    | "Times"
    | "Verdana";
  export const FontFamilyNames: Array<FontFamilyName>;
  export interface FontFamilyOptions extends Option {
    fallbackProbability?: number;
    fontFamilyNames?: FontFamilyName[];
    fontGenericNames?: FontGenericName[];
    includeFallbacks?: boolean;
    includeFamilyNames?: boolean;
    includeGenericNames?: boolean;
  }
  export type FontGenericName =
    | "cursive"
    | "emoji"
    | "fangsong"
    | "fantasy"
    | "math"
    | "monospace"
    | "sans-serif"
    | "serif"
    | "system-ui"
    | "ui-monospace"
    | "ui-sans-serif"
    | "ui-serif"
    | "ui-rounded";
  export const FontGenericNames: Array<FontGenericName>;
  export type FontStyleKeyword = "italic" | "normal" | "oblique";
  export const FontStyleKeywords: Array<FontStyleKeyword>;
  export interface FontStyleOptions extends Option {
    degrees?: boolean;
    degreesProbability?: number;
    fontStyles?: FontStyleKeyword[];
    maxDegrees?: number;
    minDegrees?: number;
  }
  export interface FontWeightOptions extends Option {
    fontWeights?: FontWeightValue[];
  }
  export type FontWeightValue =
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "bolder"
    | "lighter"
    | "normal";
  export const FontWeightValues: Array<FontWeightValue>;
  export interface GlyphConfig {
    leet?: Option;
    unicode?: Option;
  }
  export type GlyphInput =
    | GlyphConfig
    | GlyphType
    | Array<GlyphConfig | GlyphType>;
  export type GlyphType = "leet" | "unicode";
  export const GlyphTypes: Array<GlyphType>;
  export interface LengthOptions extends Option {
    max?: number;
    min?: number;
    units?: LengthUnit[];
  }
  export type LengthUnit = "mm" | "pt" | "px";
  export const LengthUnits: Array<LengthUnit>;
  export interface Option {
    enabled?: boolean;
  }
  export type MiscellaneousRandomizableName = "glyph";
  export function RandomA(
    props: RandomElementProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ): React.ReactNode;
  export function RandomBody(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLBodyElement>,
      HTMLBodyElement
    >
  ): React.ReactNode;
  export function RandomButton(
    props: RandomElementProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ): React.ReactNode;
  export class RandomCssUtils {
    public static reducer<T>(state: T, newState: Partial<T>): T;
    public static getCssRandomizables(
      styleConfig: StyleConfig,
      external: boolean
    ): Randomizables;
    public static getRandomizableForCssProperty(
      cssProperty: CssPropertyName,
      styleConfig: StyleConfig,
      external: boolean
    ): Randomizable;
    public static getConfigFromInput<
      Input,
      Config extends Partial<Record<keyof Config, Option>>,
    >(input: Input): Config;
  }
  export function RandomDiv(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ): React.ReactNode;
  export type RandomElementProps<
    Attributes extends React.HTMLAttributes<Element>,
    Element,
  > = {
    children?: React.ReactNode;
    className?: string;
    external?: boolean;
    fixedStyle?: React.CSSProperties;
    id?: string;
    style?: StyleInput;
    testID?: string;
  } & Omit<React.DetailedHTMLProps<Attributes, Element>, "style">;
  export function RandomEm(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomFooter(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomForm(
    props: RandomElementProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >
  ): React.ReactNode;
  export function RandomH1(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomH2(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomH3(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomH4(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomH5(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomH6(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ): React.ReactNode;
  export function RandomHead(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLHeadElement>,
      HTMLHeadElement
    >
  ): React.ReactNode;
  export function RandomHeader(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomHtml(
    props: RandomElementProps<
      React.HtmlHTMLAttributes<HTMLHtmlElement>,
      HTMLHtmlElement
    >
  ): React.ReactNode;
  export function RandomImg(
    props: RandomElementProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >
  ): React.ReactNode;
  export function RandomInput(
    props: RandomElementProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ): React.ReactNode;
  export abstract class Randomizable {
    public abstract name: RandomizableName;
    public static ignoreForSpaces: Record<RandomizableName, boolean>;
    public abstract getRandomValue(): string;
    public static array<T>(array: Array<T>): T;
    public static boolean(): boolean;
    public static decimal(min: number, max: number, places: number): number;
    public static number(min: number, max: number, integer: boolean): number;
  }
  export type Randomizables = {
    [key in RandomizableName]: Randomizable | null;
  };
  export type RandomizableName =
    | CssPropertyName
    | MiscellaneousRandomizableName;
  export function RandomLabel(
    props: RandomElementProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >
  ): React.ReactNode;
  export function RandomMain(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomMenu(
    props: RandomElementProps<
      React.MenuHTMLAttributes<HTMLElement>,
      HTMLElement
    >
  ): React.ReactNode;
  export function RandomNav(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomOl(
    props: RandomElementProps<
      React.OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ): React.ReactNode;
  export function RandomOption(
    props: RandomElementProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >
  ): React.ReactNode;
  export function RandomP(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ): React.ReactNode;
  export function RandomSection(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSelect(
    props: RandomElementProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  ): React.ReactNode;
  export function RandomSmall(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSpan(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ): React.ReactNode;
  export function RandomString(props: RandomStringProps): React.ReactNode;
  export function RandomStrong(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomTable(
    props: RandomElementProps<
      React.TableHTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >
  ): React.ReactNode;
  export function RandomTbody(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  ): React.ReactNode;
  export function RandomTd(
    props: RandomElementProps<
      React.TdHTMLAttributes<HTMLTableDataCellElement>,
      HTMLTableDataCellElement
    >
  ): React.ReactNode;
  export function RandomTextarea(
    props: RandomElementProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >
  ): React.ReactNode;
  export function RandomTfoot(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  ): React.ReactNode;
  export function RandomTh(
    props: RandomElementProps<
      React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    >
  ): React.ReactNode;
  export function RandomThead(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  ): React.ReactNode;
  export function RandomTitle(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLTitleElement>,
      HTMLTitleElement
    >
  ): React.ReactNode;
  export function RandomTr(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLTableRowElement>,
      HTMLTableRowElement
    >
  ): React.ReactNode;
  export function RandomUl(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  ): React.ReactNode;
  export interface RandomStringProps
    extends RandomElementProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
    center?: boolean;
    glyph?: GlyphInput;
    ignoreSpaces?: boolean;
    size?: number;
    text?: string;
  }
  export interface StyleConfig {
    animation?: AnimationOptions;
    backgroundColor?: ColorOptions;
    borderColor?: ColorOptions;
    borderRadius?: BorderRadiusOptions;
    borderStyle?: BorderStyleOptions;
    borderWidth?: LengthOptions;
    color?: ColorOptions;
    fontFamily?: FontFamilyOptions;
    fontStyle?: FontStyleOptions;
    fontWeight?: FontWeightOptions;
    textDecorationColor?: ColorOptions;
    textDecorationLine?: TextDecorationLineOptions;
    textDecorationStyle?: TextDecorationStyleOptions;
  }
  export type StyleInput =
    | StyleConfig
    | CssPropertyName
    | Array<StyleConfig | CssPropertyName>;
  export type TextDecorationLineKeyword =
    | "line-through"
    | "line-through underline"
    | "line-through overline"
    | "none"
    | "overline"
    | "overline underline"
    | "underline";
  export const TextDecorationLineKeywords: Array<TextDecorationLineKeyword>;
  export interface TextDecorationLineOptions extends Option {
    lines?: TextDecorationLineKeyword[];
  }
  export type TextDecorationStyleKeyword =
    | "dashed"
    | "dotted"
    | "double"
    | "solid"
    | "wavy";
  export const TextDecorationStyleKeywords: Array<TextDecorationStyleKeyword>;
  export interface TextDecorationStyleOptions extends Option {
    styles?: TextDecorationStyleKeyword[];
  }
}