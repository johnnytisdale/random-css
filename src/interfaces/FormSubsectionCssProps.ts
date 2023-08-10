import CssPropertyName from "../enums/CssPropertyName";
import Option from "./Option";
import OptionProps from "./OptionProps";

export default interface FormSubsectionCssProps<T extends Option>
  extends OptionProps {
  option: T;
  setOption?: (option: T) => void;
  toggle: (cssProperty: CssPropertyName, checked: boolean) => void;
}
