import ArrayPropertySection from "./ArrayPropertySection";
import { BorderRadiusValue, borderRadiusValues } from "../../../Randomizables/Css/BorderRadius/BorderRadiusOptions";

export default class BorderRadius extends ArrayPropertySection {

    protected cssProperty = 'borderRadius' as const;

    protected values: BorderRadiusValue[] = borderRadiusValues;

}