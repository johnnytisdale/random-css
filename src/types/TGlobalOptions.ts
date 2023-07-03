import EGlobalOption from "../enums/EGlobalOption";

type TGlobalOption = {
    [key in EGlobalOption]?: boolean | number | string;
};

export default TGlobalOption;