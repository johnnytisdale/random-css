import CssPropertyOptions from "../CssPropertyOptions";

export default interface AnimationOptions extends CssPropertyOptions {
    rotate: boolean;
    scale:  boolean;
    skew:   boolean;
}