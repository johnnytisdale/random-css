export default function setOptions() {

	let options = {};
	options.all = {css: true};
	let colors = ['red', 'green', 'blue'];

	for (let i in this.sections) {
		let section = this.sections[i];
		//options.all[section.name] = true;
		for (let x in section.inputs) {
			let input = section.inputs[x];
			if (typeof options[input.property] == 'undefined') {
				options[input.property]	= {};
			}
			if (input.option == 'enabled') {
				options[input.property].enabled = true;
			} else {
				options[input.property][input.option] = input.default;
			}
			if (input.hasOwnProperty('options')) {
				for (let y in input.options) {
					let suboption = input.options[y];
					options[input.property][suboption.option] = suboption.default;
				}
			}
			if (input.hasOwnProperty('values')) {
				options[input.property].values = [];
				for (let value = 0; value < input.values.length; value++) {
					options[input.property].values.push(input.values[value]);
					options[input.property][input.values[value]] = true;
				}
			} else if (input.valueType == 'function' && input.value == 'getColor') {
				for (let color = 0; color < colors.length; color++) {
					options[input.property][colors[color] + 'Max'] = 255;
					options[input.property][colors[color] + 'Min'] = 0;
				}
			} else if (input.valueType == 'range') {
				options[input.property].min = input.value[0];
				options[input.property].max = input.value[1];
				options[input.property].unit = input.unit;
			}
		}
	}

	/*
	//character
	options.character = {};
	options.character.enabled = true;
	options.character.resemble = true;
	options.character.unicode = true;
	options.character.leet = true;

	//css
	options.all = {};
	options.all.enabled = true;
	options.none = {};
	options.none.enabled = false;
	let colors = ['red', 'green', 'blue'];
	for (let property in this.properties) {
		options[property] = {};
		options[property].enabled = true;

		//colors
		if (this.properties[property].value == 'getColor') {
			for (let color = 0; color < colors.length; color++) {
				options[property][colors[color] + 'Max'] = 255;
				options[property][colors[color] + 'Min'] = 0;
			}
		}

		//arrays
		else if (
			this.properties[property].valueType == 'array' ||
			this.properties[property].hasOwnProperty('values')
		) {
			let values = this.properties[property]['value' + (
				this.properties[property].valueType == 'array' ? '' : 's'
			)];
			options[property].values = [];
			for (let i = 0; i < values.length; i++) {
				options[property][values[i]] = true;
				options[property].values.push(values[i]);
			}
		}

		if (this.properties[property].hasOwnProperty('options')) {
			let subOptions = this.properties[property].options;
			for (let i = 0; i < subOptions.length; i++) {
				options[property][subOptions[i].option] = subOptions[i].default;
			}
		}
	}
	*/
	
	return options;
}