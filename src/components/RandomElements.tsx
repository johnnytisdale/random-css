import RandomElement from "./RandomElement";
import RandomElementGenericProps from "../interfaces/RandomElementGenericProps";

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
  props: RandomElementGenericProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
): React.ReactNode {
  return <RandomElement element="a" {...props} />;
}

export function RandomBody(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLBodyElement>,
    HTMLBodyElement
  >
): React.ReactNode {
  return <RandomElement element="body" {...props} />;
}

export function RandomButton(
  props: RandomElementGenericProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): React.ReactNode {
  return <RandomElement element="button" {...props} />;
}

export function RandomDiv(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
): React.ReactNode {
  return <RandomElement element="div" {...props} />;
}

export function RandomEm(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="em" {...props} />;
}

export function RandomFooter(
  props: RandomElementGenericProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >
): React.ReactNode {
  return <RandomElement element="footer" {...props} />;
}

export function RandomForm(
  props: RandomElementGenericProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
): React.ReactNode {
  return <RandomElement element="form" {...props} />;
}

export function RandomH1(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h1" {...props} />;
}

export function RandomH2(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h2" {...props} />;
}

export function RandomH3(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h3" {...props} />;
}

export function RandomH4(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h4" {...props} />;
}

export function RandomH5(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h5" {...props} />;
}

export function RandomH6(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
): React.ReactNode {
  return <RandomElement element="h6" {...props} />;
}

export function RandomHead(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLHeadElement>,
    HTMLHeadElement
  >
): React.ReactNode {
  return <RandomElement element="head" {...props} />;
}

export function RandomHeader(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="header" {...props} />;
}

export function RandomHtml(
  props: RandomElementGenericProps<
    HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  >
): React.ReactNode {
  return <RandomElement element="html" {...props} />;
}

export function RandomImg(
  props: RandomElementGenericProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
): React.ReactNode {
  return <RandomElement element="img" {...props} />;
}

export function RandomInput(
  props: RandomElementGenericProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
): React.ReactNode {
  return <RandomElement element="input" {...props} />;
}

export function RandomLabel(
  props: RandomElementGenericProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
): React.ReactNode {
  return <RandomElement element="label" {...props} />;
}

export function RandomMain(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="main" {...props} />;
}

export function RandomMenu(
  props: RandomElementGenericProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="menu" {...props} />;
}

export function RandomNav(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="nav" {...props} />;
}

export function RandomOl(
  props: RandomElementGenericProps<
    OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
): React.ReactNode {
  return <RandomElement element="ol" {...props} />;
}

export function RandomOption(
  props: RandomElementGenericProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
): React.ReactNode {
  return <RandomElement element="option" {...props} />;
}

export function RandomP(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
): React.ReactNode {
  return <RandomElement element="p" {...props} />;
}

export function RandomSection(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="section" {...props} />;
}

export function RandomSelect(
  props: RandomElementGenericProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
): React.ReactNode {
  return <RandomElement element="select" {...props} />;
}

export function RandomSmall(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="small" {...props} />;
}

export function RandomSpan(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
): React.ReactNode {
  return <RandomElement element="span" {...props} />;
}

export function RandomStrong(
  props: RandomElementGenericProps<HTMLAttributes<HTMLElement>, HTMLElement>
): React.ReactNode {
  return <RandomElement element="strong" {...props} />;
}

export function RandomTable(
  props: RandomElementGenericProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
): React.ReactNode {
  return <RandomElement element="table" {...props} />;
}

export function RandomTbody(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="tbody" {...props} />;
}

export function RandomTd(
  props: RandomElementGenericProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >
): React.ReactNode {
  return <RandomElement element="td" {...props} />;
}

export function RandomTextarea(
  props: RandomElementGenericProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
): React.ReactNode {
  return <RandomElement element="textarea" {...props} />;
}

export function RandomTfoot(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="tfoot" {...props} />;
}

export function RandomTh(
  props: RandomElementGenericProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >
): React.ReactNode {
  return <RandomElement element="th" {...props} />;
}

export function RandomThead(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
): React.ReactNode {
  return <RandomElement element="thead" {...props} />;
}

export function RandomTitle(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLTitleElement>,
    HTMLTitleElement
  >
): React.ReactNode {
  return <RandomElement element="title" {...props} />;
}

export function RandomTr(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >
): React.ReactNode {
  return <RandomElement element="tr" {...props} />;
}

export function RandomUl(
  props: RandomElementGenericProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
): React.ReactNode {
  return <RandomElement element="ul" {...props} />;
}
