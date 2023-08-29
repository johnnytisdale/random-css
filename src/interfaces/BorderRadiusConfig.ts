import Config from "./Config";

export default interface BorderRadiusConfig extends Config {
  elliptical?: boolean;
  ellipticalProbability?: number;
  maxCorners?: number;
  minCorners?: number;
  maxRadius?: number;
  minRadius?: number;
}
