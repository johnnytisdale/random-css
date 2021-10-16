import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontFamilyValue = "Arial" | 
    "\"Arial Black\"" | 
    "Bookman" | 
    "Candara" | 
    "\"Comic Sans MS\"" | 
    "Courier" | 
    "\"Courier New\"" | 
    "Garamond" | 
    "Georgia" | 
    "Impact" | 
    "Palatino" | 
    "Roboto" | 
    "\"Times New Roman\"" | 
    "Times" | 
    "Verdana";

export const fontFamilyValues: FontFamilyValue[] = [
    "Arial",
    "\"Arial Black\"",
    "Bookman",
    "Candara",
    "\"Comic Sans MS\"",
    "Courier",
    "\"Courier New\"",
    "Garamond",
    "Georgia",
    "Impact",
    "Palatino",
    "Roboto",
    "\"Times New Roman\"",
    "Times",
    "Verdana"
];

export default interface FontFamilyOptions extends ArrayPropertyOptions {}