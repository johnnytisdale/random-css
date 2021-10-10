import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontStyleValue = (
    "italic" |
    "normal" |
    "oblique"
);

export const fontStyleValues: FontStyleValue[] = [
    "italic",
    "normal",
    "oblique"
];

export default interface FontStyleOptions extends ArrayPropertyOptions {}