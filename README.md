 # Random CSS
 Randomize your style.

 ## What's New?

 ### Content Security Policy

 Random CSS is now compatible with a strict [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), i.e., one that forbids the use of inline CSS. The root component has an `unsafe` prop which defaults to `false`. If you pass `true` to this prop, then it will use inline CSS. Otherwise it will use external CSS and you must be sure to link to the CSS file in your `<head>`.

 While using external CSS is considered safer, it comes with a tradeoff: It significantly limits the number of possible values supported for some CSS properties, particularly color properties.
 
 To use an external stylesheet, we have to create a rule for every value that we want to support for a given property. This means that using `rgb()` is pretty much out of the question. `rgb()` accepts three integers, each ranging from 0 to 255. So to support every possible combination, we would have to create 256<sup>3</sup> = 16,777,216 rules for each color property. Creating that many rules for just *one* property results in a stylesheet that is over 1GB in size.

 So when using external CSS, we use the [color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords), of which there are only 142.


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
