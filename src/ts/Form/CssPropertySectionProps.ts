import CssPropertyOptions from '../Options/Randomizables/Css/CssPropertyOptions';

export default interface CssPropertySectionProps {
    options: CssPropertyOptions;
    toggle:  React.ChangeEventHandler;
    setState: Function;
}