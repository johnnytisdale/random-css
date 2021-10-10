import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontVariantValue = (
    "all-petite-caps" |
    "all-small-caps"  |
    "normal"          |
    "small-caps"      |
    "petite-caps"     |
    "titling-caps"    |
    "unicase"
);

export const fontVariantValues: FontVariantValue[] = [
    "all-petite-caps",
    "all-small-caps",
    "normal",
    "small-caps",
    "petite-caps",
    "titling-caps",
    "unicase"
];

export default interface FontVariantOptions extends ArrayPropertyOptions {}