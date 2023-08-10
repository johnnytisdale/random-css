import CssOptions from "./CssOptions";

export default interface RandomElementProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  external?: boolean;
  fixedStyle?: React.CSSProperties;
  style: CssOptions;
  testID?: string;
}
