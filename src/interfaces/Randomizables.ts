import OptionName from "../types/OptionName";
import Randomizable from "../classes/Randomizable";

type Randomizables = {
  [key in OptionName]: Randomizable | null;
};

export default Randomizables;