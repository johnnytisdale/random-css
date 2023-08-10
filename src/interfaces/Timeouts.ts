import RandomizableName from "../types/RandomizableName";

type Timeouts = {
  [key in RandomizableName]: NodeJS.Timeout | null;
};

export default Timeouts;
