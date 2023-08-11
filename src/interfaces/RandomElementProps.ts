import RandomElementGenericProps from "./RandomElementGenericProps";

export default interface RandomElementProps extends RandomElementGenericProps {
  element: keyof HTMLElementTagNameMap;
}
