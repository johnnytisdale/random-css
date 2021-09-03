export default function setDefaults() {

	//define the default values
	const defaults = {

		//center the text?
		center: true,

		//css properties to change at random
		options: this.setOptions(),

		//font size in rem
		size: 1,

		//text to randomize
		text: 'random css'
	};

	//loop through the property names
	for (let i in defaults) {

		//if this prop was not passed
		//i think this a no-no in react: a component mutating its own props!
		if (typeof this.props[i] == 'undefined') {
			
			//set it to the default value
			this.props[i] = defaults[i];

		}
	}
}