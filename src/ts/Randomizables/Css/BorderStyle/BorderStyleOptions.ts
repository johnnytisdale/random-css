import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type BorderStyleValue = (
    "dashed" |
    "dotted" |
    "double" |
    "groove" |
    "hidden" |
    "inset"  |
    "none"   |
    "outset" | 
    "ridge"  | 
    "solid"
);

export const borderStyleValues: BorderStyleValue[] = [
    "dashed",
    "dotted",
    "double",
    "groove",
    "hidden",
    "inset" ,
    "none"  ,
    "outset", 
    "ridge" , 
    "solid"
];

export default interface BorderStyleOptions extends ArrayPropertyOptions {}