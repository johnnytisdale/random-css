import RandomElementProps from "./RandomElementProps";

interface Props {
  element: keyof HTMLElementTagNameMap;
}

type RandomElementGenericProps<Attributes, Element> = Props &
  RandomElementProps<Attributes, Element>;

export default RandomElementGenericProps;
