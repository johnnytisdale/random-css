import Options from '../Options';

export default interface CssPropertySectionProps {
    options:     Options;
    setState:    Function;
    toggle:      (e: React.FormEvent<HTMLInputElement>) => void;
}