import RandomizableName from "../types/RandomizableName";
import Randomizable from "../classes/Randomizable";

type Randomizables = {
  [key in RandomizableName]: Randomizable | null;
};

export default Randomizables;
