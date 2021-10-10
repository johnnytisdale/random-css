import ArrayPropertySection from "./ArrayPropertySection";
import { FontVariantValue, fontVariantValues } from "../../../Randomizables/Css/FontVariant/FontVariantOptions";

export default class FontVariant extends ArrayPropertySection {

    protected cssProperty = 'fontVariant' as const;

    protected values: FontVariantValue[] = fontVariantValues;

}