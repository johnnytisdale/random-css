export default function changeCharacter(i) {

	//don't change character if it's not time
	if (this.state.intervals.character[i] > 0) return false;
	
	//get options
	let options = this.props.options.character;
	if (!options.enabled) return false;

	//don't change character if both options disabled
	if (!options.unicode && !options.leet) return false;

	if (this.props.text[i] == ' ' && options.ignoreSpaces) return false;

	//as this interval has reached zero, reset it to random value
	this.changeInterval(i, 'character');

	//get the original character
	let char = this.props.text[i];

	//determine which type of character to get
	let type;
	if (options.unicode && options.leet) {
		type = this.getRandom(0, 1) === 1 ? 'leet' : 'unicode';
	} else {
		type = options.leet ? 'leet' : 'unicode';
	}

	if (options.resemble) {
		//get the characters of this type
		let chars = this[type][char];
		if (typeof(chars) == 'undefined') { return false; }

		//get a random character of this type and return it!
		let random = this.getRandom(0, chars.length - 1);
		let retVal = type == 'leet' ?
			this[type][char][random]
			: String.fromCharCode(parseInt(this[type][char][random].unicode,16));
		return retVal;
	}

	else {
		if (type == 'leet') {
			let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
			let chars = this.leet[this.getArrayElement(letters)];
			return this.getArrayElement(chars);
		}
		return String.fromCharCode(this.getRandom(33, 99997691));
	}
}