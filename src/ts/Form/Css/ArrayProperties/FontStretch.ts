import ArrayPropertySection from "./ArrayPropertySection";
import { FontStretchValue, fontStretchValues } from "../../../Randomizables/Css/FontStretch/FontStretchOptions";

export default class FontStretch extends ArrayPropertySection {

    protected cssProperty = 'fontStretch' as const;

    protected values: FontStretchValue[] = fontStretchValues;

}