//imports
import * as React from "react";
import Checkbox from "../../Input/Checkbox";
import CssPropertySubsection from '../../CssPropertySubsection';
import CssPropertySubsectionProps from "../../CssPropertySubsectionProps";
import { Transformation, transformations } from '../../../Randomizables/Css/Animation/Transformation';
import { AnimationOptions } from "../../../Randomizables/Css/Animation/AnimationOptions";
import { ScaleDirection } from "../../../Randomizables/Css/Animation/ScaleDirection";
import { Axis } from "../../../Randomizables/Css/Animation/Axis";
import AnimationProps from "./AnimationProps";
import AnimationSubsection from "./AnimationSubsection";

//react component
export default class Transformations extends AnimationSubsection {

    protected subsection = 'transformations' as const;

    protected values: Transformation[] = transformations;

    constructor(props: AnimationProps & CssPropertySubsectionProps) {
        super(props);
        this.isAxisChecked           = this.isAxisChecked          .bind(this);
        this.isScaleDirectionChecked = this.isScaleDirectionChecked.bind(this);
        this.toggleAxis              = this.toggleAxis             .bind(this);
        this.toggleScaleDirection    = this.toggleScaleDirection   .bind(this);
    }

    isAxisChecked(axis: Axis) {
        return this.props.options.axes.includes(axis);
    }

    isScaleDirectionChecked(scaleDirection: ScaleDirection) {
        return this.props.options.scaleDirections.includes(scaleDirection);
    }

    isChecked(transformation: Transformation) {
        return this.props.options.transformations.includes(transformation);
    }

    toggleAxis(axis: Axis) {
        let axes = this.props.options.axes;
        if (this.isAxisChecked(axis)) {
            axes.splice(axes.indexOf(axis), 1);
        } else {
            axes.push(axis);
        }
        this.props.changeValue('axes', axes);
    }

    toggleScaleDirection(scaleDirection: ScaleDirection) {
        let scaleDirections = this.props.options.scaleDirections;
        if (this.isScaleDirectionChecked(scaleDirection)) {
            scaleDirections.splice(scaleDirections.indexOf(scaleDirection), 1);
            const other = scaleDirection == 'Down' ? 'Up' : 'Down';
            if (!this.isScaleDirectionChecked(other) && this.isChecked('scale')) {
                this.toggle('scale');
            }
        } else {
            scaleDirections.push(scaleDirection);
        }
        this.props.changeValue('scaleDirections', scaleDirections);
    }

    toggle(transformation: Transformation) {
        let transformations = this.props.options.transformations;
        if (this.isChecked(transformation)) {
            transformations.splice(transformations.indexOf(transformation), 1);
        } else {
            transformations.push(transformation);
            if (transformation == 'scale' && !this.isScaleDirectionChecked('Down') && !this.isScaleDirectionChecked('Up')) {
                this.toggleScaleDirection('Down');
                this.toggleScaleDirection('Up');
            }
        }
        this.props.changeValue(transformations, transformations);
    }

    renderSubsection(active: boolean): React.ReactNode {
        return (
            <>
                <Checkbox
                    active={this.props.active}
                    checked={this.isChecked('rotate')}
                    label={'rotate'}
                    onChange={() => this.toggle('rotate')}
                />
                <Checkbox
                    active={this.props.active}
                    checked={this.isChecked('scale')}
                    label={'scale'}
                    onChange={() => this.toggle('scale')}
                />
                <Checkbox
                    active={this.props.active && this.isChecked('scale')}
                    checked={this.isScaleDirectionChecked('Down')}
                    indent={true}
                    label={'down'}
                    onChange={() => this.toggleScaleDirection('Down')}
                />
                <Checkbox
                    active={this.props.active && this.isChecked('scale')}
                    checked={this.isScaleDirectionChecked('Up')}
                    indent={true}
                    label={'up'}
                    onChange={() => this.toggleScaleDirection('Up')}
                />
                <Checkbox
                    active={this.props.active}
                    checked={this.isChecked('skew')}
                    label={'skew'}
                    onChange={() => this.toggle('skew')}
                />
                <Checkbox
                    active={this.props.active && this.isChecked('skew')}
                    checked={this.isAxisChecked('X')}
                    indent={true}
                    label={'x'}
                    onChange={() => this.toggleAxis('X')}
                />
                <Checkbox
                    active={this.props.active && this.isChecked('skew')}
                    checked={this.isAxisChecked('Y')}
                    indent={true}
                    label={'y'}
                    onChange={() => this.toggleAxis('Y')}
                />
                <Checkbox
                    active={this.props.active && this.isChecked('skew')}
                    checked={this.isAxisChecked('XY')}
                    indent={true}
                    label={'xy'}
                    onChange={() => this.toggleAxis('XY')}
                />
            </> 
        );
    }
}