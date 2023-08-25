import RandomElement from "./RandomElement";
import RandomElementProps from "../types/RandomElementProps";

import * as React from "react";
import {
  AnchorHTMLAttributes,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DelHTMLAttributes,
  DetailsHTMLAttributes,
  DialogHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  InsHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ProgressHTMLAttributes,
  QuoteHTMLAttributes,
  ScriptHTMLAttributes,
  SelectHTMLAttributes,
  SlotHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
} from "react";

// TODO: keygen, media, param

export function RandomA(
  props: RandomElementProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
): React.ReactNode {
  return <RandomElement element="a" {...props} />;
}
export function RandomAbbr(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="abbr" {...props} />;
}
export function RandomAddress(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="address" {...props} />;
}
export function RandomArea(
  props: RandomElementProps<
    AreaHTMLAttributes<HTMLAreaElement>,
    HTMLAreaElement
  >
): React.ReactNode {
  return <RandomElement element="area" {...props} />;
}
export function RandomArticle(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="article" {...props} />;
}
export function RandomAside(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="aside" {...props} />;
}
export function RandomAudio(
  props: RandomElementProps<
    AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  >
): React.ReactNode {
  return <RandomElement element="audio" {...props} />;
}
export function RandomB(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="b" {...props} />;
}
export function RandomBase(
  props: RandomElementProps<
    BaseHTMLAttributes<HTMLBaseElement>,
    HTMLBaseElement
  >
): React.ReactNode {
  return <RandomElement element="base" {...props} />;
}
export function RandomBdi(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="bdi" {...props} />;
}
export function RandomBdo(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="bdo" {...props} />;
}
export function RandomBody(
  props: RandomElementProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
): React.ReactNode {
  return <RandomElement element="body" {...props} />;
}
export function RandomBlockquote(
  props: RandomElementProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
): React.ReactNode {
  return <RandomElement element="blockquote" {...props} />;
}
export function RandomBr(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="br" {...props} />;
}
export function RandomButton(
  props: RandomElementProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): React.ReactNode {
  return <RandomElement element="button" {...props} />;
}
export function RandomCanvas(
  props: RandomElementProps<
    CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >
): React.ReactNode {
  return <RandomElement element="canvas" {...props} />;
}
export function RandomCaption(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="caption" {...props} />;
}
export function RandomCite(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="cite" {...props} />;
}
export function RandomCode(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="code" {...props} />;
}
export function RandomCol(
  props: RandomElementProps<
    ColHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >
): React.ReactNode {
  return <RandomElement element="col" {...props} />;
}
export function RandomColgroup(
  props: RandomElementProps<
    ColgroupHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >
): React.ReactNode {
  return <RandomElement element="colgroup" {...props} />;
}
export function RandomData(
  props: RandomElementProps<
    DataHTMLAttributes<HTMLDataElement>,
    HTMLDataElement
  >
): React.ReactNode {
  return <RandomElement element="data" {...props} />;
}
export function RandomDatalist(
  props: RandomElementProps<
    HTMLAttributes<HTMLDataListElement>,
    HTMLDataListElement
  >
): React.ReactNode {
  return <RandomElement element="datalist" {...props} />;
}
export function RandomDd(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="dd" {...props} />;
}
export function RandomDel(
  props: RandomElementProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>
): React.ReactNode {
  return <RandomElement element="del" {...props} />;
}
export function RandomDetails(
  props: RandomElementProps<
    DetailsHTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  >
): React.ReactNode {
  return <RandomElement element="details" {...props} />;
}
export function RandomDfn(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="dfn" {...props} />;
}
export function RandomDialog(
  props: RandomElementProps<
    DialogHTMLAttributes<HTMLDialogElement>,
    HTMLDialogElement
  >
): React.ReactNode {
  return <RandomElement element="dialog" {...props} />;
}
export function RandomDiv(
  props: RandomElementProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): React.ReactNode {
  return <RandomElement element="div" {...props} />;
}
export function RandomDl(
  props: RandomElementProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>
): React.ReactNode {
  return <RandomElement element="dl" {...props} />;
}
export function RandomDt(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="dt" {...props} />;
}
export function RandomEm(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="em" {...props} />;
}
export function RandomEmbed(
  props: RandomElementProps<
    EmbedHTMLAttributes<HTMLEmbedElement>,
    HTMLEmbedElement
  >
): React.ReactNode {
  return <RandomElement element="embed" {...props} />;
}
export function RandomFieldset(
  props: RandomElementProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >
): React.ReactNode {
  return <RandomElement element="fieldset" {...props} />;
}
export function RandomFigcaption(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="figcaption" {...props} />;
}
export function RandomFigure(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="figure" {...props} />;
}
export function RandomFooter(
  props: RandomElementProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="footer" {...props} />;
}
export function RandomForm(
  props: RandomElementProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
): React.ReactNode {
  return <RandomElement element="form" {...props} />;
}
export function RandomH1(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h1" {...props} />;
}
export function RandomH2(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h2" {...props} />;
}
export function RandomH3(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h3" {...props} />;
}
export function RandomH4(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h4" {...props} />;
}
export function RandomH5(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h5" {...props} />;
}
export function RandomH6(
  props: RandomElementProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h6" {...props} />;
}
export function RandomHead(
  props: RandomElementProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>
): React.ReactNode {
  return <RandomElement element="head" {...props} />;
}
export function RandomHeader(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="header" {...props} />;
}
export function RandomHgroup(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="hgroup" {...props} />;
}
export function RandomHtml(
  props: RandomElementProps<
    HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >
): React.ReactNode {
  return <RandomElement element="html" {...props} />;
}
export function RandomHr(
  props: RandomElementProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>
): React.ReactNode {
  return <RandomElement element="hr" {...props} />;
}
export function RandomI(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="i" {...props} />;
}
export function RandomIframe(
  props: RandomElementProps<
    IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >
): React.ReactNode {
  return <RandomElement element="iframe" {...props} />;
}
export function RandomImg(
  props: RandomElementProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
): React.ReactNode {
  return <RandomElement element="img" {...props} />;
}
export function RandomInput(
  props: RandomElementProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
): React.ReactNode {
  return <RandomElement element="input" {...props} />;
}
export function RandomIns(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="ins" {...props} />;
}
export function RandomKbd(
  props: RandomElementProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>
): React.ReactNode {
  return <RandomElement element="kbd" {...props} />;
}
export function RandomLabel(
  props: RandomElementProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
): React.ReactNode {
  return <RandomElement element="label" {...props} />;
}
export function RandomLegend(
  props: RandomElementProps<
    HTMLAttributes<HTMLLegendElement>,
    HTMLLegendElement
  >
): React.ReactNode {
  return <RandomElement element="legend" {...props} />;
}
export function RandomLi(
  props: RandomElementProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
): React.ReactNode {
  return <RandomElement element="li" {...props} />;
}
export function RandomLink(
  props: RandomElementProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  >
): React.ReactNode {
  return <RandomElement element="link" {...props} />;
}
export function RandomMain(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="main" {...props} />;
}
export function RandomMap(
  props: RandomElementProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>
): React.ReactNode {
  return <RandomElement element="map" {...props} />;
}
export function RandomMark(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="mark" {...props} />;
}
export function RandomMenu(
  props: RandomElementProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="menu" {...props} />;
}
export function RandomMeta(
  props: RandomElementProps<
    MetaHTMLAttributes<HTMLMetaElement>,
    HTMLMetaElement
  >
): React.ReactNode {
  return <RandomElement element="meta" {...props} />;
}
export function RandomMeter(
  props: RandomElementProps<
    MeterHTMLAttributes<HTMLMeterElement>,
    HTMLMeterElement
  >
): React.ReactNode {
  return <RandomElement element="meter" {...props} />;
}
export function RandomNav(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="nav" {...props} />;
}
export function RandomNoscript(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="noscript" {...props} />;
}
export function RandomObject(
  props: RandomElementProps<
    ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  >
): React.ReactNode {
  return <RandomElement element="object" {...props} />;
}
export function RandomOl(
  props: RandomElementProps<
    OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
): React.ReactNode {
  return <RandomElement element="ol" {...props} />;
}
export function RandomOptgroup(
  props: RandomElementProps<
    OptgroupHTMLAttributes<HTMLOptGroupElement>,
    HTMLOptGroupElement
  >
): React.ReactNode {
  return <RandomElement element="optgroup" {...props} />;
}
export function RandomOption(
  props: RandomElementProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
): React.ReactNode {
  return <RandomElement element="option" {...props} />;
}
export function RandomOutput(
  props: RandomElementProps<
    OutputHTMLAttributes<HTMLOutputElement>,
    HTMLOutputElement
  >
): React.ReactNode {
  return <RandomElement element="output" {...props} />;
}
export function RandomP(
  props: RandomElementProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
): React.ReactNode {
  return <RandomElement element="p" {...props} />;
}
export function RandomPicture(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="picture" {...props} />;
}
export function RandomPre(
  props: RandomElementProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
): React.ReactNode {
  return <RandomElement element="pre" {...props} />;
}
export function RandomProgress(
  props: RandomElementProps<
    ProgressHTMLAttributes<HTMLProgressElement>,
    HTMLProgressElement
  >
): React.ReactNode {
  return <RandomElement element="progress" {...props} />;
}
export function RandomQ(
  props: RandomElementProps<
    QuoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
): React.ReactNode {
  return <RandomElement element="q" {...props} />;
}
export function RandomRp(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="rp" {...props} />;
}
export function RandomRt(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="rt" {...props} />;
}
export function RandomRuby(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="ruby" {...props} />;
}
export function RandomS(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="s" {...props} />;
}
export function RandomSamp(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="samp" {...props} />;
}
export function RandomScript(
  props: RandomElementProps<
    ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >
): React.ReactNode {
  return <RandomElement element="script" {...props} />;
}
export function RandomSearch(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="search" {...props} />;
}
export function RandomSection(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="section" {...props} />;
}
export function RandomSelect(
  props: RandomElementProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
): React.ReactNode {
  return <RandomElement element="select" {...props} />;
}
export function RandomSlot(
  props: RandomElementProps<
    SlotHTMLAttributes<HTMLSlotElement>,
    HTMLSlotElement
  >
): React.ReactNode {
  return <RandomElement element="slot" {...props} />;
}
export function RandomSmall(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="small" {...props} />;
}
export function RandomSource(
  props: RandomElementProps<
    SourceHTMLAttributes<HTMLSourceElement>,
    HTMLSourceElement
  >
): React.ReactNode {
  return <RandomElement element="source" {...props} />;
}
export function RandomSpan(
  props: RandomElementProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
): React.ReactNode {
  return <RandomElement element="span" {...props} />;
}
export function RandomStrong(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="strong" {...props} />;
}
export function RandomStyle(
  props: RandomElementProps<
    StyleHTMLAttributes<HTMLStyleElement>,
    HTMLStyleElement
  >
): React.ReactNode {
  return <RandomElement element="strong" {...props} />;
}
export function RandomSub(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="sub" {...props} />;
}
export function RandomSummary(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="summary" {...props} />;
}
export function RandomSup(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="sup" {...props} />;
}
export function RandomTable(
  props: RandomElementProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
): React.ReactNode {
  return <RandomElement element="table" {...props} />;
}
export function RandomTbody(
  props: RandomElementProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="tbody" {...props} />;
}
export function RandomTd(
  props: RandomElementProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >
): React.ReactNode {
  return <RandomElement element="td" {...props} />;
}
export function RandomTemplate(
  props: RandomElementProps<
    HTMLAttributes<HTMLTemplateElement>,
    HTMLTemplateElement
  >
): React.ReactNode {
  return <RandomElement element="template" {...props} />;
}
export function RandomTextarea(
  props: RandomElementProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
): React.ReactNode {
  return <RandomElement element="textarea" {...props} />;
}
export function RandomTfoot(
  props: RandomElementProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="tfoot" {...props} />;
}
export function RandomTh(
  props: RandomElementProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >
): React.ReactNode {
  return <RandomElement element="th" {...props} />;
}
export function RandomThead(
  props: RandomElementProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="thead" {...props} />;
}
export function RandomTime(
  props: RandomElementProps<
    TimeHTMLAttributes<HTMLTimeElement>,
    HTMLTimeElement
  >
): React.ReactNode {
  return <RandomElement element="time" {...props} />;
}
export function RandomTitle(
  props: RandomElementProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>
): React.ReactNode {
  return <RandomElement element="title" {...props} />;
}
export function RandomTr(
  props: RandomElementProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >
): React.ReactNode {
  return <RandomElement element="tr" {...props} />;
}
export function RandomTrack(
  props: RandomElementProps<
    TrackHTMLAttributes<HTMLTrackElement>,
    HTMLTrackElement
  >
): React.ReactNode {
  return <RandomElement element="track" {...props} />;
}
export function RandomU(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="u" {...props} />;
}
export function RandomUl(
  props: RandomElementProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
): React.ReactNode {
  return <RandomElement element="ul" {...props} />;
}
export function RandomVar(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="var" {...props} />;
}
export function RandomVideo(
  props: RandomElementProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
): React.ReactNode {
  return <RandomElement element="video" {...props} />;
}
export function RandomWbr(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="wbr" {...props} />;
}
