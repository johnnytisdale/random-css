import CssPropertyName from "../enums/CssPropertyName";

type Timeouts = {
  [key in CssPropertyName]: NodeJS.Timeout | null;
};

export default Timeouts;
