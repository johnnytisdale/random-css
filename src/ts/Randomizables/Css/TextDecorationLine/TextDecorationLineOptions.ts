import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type TextDecorationLineValue = (
    "line-through"           |
    "line-through underline" |
    "line-through overline"  |
    "none"                   |
    "overline"               |
    "overline underline"     |
    "underline"
);

export const textDecorationLineValues: TextDecorationLineValue[] = [
    "line-through",
    "line-through underline",
    "line-through overline",
    "none",
    "overline",
    "overline underline",
    "underline"
];

export default interface TextDecorationLineOptions extends ArrayPropertyOptions {}