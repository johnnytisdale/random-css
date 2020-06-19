export default function changeStyle(i, propertyName) {
	
	//do nothing if it's not time or user disabled
	if (
		this.state.intervals[propertyName][i] > 0 ||
		!this.props.options[propertyName].enabled ||
		(this.props.text[i] == ' ' && this.props.options.character.ignoreSpaces)
	) { return; }

	//reset the interval now that it has reached zero
	this.changeInterval(i, propertyName);

	//change the value of this css property
	//let section = ;
	let property = this.getProperty('css', propertyName);
	let value;
	switch (property.valueType) {
		case 'function':
			let args = [];
			switch (property.value) {
				case 'getColor':
					args.push(propertyName);
					break;
				case 'animate':
					args.push(i);
			}
			let method = property.value;
			value = this[method].apply(this, args);
			break;
		case 'range':
			value = String(this.getRandom(
				this.props.options[propertyName].min,
				this.props.options[propertyName].max
			)) + this.props.options[propertyName].unit;
			break;
		default:
			if (propertyName == 'borderStyle') {
				//console.log('choosing random border style from ' + this.props.options[propertyName].values.length + 'options');
			}
			value = this.getArrayElement(this.props.options[propertyName].values);
	}
	(this.getElement(i)).style[propertyName] = value;
}