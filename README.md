# Random CSS

Randomize your style.

## Installation

`npm i -D random-css`

## How To Use

Import the `RandomElement` corresponding to the HTML element you want to
randomize.

In this example, a `<div>` will be created. Its `borderWidth` will remain fixed
at `1rem`, while the `borderColor`, `borderRadius`, and `borderStyle` properties will be randomized.

```
import { RandomDiv } from "random-css";

function MyComponent() {
  return (
    <RandomDiv
      fixedStyle={{borderWidth: "1rem"}}
      style={["borderColor", "borderRadius", "borderStyle"]}
    >
      my super awesome div content!!!
    </RandomDiv>
  );
}
```

Suppose you wanted to specify which border styles will be used.

```
<RandomDiv
  fixedStyle={{borderWidth: "1rem"}}
  style={[
    "borderColor",
    "borderRadius",
    {
      borderStyle: {
        borderStyles: [
          "dashed",
          "dotted",
          "double",
          "groove",
          "solid"
        ]
      }
    }
  ]}
>
  dude, check out these border styles!
</RandomDiv>
```

## What's New?

- CI/CD: Github Actions
- Formatting: Prettier
- Linting: ESLint
- Testing: Jest and React Testing Library

### Content Security Policy

Random CSS is now compatible with a _strict_
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP),
i.e., one that forbids inline CSS. There is now an `external` prop which defaults to `false`. If you set it to `true`, then external CSS is used and you must be sure to link to the [stylesheet](https://randomcss.org/random.css) in your `<head>`.

While using external CSS is considered safer, it comes with a tradeoff: It
significantly limits the number of possible values supported for some CSS
properties, particularly color properties.

To use an external stylesheet, we have to create a rule for every value that we
want to support for a given property. This means that using `rgb()` is pretty
much out of the question. `rgb()` accepts three integers, each ranging from 0 to 255. So to support every possible combination, we would have to create
256<sup>3</sup> = 16,777,216 rules for each color property. Creating that many
rules for just _one_ property results in a stylesheet that is over 1GB in size.

So when using external CSS, we use the
[color keywords](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color),
of which there are only 142.

## Start Developing

1. `git clone https://github.com/johnnytisdale/random-css.git`
2. `cd random-css`
3. `npm install`
4. `npm run watch`
5. Open `dist/form.html` in browser.
6. As you make changes in `src`, refresh the form and test.

## Authors

- **Johnny Tisdale** - [github](https://github.com/johnnytisdale) | [website](https://johnnytisdale.com)

## License

This project is licensed under the ISC License. See [LICENSE.md](LICENSE.md) for details.

## Acknowledgements

- [Billie Thompson](https://github.com/PurpleBooth) - [README template](https://github.com/PurpleBooth/a-good-readme-template)
