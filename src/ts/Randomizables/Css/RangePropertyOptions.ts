import CssPropertyOptions from "./CssPropertyOptions";
import LengthUnit from "./LengthUnit";
import AbsoluteLengthUnit from "./AbsoluteLengthUnit";

export default interface RangePropertyOptions extends CssPropertyOptions {
    max:   number;
    min:   number;
    units: AbsoluteLengthUnit[];
}