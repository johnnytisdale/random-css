export default function setIntervals(text) {
	let intervals = {};

	for (let i in this.sections) {
		let section = this.sections[i];
		for (let x in section.inputs) {
			intervals[section.inputs[x].property] = [];
			for (let i = 0; i < text.length; i++) {
				intervals[section.inputs[x].property].push(this.getRandom(3, 10));
			}
		}
	}
	
	return intervals;
}