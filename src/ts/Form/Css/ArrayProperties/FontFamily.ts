import ArrayPropertySection from "./ArrayPropertySection";
import { FontFamilyValue, fontFamilyValues } from "../../../Randomizables/Css/FontFamily/FontFamilyOptions";

export default class FontFamily extends ArrayPropertySection {

    protected cssProperty = 'fontFamily' as const;

    protected values: FontFamilyValue[] = fontFamilyValues;

    protected getLabel(fontFamily: FontFamilyValue): string {
        return fontFamily.replaceAll('"', '');
    }
}