# Random CSS
Randomize your style.

## What's New?

### Typescript

We are now using TypeScript. The upside is that we can use interfaces and
abstract classes. The downside is that we are using TypeScript.

### Content Security Policy

Random CSS is now compatible with a *strict*
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP),
i.e., one that forbids the use of inline CSS. There is now an `unsafe` option
which defaults to `true`, in which case incline CSS is used. If you set it to
`false`, then external CSS is used and you must be sure to link to the
[stylesheet](https://randomcss.org/random.css) in your `<head>`.

While using external CSS is considered safer, it comes with a tradeoff: It
significantly limits the number of possible values supported for some CSS
properties, particularly color properties.

To use an external stylesheet, we have to create a rule for every value that we
want to support for a given property. This means that using `rgb()` is pretty
much out of the question. `rgb()` accepts three integers, each ranging from 0 to
255. So to support every possible combination, we would have to create
256<sup>3</sup> = 16,777,216 rules for each color property. Creating that many
rules for just *one* property results in a stylesheet that is over 1GB in size.

So when using external CSS, we use the
[color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color),
of which there are only 142.


## Testing
1. npm install
2. npm run watch
3. Open dist/index.html in browser.

## Authors
* **Johnny Tisdale** - [github](https://github.com/johnnytisdale) | [website](https://johnnytisdale.com)

## License
This project is licensed under the ISC License. See [LICENSE.md](LICENSE.md) for details.

## Acknowledgements
* [Billie Thompson](https://github.com/PurpleBooth) - [README template](https://github.com/PurpleBooth/a-good-readme-template)
