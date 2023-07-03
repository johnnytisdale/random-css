import IOptions from "../interfaces/IOptions";

export default interface IProps {
    clearReset: Function;
    options: IOptions;
    reset: string[];
    size: number;
    text: string;
}