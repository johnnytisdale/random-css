import RandomCss from "./index";

// import * as React from "react";
import { createRoot } from 'react-dom/client';

document.addEventListener(
  "DOMContentLoaded",
  () => createRoot(document.getElementById('app')).render(
    <RandomCss
      options={{"css":{"animation":{"directions":["alternate","alternate-reverse","normal","reverse"],"durationMax":300,"durationMin":300,"easingFunctions":["ease","ease-in","ease-out","ease-in-out","linear","step-end","step-start"],"enabled":true,"fillModes":["backwards","both","forwards"],"iterationCount":{"infinite":true,"infiniteProbability":0.5,"integersOnly":false,"max":3,"min":0.25,"zero":false},"transformations":["rotate"]},"borderColor":{"bMax":255,"bMin":0,"colorKeywords":["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenrod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Green","GreenYellow","Honeydew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGreen","LightGrey","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquamarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenrod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Seashell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],"enabled":true,"gMax":255,"gMin":0,"rMax":255,"rMin":0},"borderRadius":{"enabled":true,"maxCorners":4,"minCorners":1,"maxRadius":100,"minRadius":1,"slash":true,"slashProbability":0.5},"borderStyle":{"enabled":true,"borderStyles":["dashed","dotted","double","groove","hidden","inset","none","outset","ridge","solid"]},"borderWidth":{"max":3,"min":1,"units":["mm","pt","px"],"enabled":true}},"global":{"ignoreSpaces":true,"size":3,"text":"random css","unsafe":true},"glyph":{"unicode":{"enabled":true}}}}
      text="random css 2"
    />
  )
  // () => console.log('testing...')
);
