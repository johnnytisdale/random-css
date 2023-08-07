import Option from "./Option";

export interface BorderRadiusOptions extends Option {
  maxCorners?: number;
  minCorners?: number;
  maxRadius?: number;
  minRadius?: number;
  slash?: boolean;
  slashProbability?: number;
}

export const DEFAULT_BORDER_RADIUS_ENABLED = false;
export const DEFAULT_BORDER_RADIUS_MAX_CORNERS = 4;
export const DEFAULT_BORDER_RADIUS_MIN_CORNERS = 1;
export const DEFAULT_BORDER_RADIUS_MAX_RADIUS = 100;
export const DEFAULT_BORDER_RADIUS_MIN_RADIUS = 1;
export const DEFAULT_BORDER_RADIUS_SLASH = true;
export const DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY = 0.5;

export const DEFAULT_BORDER_RADIUS_OPTIONS: BorderRadiusOptions = {
  enabled: DEFAULT_BORDER_RADIUS_ENABLED,
  maxCorners: DEFAULT_BORDER_RADIUS_MAX_CORNERS,
  minCorners: DEFAULT_BORDER_RADIUS_MIN_CORNERS,
  maxRadius: DEFAULT_BORDER_RADIUS_MAX_RADIUS,
  minRadius: DEFAULT_BORDER_RADIUS_MIN_RADIUS,
  slash: DEFAULT_BORDER_RADIUS_SLASH,
  slashProbability: DEFAULT_BORDER_RADIUS_SLASH_PROBABILITY,
};
