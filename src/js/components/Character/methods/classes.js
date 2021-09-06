//get a space-separated list of css class names
export default function classes() {
    
    //an array to hold css class names
    let classNames = [];

    //loop through the css property names
    for (let name in this.state.style) {

        //dev
        if (typeof this.cssProperties[name] == 'undefined') continue;
        if (this.cssProperties[name].type != 'color') continue;

        //push class name to array
        classNames.push('random-css-' + name + '-' + this.state.style[name]);
    }

    //return string
    return classNames.join(' ');
}