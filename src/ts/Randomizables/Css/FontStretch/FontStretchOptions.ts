import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontStretchValue = (
    "ultra-condensed" |  
    "extra-condensed" | 
    "condensed"       |
    "semi-condensed"  |
    "normal"          |
    "semi-expanded"   |
    "expanded"        |
    "extra-expanded"  |
    "ultra-expanded"
);

export const fontStretchValues: FontStretchValue[] = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
];

export default interface FontStretchOptions extends ArrayPropertyOptions {}