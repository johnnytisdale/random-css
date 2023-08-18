import FontWeightValue from "../enums/FontWeightValue";
import Option from "./Option";

export default interface FontWeightOptions extends Option {
  fontWeights?: FontWeightValue[];
}
