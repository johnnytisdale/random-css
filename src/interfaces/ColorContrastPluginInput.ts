import {
  ColorContrastPrimary,
  ColorContrastSecondaryInput,
} from "./ColorContrastPlugin";

export default interface ColorContrastPluginInput {
  primary?: ColorContrastPrimary;
  secondary?: ColorContrastSecondaryInput;
}
