export const DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES = true;
export const DEFAULT_GLOBAL_OPTIONS_SIZE = 3;
export const DEFAULT_GLOBAL_OPTIONS_TEXT = "random css";
export const DEFAULT_GLOBAL_OPTIONS_EXTERNAL = false;

export const DEFAULT_GLOBAL_OPTIONS: GlobalOptions = {
  ignoreSpaces: DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
  size: DEFAULT_GLOBAL_OPTIONS_SIZE,
  external: DEFAULT_GLOBAL_OPTIONS_EXTERNAL,
};

export default interface GlobalOptions {
  /**
   * If true, random styles will not be applied to spaces.
   */
  ignoreSpaces?: boolean;

  /**
   * Font size, measured in rem.
   */
  size?: number;

  /**
   * If true, use an external stylesheet instead of using JavaScript to change
   * styles.
   */
  external?: boolean;
}
