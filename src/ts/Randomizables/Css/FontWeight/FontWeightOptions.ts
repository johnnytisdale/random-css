import ArrayPropertyOptions from "../ArrayPropertyOptions";

export type FontWeightValue = (
    "100" |
    "200" |
    "300" |
    "400" |
    "500" |
    "600" |
    "700" |
    "800" |
    "900"
);

export const fontWeightValues: FontWeightValue[] = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
];

export default interface FontWeightOptions extends ArrayPropertyOptions {}