//get a random number between min and max (inclusive)
export default function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}