//imports
import CssProperty  from "./CssProperty";

//class definition
export default class Animation extends CssProperty {

    axes:               string[] = ['X', 'Y', 'XY'];
    directions:         string[] = ['normal', 'reverse', 'alternate', 'alternate-reverse'];
    fillModes:          string[] = ['forwards', 'backwards', 'both'];
    iterations:         string[] = ['infinite', '1', '2', '3'];
    scaleDirections:    string[] = ['Down', 'Up'];
    timingFunctions:    string[] = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'steps'];
    transformations:    string[] = ["rotate", "scale", "skew"];

    playState: string;

    constructor(unsafe:boolean) {
        super('animation', 'animation', unsafe);
    }

    public setValue():string {
        this.value = this.animate();
        return this.value;
    }

    private animate() {

        //should we play/pause the current animation, or should we start a new animation?
        const shouldChangePlayState = this.getRandom(0, 1);

        return shouldChangePlayState ? this.changePlayState() : this.newAnimation();
    }

    private newAnimation() {
        //randomly select a transformation
        const transformation = this.getArrayElement(this.transformations);

        //set animation name based on transformation
        let name = transformation;

        //if skewing, randomly select X axis, Y axis, or both
        if (transformation == 'skew') {
            name += this.getArrayElement(this.axes);
        }
        
        //if scaling, randomly select up or down
        else if (transformation == 'scale') {
            name += this.getArrayElement(this.scaleDirections);
        }       
            
        return (

            //duration
            this.getRandom(1,3) + 's' + ' ' +

            //timing function
            this.getArrayElement(this.timingFunctions)
            
            //delay
            + ' 0s ' + 

            //iteration count
            this.getArrayElement(this.iterations) + ' ' +

            //direction
            this.getArrayElement(this.directions) + ' ' +

            //fill mode
            this.getArrayElement(this.fillModes) +
            
            //play state
            ' running ' +

            //name
            name
        );
    }

    private changePlayState() {
        //to do: make safe for custom animation names)
        let animation = this.value;
        if (typeof this.value == 'undefined') return this.newAnimation();
        const newPlayState = this.playState == 'running' ? 'paused' : 'running';
        const value = animation.replace(
            this.playState,
            newPlayState
        );
        this.playState = newPlayState;
        return value;
    }
}