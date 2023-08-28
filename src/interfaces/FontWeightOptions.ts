import FontWeightValue from "../enums/FontWeightValue";
import KeywordOptions from "./KeywordOptions";

export default interface FontWeightOptions extends KeywordOptions {
  keywords?: FontWeightValue[];
}
