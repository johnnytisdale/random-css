import RandomElement from "./RandomElement";
import RandomElementProps from "../interfaces/RandomElementProps";

import * as React from "react";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  HtmlHTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  MenuHTMLAttributes,
  OlHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  TextareaHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export function RandomA(
  props: RandomElementProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
): React.ReactNode {
  return <RandomElement element="a" {...props} />;
}

export function RandomBody(
  props: RandomElementProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
): React.ReactNode {
  return <RandomElement element="body" {...props} />;
}

export function RandomButton(
  props: RandomElementProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): React.ReactNode {
  return <RandomElement element="button" {...props} />;
}

export function RandomDiv(
  props: RandomElementProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): React.ReactNode {
  return <RandomElement element="div" {...props} />;
}

export function RandomEm(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="em" {...props} />;
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

export function RandomHtml(
  props: RandomElementProps<
    HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >
): React.ReactNode {
  return <RandomElement element="html" {...props} />;
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

export function RandomLabel(
  props: RandomElementProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
): React.ReactNode {
  return <RandomElement element="label" {...props} />;
}

export function RandomMain(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="main" {...props} />;
}

export function RandomMenu(
  props: RandomElementProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="menu" {...props} />;
}

export function RandomNav(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="nav" {...props} />;
}

export function RandomOl(
  props: RandomElementProps<
    OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
): React.ReactNode {
  return <RandomElement element="ol" {...props} />;
}

export function RandomOption(
  props: RandomElementProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
): React.ReactNode {
  return <RandomElement element="option" {...props} />;
}

export function RandomP(
  props: RandomElementProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
): React.ReactNode {
  return <RandomElement element="p" {...props} />;
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

export function RandomSmall(
  props: RandomElementProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="small" {...props} />;
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

export function RandomUl(
  props: RandomElementProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
): React.ReactNode {
  return <RandomElement element="ul" {...props} />;
}
