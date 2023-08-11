import RandomElementGenericProps from "./RandomElementGenericProps";

interface Props {
  element: keyof HTMLElementTagNameMap;
}

type RandomElementProps<Attributes, Element> = Props &
  RandomElementGenericProps<Attributes, Element>;

export default RandomElementProps;
