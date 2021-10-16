import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontKerningValue = (
    "none" |
    "normal"
);

export const fontKerningValues: FontKerningValue[] = [
    "none",
    "normal"
];

export default interface FontKerningOptions extends ArrayPropertyOptions {}