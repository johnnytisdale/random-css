import ArrayPropertySection from "./ArrayPropertySection";
import { FontWeightValue, fontWeightValues } from "../../../Randomizables/Css/FontWeight/FontWeightOptions";

export default class FontWeight extends ArrayPropertySection {

    protected cssProperty = 'fontWeight' as const;

    protected values: FontWeightValue[] = fontWeightValues;

}