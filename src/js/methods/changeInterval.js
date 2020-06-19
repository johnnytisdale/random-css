export default function changeInterval(i, property) {
	let intervals = this.state.intervals;
	intervals[property][i] = this.getRandom(3, 10);
	this.setState({intervals: intervals});
}