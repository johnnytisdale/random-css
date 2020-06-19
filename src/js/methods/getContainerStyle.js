export default function getContainerStyle() {
	let style = {fontSize: this.props.size + 'rem'};
	if (this.props.center) {
		style.margin = 'auto';
		style.width = 'min-content';
	}
	return style;
}