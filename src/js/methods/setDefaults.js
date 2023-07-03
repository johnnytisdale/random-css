export default function setDefaults() {

	let defaults = {
		center: true,
		options: this.setOptions(),
		size: 1,
		text: 'random css'
	};

	for (let i in defaults) 
		if (typeof this.props[i] == 'undefined') this.props[i] = defaults[i];

}