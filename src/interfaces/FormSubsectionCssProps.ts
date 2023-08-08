import CssProperty from "../enums/CssProperty";
import Option from "./Option";
import OptionProps from "./OptionProps";

export default interface FormSubsectionCssProps<T extends Option>
  extends OptionProps {
  option: T;
  setOption: (option: T) => void;
  toggle: (cssProperty: CssProperty, checked: boolean) => void;
}
