import ArrayPropertySection from "./ArrayPropertySection";
import { FontStyleValue, fontStyleValues } from "../../../Randomizables/Css/FontStyle/FontStyleOptions";

export default class FontStyle extends ArrayPropertySection {

    protected cssProperty = 'fontKerning' as const;

    protected values: FontStyleValue[] = fontStyleValues;

}