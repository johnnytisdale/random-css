export default interface InputProps {
    active:      boolean;
    expand?:     React.MouseEventHandler;
    expandable?: boolean;
    indent?:     boolean;
    label:       string;
    onChange:    (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void; //React.ChangeEventHandler;
}