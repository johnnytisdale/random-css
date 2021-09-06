export default function initializeState(props) {
	
	let text = typeof(props.text) == 'undefined' ? 'random css' : props.text;
	
	this.state = {
		display: this.setDisplay(text),
		exportClass: 'invisible',
		intervals: this.setIntervals(this.props.text),
		options: this.props.options,
		text: text,
	};
}

