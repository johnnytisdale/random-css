import FontWeightValue from "../enums/FontWeightValue";
import KeywordConfig from "./KeywordConfig";

export default interface FontWeightConfig extends KeywordConfig {
  keywords?: FontWeightValue[];
}
