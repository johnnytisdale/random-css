import ArrayPropertySection from "./ArrayPropertySection";
import { TextDecorationLineValue, textDecorationLineValues } from "../../../Randomizables/Css/TextDecorationLine/TextDecorationLineOptions";

export default class TextDecorationLine extends ArrayPropertySection {

    protected cssProperty = 'textDecorationLine' as const;

    protected values: TextDecorationLineValue[] = textDecorationLineValues;

}