export default function classes() {
    const style = JSON.parse(JSON.stringify(this.state.style));
    let classNames = [];
    for (let name in style) {
        const cssProperty = this.cssProperties[name];
        if (typeof cssProperty == 'undefined') continue;
        if (cssProperty.type != 'color') continue;
        classNames.push('random-css-' + name + '-' + style[name]);
    }
    return classNames.join(' ');
}