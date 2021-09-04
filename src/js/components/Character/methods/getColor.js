export default function getColor(rMin, rMax, gMin, gMax, bMin, bMax) {
	return ('rgb('
		+ this.getRandom(rMin, rMax)
		+ ','
		+ this.getRandom(gMin, gMax)
		+ ','
		+ this.getRandom(bMin, bMax)
		+ ')'
	);
}