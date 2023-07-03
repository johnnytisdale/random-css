export default function getColor(property) {
	let options = this.props.options[property];
	return ('rgb('
		+ this.getRandom(options.redMin, options.redMax)
		+ ','
		+ this.getRandom(options.greenMin, options.greenMax)
		+ ','
		+ this.getRandom(options.blueMin, options.blueMax)
		+ ')'
	);
}