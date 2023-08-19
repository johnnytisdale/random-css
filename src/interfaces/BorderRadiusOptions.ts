import Option from "./Option";

export default interface BorderRadiusOptions extends Option {
  maxCorners?: number;
  minCorners?: number;
  maxRadius?: number;
  minRadius?: number;
  slash?: boolean;
  slashProbability?: number;
}
