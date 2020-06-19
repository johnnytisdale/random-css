export default function animate(i) {

	//don't animate if all options disabled
	if (!this.props.options.animation.values.length) return;


	let type = this.getArrayElement(this.props.options.animation.values);
	let name = 'rotate';
	if (type == 'skew') {
		switch (this.getRandom(1,3)) {
			case 1:
				name = 'skewX';
				break;
			case 2:
				name = 'skewY';
				break;
			case 3:
				name = 'skewXY';
				break;
		}
	} else if (type == 'scale') {
		name = this.getRandom(0, 1) ? 'scaleDown' : 'scaleUp';
	}
	let action = this.getRandom(1, 2);
	let retVal;
	switch (action) {
		case 1: //play/pause
			var animation = this.getElement(i).style.animation;
			if (typeof(animation) != 'undefined' && animation !== null && animation != 'none') {
				var state = this.getElement(i).style.animationPlayState;
				retVal = animation.replace(
					state,
					state == 'running' ? 'paused' : 'running'
				);
			}
			break;
		case 2: //change variables
			retVal = this.getRandom(1,3) + 's' + ' ' +
				this.getArrayElement([
					'linear',
					'ease',
					'ease-in',
					'ease-out',
					'ease-in-out',
					'step-start',
					'step-end',
					'steps'
				]) + ' 0s ' + 
				this.getArrayElement([
					'infinite',
					1, 2, 3
				]) + ' ' +
				this.getArrayElement([
					'normal',
					'reverse',
					'alternate',
					'alternate-reverse'
				]) + ' ' +
				this.getArrayElement([
					'forwards',
					'backwards',
					'both'
				]) + ' running ' + name;
			break;
	}
	return retVal;
}


			
			/*
			duration
			timingFunction
			delay
			iterationCount
			direction
			fillMode
			playState
			name
			*/