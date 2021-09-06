export default function getStyle() {
    
    //if not using inline style, return null
    if (!this.props.unsafe) return null;

    //clone the style object
    let style = JSON.parse(JSON.stringify(this.state.style));

    //add properties from base style
    for (let cssProperty in this.props.baseStyle) {
        style[cssProperty] = this.props.baseStyle[cssProperty];
    }
            
    return style;
}