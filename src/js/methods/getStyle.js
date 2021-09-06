export default function getStyle() {

	
	if (!this.state.unsafe) return null;
	let style = {fontSize: this.props.size + 'rem'};
	if (this.state.center) {
		style.margin = 'auto';
		style.width = 'min-content';
	}
	return style;
	
	//external
	let classNames = ['random-css-container'];

	//center?
	if (this.state.center) {
		classNames.push('random-css-container-center');
	}

	//size
	let className = 'random-css-container-' + this.state.size;
	if (this.state.size % 1 == 0) {
		className += '-0';
	}
	classNames.push(className);

	//return a string of space-separated class names
	return classNames.join(' ');
}