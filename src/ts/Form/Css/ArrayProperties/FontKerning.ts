import ArrayPropertySection from "./ArrayPropertySection";
import { FontKerningValue, fontKerningValues } from "../../../Randomizables/Css/FontKerning/FontKerningOptions";

export default class FontKerning extends ArrayPropertySection {

    protected cssProperty = 'fontKerning' as const;

    protected values: FontKerningValue[] = fontKerningValues;

}