import OptionName from "../types/OptionName";

type Timeouts = {
  [key in OptionName]: NodeJS.Timeout | null;
};

export default Timeouts;
