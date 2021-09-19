import CssPropertyOptions from "./CssPropertyOptions";

export default abstract class ArrayPropertyOptions extends CssPropertyOptions {
    abstract values: string[];
}