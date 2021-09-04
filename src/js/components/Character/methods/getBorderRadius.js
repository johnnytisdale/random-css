export default function getBorderRadius() {
	let length = 1;//this.props.options.borderRadius.mono ? 1 : 4;
	let string = '';
	for (let i = 0; i < length; i++) {
		string += this.getRandom(0, 100) + '%';
		if (i < length - 1) {
			string += ' ';
		}
	}
	return string;
}