export const DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES = true;
export const DEFAULT_GLOBAL_OPTIONS_SIZE = 3;
export const DEFAULT_GLOBAL_OPTIONS_TEXT = "random css";
export const DEFAULT_GLOBAL_OPTIONS_UNSAFE = true;

export const DEFAULT_GLOBAL_OPTIONS: GlobalOptions = {
    ignoreSpaces: DEFAULT_GLOBAL_OPTIONS_IGNORE_SPACES,
    size: DEFAULT_GLOBAL_OPTIONS_SIZE,
    text: DEFAULT_GLOBAL_OPTIONS_TEXT,
    unsafe: DEFAULT_GLOBAL_OPTIONS_UNSAFE,
}

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
     * The text to which randomized styles will be applied.
     */
    text: string;

    /**
     * If true, use inline CSS, which is considered unsafe because it is
     * forbidden by a strict Content Security Policy.
     */
    unsafe?: boolean;
}
