import CssProperty from "./CssProperty";

export default class Animation extends CssProperty {

  protected acceptsColors = false;
  protected acceptsLengths = false;
  protected acceptsKeywords = false;
  protected acceptsPercentages = false;
  public name = "animation";

  private easingFunctions: Array<string> = [
    'linear',
    'ease',
    'ease-in',
    'ease-out',
    'ease-in-out',
    'step-start',
    'step-end',
    'steps'
  ];

  private iteractionCounts: Array<string> = [
    'infinite',
    '1',
    '2',
    '3'
  ];

  private directions: Array<string> = [
    'alternate',
    'alternate-reverse',
    'normal',
    'reverse',
  ];

  private fillModes: Array<string> = [
    'backwards',
    'both',
    'forwards',
  ];

  private names: Array<string> = [
    "rotate",
    "scaleDown",
    "scaleUp",
    "skewX",
    "skewXY",
    "skewY",
  ];

  public getRandomValue(): string {
    return [
      `${this.getRandomNumber(1, 3)}s`, // duration
      this.getRandomArrayElement(this.easingFunctions),
      '0s', // delay
      this.getRandomArrayElement(this.iteractionCounts),
      this.getRandomArrayElement(this.directions),
      this.getRandomArrayElement(this.fillModes),
      'running', // play state
      this.getRandomArrayElement(this.names),
    ].join(' ');
  }

}