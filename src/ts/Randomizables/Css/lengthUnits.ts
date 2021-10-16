import absoluteLengthUnits from "./absoluteLengthUnits";
import LengthUnit from "./LengthUnit";
import relativeLengthUnits from "./relativeLengthUnits";

const lengthUnits: LengthUnit[] = [
    ...absoluteLengthUnits,
    ...relativeLengthUnits
];

export default lengthUnits;