import BorderRadiusConfig from "../../../interfaces/BorderRadiusConfig";
import DEFAULT_RANDOMIZABLE from "../RandomizableDefaults";

export const DEFAULT_BORDER_RADIUS_ELLIPTICAL = true;
export const DEFAULT_BORDER_RADIUS_ELLIPTICAL_PROBABILITY = 0.5;
export const DEFAULT_BORDER_RADIUS_MAX_CORNERS = 4;
export const DEFAULT_BORDER_RADIUS_MIN_CORNERS = 1;
export const DEFAULT_BORDER_RADIUS_MAX_RADIUS = 100;
export const DEFAULT_BORDER_RADIUS_MIN_RADIUS = 1;

export const DEFAULT_BORDER_RADIUS_OPTIONS: BorderRadiusConfig = {
  ...DEFAULT_RANDOMIZABLE,
  elliptical: DEFAULT_BORDER_RADIUS_ELLIPTICAL,
  ellipticalProbability: DEFAULT_BORDER_RADIUS_ELLIPTICAL_PROBABILITY,
  maxCorners: DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  minCorners: DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  maxRadius: DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  minRadius: DEFAULT_BORDER_RADIUS_MIN_RADIUS,
};
