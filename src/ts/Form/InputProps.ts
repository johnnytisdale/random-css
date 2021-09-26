export default interface InputProps {
    active:     boolean;
    expand?:    React.MouseEventHandler;
    expandable: boolean;
    label:      string;
    toggle:     React.ChangeEventHandler;
}