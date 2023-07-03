export default function initializeInterval() {
	this.interval = setInterval(() => {
		let display = this.state.display;
		for (let i = 0; i < this.props.text.length; i++) {

			//subtract 1 from each interval (unless disabled)
			let intervals = this.state.intervals;
			for (let property in intervals) {
				if (this.props.options[property].enabled && intervals[property][i] > 0) {
					intervals[property][i]--;
				}
			}
			this.setState({intervals: intervals}, () => {

				//change the character
				let character = this.changeCharacter(i);
				if (character !== false) {
					display[i] = character;
				} else if (this.props.options.character.blink) {
					display[i] = this.props.text[i];
				}

				//change styles
				let section = this.sections.find((section) => (section.name == 'css'));
				for (let input in section.inputs) {

					this.changeStyle(i, section.inputs[input].property);
				}
			});
		}
		this.setState({display: display});
	}, 100);
}