import RandomCSS from "./js/RandomCss";

/****************************************
 *      TO TEST, DO THE FOLLOWING:      *
 * 1. uncomment the three lines below   *
 * 2. npm run build                     *
 * 3. open index.html in browser        *
 ****************************************/
import * as React from "react";
import * as ReactDOM from "react-dom";
const div = document.getElementById('app');
if (div) { ReactDOM.render(
    <RandomCSS
        center={true}
        //options={{}}
        size={4}
        text='X'
        unsafe={true}
    />,
    div);
}

//export default RandomCSS;