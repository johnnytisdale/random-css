/****************************************
 *       DO NOT COMMENT THIS LINE       *
 * WHETHER IN DEVELOPMENT OR PRODUCTION *
 ****************************************/
import RandomCSS from "./ts/RandomCss";



/*********************************
 *          DEVELOPMENT          *
 * 1. uncomment these lines      *
 * 2. npm run watch              *
 * 3. open index.html in browser *
 *********************************/
import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./ts/Form";
const div = document.getElementById('app');
if (div) ReactDOM.render(<Form />, div);



/***********************************
 *           PRODUCTION            *
 *   uncomment this in production. *
 *   comment in development.       *
 ***********************************/
//export default RandomCSS;