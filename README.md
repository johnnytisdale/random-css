 # Random CSS
 Randomize your style.

 ## What's New?
 ### Content Security Policy
 Random CSS is now compatible with a strict [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), i.e., one that forbids the use of inline CSS. The root component has an `unsafe` prop which defaults to `false`. If you pass `true` to this prop, then it will use inline CSS. Otherwise it will use external CSS and you must be sure to link to the CSS file in your `<head>`.

 ## Testing
 1. Uncomment the commented lines in in src/index.js.
 2. npm run dev
 3. Open index.html in browser.

 ## Authors
 * **Johnny Tisdale** - [github](https://github.com/johnnytisdale) | [website](https://johnnytisdale.com) 
 
 ## License
 This project is licensed under the ISC License. See [LICENSE.md](LICENSE.md) for details.
 
 ## Acknowledgements
 * [Billie Thompson](https://github.com/PurpleBooth) - [README template](https://github.com/PurpleBooth/a-good-readme-template)
