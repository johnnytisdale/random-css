export default function getClassNames() {

    let classNames = ['random-css-container'];

    if (!this.state.unsafe) {

        //center?
        if (this.state.center) {
            classNames.push('random-css-container-center');
        }
    
        //size
        let className = 'random-css-container-' + this.state.size;
        if (this.state.size % 1 == 0) {
            className += '-0';
        }
        classNames.push(className);

    }

	//return a string of space-separated class names
	return classNames.join(' ');
}