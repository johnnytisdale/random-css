interface GlobalOptions {

    /**
     * If true, random styles will not be applied to spaces.
     */
    ignoreSpaces: boolean;

    /**
     * Font size, measured in rem.
     */
    size: number;

    /**
     * The text to which randomized styles will be applied.
     */
    text: string;

    /**
     * If true, use inline CSS, which is considered unsafe because it is
     * forbidden by a strict Content Security Policy.
     */
    unsafe: boolean;
}

export default GlobalOptions;
