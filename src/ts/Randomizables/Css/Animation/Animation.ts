//imports
import { AnimationOptions } from "./AnimationOptions";
import { Axis             } from "./Axis";
import   CssProperty        from "../CssProperty";
import { Direction        } from "./Direction";
import { FillMode         } from "./FillMode";
import { Iteration        } from "./Iteration";
import { ScaleDirection   } from "./ScaleDirection";
import { TimingFunction   } from "./TimingFunction";
import { Transformation   } from "./Transformation";

//class definition
export default class Animation extends CssProperty {

    camelCase = 'animation' as const;

    axes:            Axis[];
    directions:      Direction[];
    fillModes:       FillMode[];
    iterations:      Iteration[];
    scaleDirections: ScaleDirection[];
    timingFunctions: TimingFunction[];
    transformations: Transformation[];

    playState: string;

    constructor(options: AnimationOptions, unsafe: boolean) {
        super('animation', unsafe);
        this.axes = options.axes;
        this.directions = options.directions;
        this.fillModes = options.fillModes;
        this.iterations = options.iterations;
        this.scaleDirections = options.scaleDirections;
        this.timingFunctions = options.timingFunctions;
        this.transformations = options.transformations;
    }

    private animate() {

        //should we play/pause the current animation, or start a new animation?
        return this.getRandom(0, 1) ? this.changePlayState() : this.newAnimation();
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

    private newAnimation() {

        //randomly select a transformation
        const transformation = this.getArrayElement(this.transformations);

        //set animation name based on transformation
        let name = transformation;

        //if skewing, randomly select X axis, Y axis, or both
        if (transformation == 'skew') name += this.getArrayElement(this.axes);
        
        //if scaling, randomly select up or down
        else if (transformation == 'scale') name += this.getArrayElement(this.scaleDirections);
            
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

    public randomize():string {
        return this.value = this.animate();
    }
}