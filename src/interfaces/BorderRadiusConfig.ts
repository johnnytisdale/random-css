import Config from "./Config";

export default interface BorderRadiusConfig extends Config {
  maxCorners?: number;
  minCorners?: number;
  maxRadius?: number;
  minRadius?: number;
  slash?: boolean;
  slashProbability?: number;
}
