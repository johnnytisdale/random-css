import ArrayPropertySection from "./ArrayPropertySection";
import { BorderStyleValue, borderStyleValues } from "../../../Randomizables/Css/BorderStyle/BorderStyleOptions";

export default class BorderStyle extends ArrayPropertySection {

    protected cssProperty = 'borderStyle' as const;

    protected values: BorderStyleValue[] = borderStyleValues;

}