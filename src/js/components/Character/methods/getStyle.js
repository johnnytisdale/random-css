export default function getStyle() {
    
    //if not using inline style, return null
    if (!this.props.unsafe) return null;

    //clone the base style object
    let style = JSON.parse(JSON.stringify(this.props.baseStyle));

    //add properties from state
    for (let name in this.state.style) {
        const cssProperty = this.cssProperties[name];
        style[cssProperty.camelCase] = this.state.style[name];
    }
            
    return style;
}