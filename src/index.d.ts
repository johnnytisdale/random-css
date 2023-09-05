import {
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  HTMLAttributes,
  IframeHTMLAttributes,
  InsHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OptgroupHTMLAttributes,
  OutputHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  ScriptHTMLAttributes,
  SlotHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
} from "react";

declare module "random-css" {
  export type AnimationDirection =
    | "alternate"
    | "alternate-|reverse"
    | "normal"
    | "reverse";
  export const AnimationDirections: Array<AnimationDirection>;
  export type AnimationDuration = "1s" | "2s" | "3s";
  export const AnimationDurations: Array<AnimationDuration>;
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
  export interface AnimationIterationCountConfig {
    infinite?: boolean;
    infiniteProbability?: number;
    integersOnly?: boolean;
    max?: number;
    min?: number;
  }
  export interface AnimationConfig extends Config {
    directions?: AnimationDirection[];
    durationMax?: number;
    durationMin?: number;
    easingFunctions?: AnimationEasingFunction[];
    fillModes?: AnimationFillMode[];
    iterationCount?: AnimationIterationCountConfig;
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
  export interface BorderRadiusConfig extends Config {
    elliptical?: boolean;
    ellipticalProbability?: number;
    maxCorners?: number;
    minCorners?: number;
    maxRadius?: number;
    minRadius?: number;
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
  export interface BorderStyleConfig extends KeywordConfig {
    keywords?: BorderStyleKeyword[];
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
  export interface ColorConfig extends Config {
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
  export type CssColorProperty =
    | "backgroundColor"
    | "borderColor"
    | "color"
    | "textDecorationColor";
  export const CssColorProperties: Array<CssColorProperty>;
  export type CssKeywordProperty =
    | "borderStyle"
    | "fontWeight"
    | "textDecorationLine"
    | "textDecorationStyle";
  export const CssKeywordProperties: Array<CssKeywordProperty>;
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
  export interface FontFamilyConfig extends Config {
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
  export interface FontStyleConfig extends Config {
    degrees?: boolean;
    degreesProbability?: number;
    fontStyles?: FontStyleKeyword[];
    maxDegrees?: number;
    minDegrees?: number;
  }
  export interface FontWeightConfig extends KeywordConfig {
    keywords?: FontWeightValue[];
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
  export interface GlyphConfig extends Config {
    leet?: GlyphTypeConfig;
    unicode?: GlyphTypeConfig;
  }
  export type GlyphInput =
    | GlyphConfig
    | GlyphType
    | Array<GlyphConfig | GlyphType>;
  export type GlyphSpecification = Partial<Record<Letter, Array<string>>>;
  export type GlyphType = "leet" | "unicode";
  export const GlyphTypes: Array<GlyphType>;
  export interface GlyphTypeConfig {
    enabled?: boolean;
    glyphs?: GlyphSpecification;
  }
  export const HEIGHT_MULTIPLIER: number;
  export interface KeywordConfig extends Config {
    keywords?: Array<string>;
  }
  export type LeetGlyphA = "@" | "4" | "/\\" | "/-\\" | "/_\\";
  export type LeetGlyphB =
    | "8"
    | "j3"
    | "lo"
    | "18"
    | "13"
    | "|:"
    | "|}"
    | "|8"
    | "|o"
    | "|3"
    | "6";
  export type LeetGlyphC = "¢," | "©" | "{" | "\u003c" | "(" | "[";
  export type LeetGlyphD = ":|)" | "|\u003e" | "|}" | "|]";
  export type LeetGlyphE = "£" | "3";
  export type LeetGlyphF = "ph" | "|=" | "|#" | '|"';
  export type LeetGlyphG = "C-" | "-" | "6" | "[" | "[+";
  export type LeetGlyphH =
    | ":-:"
    | "{=}"
    | "{-}"
    | "}-{"
    | "}{"
    | "4"
    | "I+I"
    | "(-)"
    | ")-("
    | "|-|"
    | "|=|"
    | "/-/"
    | "[-]"
    | "[=]";
  export type LeetGlyphI = "!" | "9" | "1" | "|";
  export type LeetGlyphJ = "_}" | "_)" | "_|" | "_7" | "_/" | "_]";
  export type LeetGlyphK = "l{" | "l\u003c" | "1\u003c" | "|{" | "|\u003c";
  export type LeetGlyphL = "|_" | "|" | "1" | "][";
  export type LeetGlyphM = "^^" | "N\\" | "(V)" | "|\\/|" | "/\\/\\" | "/X\\";
  export type LeetGlyphN = "|\\|" | "/V" | "/\\/";
  export type LeetGlyphO = "{}" | "\u003c\u003e" | "()" | "[]" | "0";
  export type LeetGlyphP =
    | "|\u003e"
    | "|Â°"
    | "|*"
    | "|D"
    | "|o"
    | "|7"
    | "|O"
    | "/o"
    | "[]D";
  export type LeetGlyphQ = "kw" | "9" | "O_" | "(,)" | "0,";
  export type LeetGlyphR = "12" | "|2" | "|^" | "®";
  export type LeetGlyphS = "$" | "5" | "§";
  export type LeetGlyphT =
    | "\u0027|\u0027"
    | "\u0027][\u0027"
    | "-|-"
    | "+"
    | "7"
    | "7`"
    | "`|`"
    | "~|~";
  export type LeetGlyphU =
    | "\\_\\"
    | "{_}"
    | "/_/"
    | "(_)"
    | "|_|"
    | "\\_/"
    | "[_]";
  export type LeetGlyphV = "\\/";
  export type LeetGlyphW =
    | "\u0027//"
    | "Ð¨"
    | "\\\\//\\\\//"
    | "(/\\)"
    | "|/\\|"
    | "\\/\\/"
    | "\\\\\u0027"
    | "\\^/"
    | "\\_|_/"
    | "\\V/"
    | "\\X/"
    | "2u"
    | "VV";
  export type LeetGlyphX = "*" | "}{" | "\u003e\u003c" | ")(" | "%";
  export type LeetGlyphY = "\\|/" | "`/" | "¥";
  export type LeetGlyphZ = "5" | "\u003e_," | "(/)" | "7_" | "2";
  export const LeetGlyphs: Record<Letter, Array<string>>;
  export interface LengthConfig extends Config {
    max?: number;
    min?: number;
    units?: LengthUnit[];
  }
  export type LengthUnit = "mm" | "pt" | "px";
  export const LengthUnits: Array<LengthUnit>;
  export type Letter =
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v"
    | "w"
    | "x"
    | "y"
    | "z";
  export const Letters: Array<Letter>;
  export interface Config {
    enabled?: boolean;
    maxDelay?: number;
    minDelay?: number;
    repeat?: boolean;
  }
  export type MiscellaneousRandomizableName = "glyph";
  export function RandomA(
    props: RandomElementProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ): React.ReactNode;
  export function RandomAbbr(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomAddress(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomArea(
    props: RandomElementProps<
      AreaHTMLAttributes<HTMLAreaElement>,
      HTMLAreaElement
    >
  ): React.ReactNode;
  export function RandomArticle(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomAside(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomAudio(
    props: RandomElementProps<
      AudioHTMLAttributes<HTMLAudioElement>,
      HTMLAudioElement
    >
  ): React.ReactNode;
  export function RandomB(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomBase(
    props: RandomElementProps<
      BaseHTMLAttributes<HTMLBaseElement>,
      HTMLBaseElement
    >
  ): React.ReactNode;
  export function RandomBdi(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomBdo(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomBlockquote(
    props: RandomElementProps<
      BlockquoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >
  ): React.ReactNode;
  export function RandomBody(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLBodyElement>,
      HTMLBodyElement
    >
  ): React.ReactNode;
  export function RandomBr(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomButton(
    props: RandomElementProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ): React.ReactNode;
  export function RandomCanvas(
    props: RandomElementProps<
      CanvasHTMLAttributes<HTMLCanvasElement>,
      HTMLCanvasElement
    >
  ): React.ReactNode;
  export function RandomCaption(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomCite(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomCode(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomCol(
    props: RandomElementProps<
      ColHTMLAttributes<HTMLTableColElement>,
      HTMLTableColElement
    >
  ): React.ReactNode;
  export function RandomColgroup(
    props: RandomElementProps<
      ColgroupHTMLAttributes<HTMLTableColElement>,
      HTMLTableColElement
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
      I,
      C extends Partial<Record<keyof C, Config>>,
    >(input: I): C;
  }
  export function RandomData(
    props: RandomElementProps<
      DataHTMLAttributes<HTMLDataElement>,
      HTMLDataElement
    >
  ): React.ReactNode;
  export function RandomDatalist(
    props: RandomElementProps<
      HTMLAttributes<HTMLDataListElement>,
      HTMLDataListElement
    >
  ): React.ReactNode;
  export function RandomDd(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomDel(
    props: RandomElementProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>
  ): React.ReactNode;
  export function RandomDetails(
    props: RandomElementProps<
      DetailsHTMLAttributes<HTMLDetailsElement>,
      HTMLDetailsElement
    >
  ): React.ReactNode;
  export function RandomDfn(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomDialog(
    props: RandomElementProps<
      DialogHTMLAttributes<HTMLDialogElement>,
      HTMLDialogElement
    >
  ): React.ReactNode;
  export function RandomDiv(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ): React.ReactNode;
  export function RandomDl(
    props: RandomElementProps<
      HTMLAttributes<HTMLDListElement>,
      HTMLDListElement
    >
  ): React.ReactNode;
  export function RandomDt(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
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
  export function RandomEmbed(
    props: RandomElementProps<
      EmbedHTMLAttributes<HTMLEmbedElement>,
      HTMLEmbedElement
    >
  ): React.ReactNode;
  export function RandomFieldset(
    props: RandomElementProps<
      FieldsetHTMLAttributes<HTMLFieldSetElement>,
      HTMLFieldSetElement
    >
  ): React.ReactNode;
  export function RandomFigcaption(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomFigure(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
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
  export function RandomHgroup(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomHr(
    props: RandomElementProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>
  ): React.ReactNode;
  export function RandomHtml(
    props: RandomElementProps<
      React.HtmlHTMLAttributes<HTMLHtmlElement>,
      HTMLHtmlElement
    >
  ): React.ReactNode;
  export function RandomI(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomIframe(
    props: RandomElementProps<
      IframeHTMLAttributes<HTMLIFrameElement>,
      HTMLIFrameElement
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
  export function RandomIns(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export abstract class Randomizable {
    protected abstract setSpecificConfig(config: Config): void;
    protected abstract setValue(value: string): void;
    protected enabled: boolean;
    protected external: boolean;
    public static array<T>(array: Array<T>): T;
    public static boolean(): boolean;
    public static decimal(min: number, max: number, places: number): number;
    public static number(min: number, max: number, integer: boolean): number;
    public abstract getRandomValue(): string;
    public abstract name: RandomizableName;
    public maxDelay: number;
    public minDelay: number;
    public setConfig(config: Config, external: boolean): void;
    public repeat: boolean;
  }
  export type Randomizables = {
    [key in RandomizableName]: Randomizable | null;
  };
  export function RandomKbd(
    props: RandomElementProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>
  ): React.ReactNode;
  export type RandomizableName =
    | CssPropertyName
    | MiscellaneousRandomizableName;
  export function RandomLabel(
    props: RandomElementProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >
  ): React.ReactNode;
  export function RandomLegend(
    props: RandomElementProps<
      HTMLAttributes<HTMLLegendElement>,
      HTMLLegendElement
    >
  ): React.ReactNode;
  export function RandomLi(
    props: RandomElementProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  ): React.ReactNode;
  export function RandomLink(
    props: RandomElementProps<
      LinkHTMLAttributes<HTMLLinkElement>,
      HTMLLinkElement
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
  export function RandomMap(
    props: RandomElementProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>
  ): React.ReactNode;
  export function RandomMark(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomMeta(
    props: RandomElementProps<
      MetaHTMLAttributes<HTMLMetaElement>,
      HTMLMetaElement
    >
  ): React.ReactNode;
  export function RandomMeter(
    props: RandomElementProps<
      MeterHTMLAttributes<HTMLMeterElement>,
      HTMLMeterElement
    >
  ): React.ReactNode;
  export function RandomNav(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomNoscript(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomObject(
    props: RandomElementProps<
      ObjectHTMLAttributes<HTMLObjectElement>,
      HTMLObjectElement
    >
  ): React.ReactNode;
  export function RandomOl(
    props: RandomElementProps<
      React.OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ): React.ReactNode;
  export function RandomOptgroup(
    props: RandomElementProps<
      OptgroupHTMLAttributes<HTMLOptGroupElement>,
      HTMLOptGroupElement
    >
  ): React.ReactNode;
  export function RandomOutput(
    props: RandomElementProps<
      OutputHTMLAttributes<HTMLOutputElement>,
      HTMLOutputElement
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
  export function RandomPicture(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomPre(
    props: RandomElementProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  ): React.ReactNode;
  export function RandomProgress(
    props: RandomElementProps<
      ProgressHTMLAttributes<HTMLProgressElement>,
      HTMLProgressElement
    >
  ): React.ReactNode;
  export function RandomQ(
    props: RandomElementProps<
      QuoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >
  ): React.ReactNode;
  export function RandomRp(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomRt(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomRuby(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomS(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSamp(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomScript(
    props: RandomElementProps<
      ScriptHTMLAttributes<HTMLScriptElement>,
      HTMLScriptElement
    >
  ): React.ReactNode;
  export function RandomSearch(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
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
  export function RandomSlot(
    props: RandomElementProps<
      SlotHTMLAttributes<HTMLSlotElement>,
      HTMLSlotElement
    >
  ): React.ReactNode;
  export function RandomSmall(
    props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSource(
    props: RandomElementProps<
      SourceHTMLAttributes<HTMLSourceElement>,
      HTMLSourceElement
    >
  ): React.ReactNode;
  export function RandomSpan(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ): React.ReactNode;
  export function RandomStyle(
    props: RandomElementProps<
      StyleHTMLAttributes<HTMLStyleElement>,
      HTMLStyleElement
    >
  ): React.ReactNode;
  export function RandomSub(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSummary(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomSup(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomString(props: RandomStringProps): React.ReactNode;
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
  export function RandomTemplate(
    props: RandomElementProps<
      HTMLAttributes<HTMLTemplateElement>,
      HTMLTemplateElement
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
  export function RandomTime(
    props: RandomElementProps<
      TimeHTMLAttributes<HTMLTimeElement>,
      HTMLTimeElement
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
  export function RandomTrack(
    props: RandomElementProps<
      TrackHTMLAttributes<HTMLTrackElement>,
      HTMLTrackElement
    >
  ): React.ReactNode;
  export function RandomU(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomUl(
    props: RandomElementProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >
  ): React.ReactNode;
  export function RandomVar(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export function RandomVideo(
    props: RandomElementProps<
      VideoHTMLAttributes<HTMLVideoElement>,
      HTMLVideoElement
    >
  ): React.ReactNode;
  export function RandomWbr(
    props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ): React.ReactNode;
  export interface StyleConfig {
    animation?: AnimationConfig;
    backgroundColor?: ColorConfig;
    borderColor?: ColorConfig;
    borderRadius?: BorderRadiusConfig;
    borderStyle?: BorderStyleConfig;
    borderWidth?: LengthConfig;
    color?: ColorConfig;
    fontFamily?: FontFamilyConfig;
    fontStyle?: FontStyleConfig;
    fontWeight?: FontWeightConfig;
    textDecorationColor?: ColorConfig;
    textDecorationLine?: TextDecorationLineConfig;
    textDecorationStyle?: TextDecorationStyleConfig;
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
  export interface TextDecorationLineConfig extends KeywordConfig {
    keywords?: TextDecorationLineKeyword[];
  }
  export type TextDecorationStyleKeyword =
    | "dashed"
    | "dotted"
    | "double"
    | "solid"
    | "wavy";
  export const TextDecorationStyleKeywords: Array<TextDecorationStyleKeyword>;
  export interface TextDecorationStyleConfig extends KeywordConfig {
    keywords?: TextDecorationStyleKeyword[];
  }
  export const UnicodeGlyphs: Record<Letter, Array<string>>;
}
