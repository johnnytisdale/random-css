import * as React from "react";
import ECssProperty from "../enums/ECssProperty";
import Randomizable from "../classes/Randomizable";

interface Props {
    character: string;
    height: number | string;
    index: number;
    randomizables: Randomizable[];
    reset: string[];
    width: number | string;
}

type State = {
    backgroundColor?: string;
    color?: string;
    glyph?: string;
}

const DEFAULTS = {
    borderWidth: '1px'
}

export default class Character extends React.Component<Props, State> {

    default: State = {};
    id: string;
    interval: NodeJS.Timer | null;
    reset: string[] = [];
    ticks: number = 0;

    constructor(props: Props) {
        super(props);
        this.id = `character-${this.props.index}`;
        const initialState = { glyph: this.props.character };
        Object.values(ECssProperty).forEach(property => {
            initialState[property] = undefined;
        });
        this.state = initialState;
        this.resetCss = this.resetCss.bind(this);
        this.startTicking = this.startTicking.bind(this);
        console.log("        Character constructed.");
    }

    componentDidMount() {

        // Get the default CSS values.
        const element = document.getElementById(this.id);
        if (element == null) {
            console.log(`Failed to get element ${this.id}!`)
            return;
        }
        const style = getComputedStyle(element);
        for (let cssProperty of Object.keys(ECssProperty)) {

            this.default[cssProperty] = DEFAULTS.hasOwnProperty(cssProperty)
                ? DEFAULTS[cssProperty]
                : style[cssProperty];
        }
        if (this.props.randomizables.length) {
            this.startTicking();
        }
        console.log("        Character mounted.");
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log("        Character updated.");
        let randLength: number = this.props.randomizables.length;
        if (!randLength && this.interval) {
            this.stopTicking();
        } else if (randLength && !this.interval) {
            this.startTicking();
        }
        let state = this.state;
        let update = false;
        for (let property of this.props.reset) {
            console.log(`            Resetting ${property} to default value: ${this.default[property]}.`);
            state[property] = this.default[property];
            update = true;
            this.reset.push(property);
        }
        if (update) {
            this.setState(state);
        }
    }

    render(): React.ReactNode {
        console.log("        Character rendered.");
        return (
            <div
                id={this.id}
                style={{
                    ...this.state,
                    height: this.props.height,
                    width: this.props.width
                }}
            >
                {this.state.glyph}
            </div>
        );
    }

    resetCss() {
        let state: State = {};
        for (let property in this.default) {
            if (this.state[property] !== null) {
                state[property] = this.default[property];
            }
        }
        this.setState(state);
        console.log("        Character unmounted.");
    }

    startTicking(): void {
        this.interval = setInterval(() => {
            console.log("            Tick.", Math.random());
            let update = false;
            let updates: Partial<Record<string, string>> = {};
            for (let randomizable of this.props.randomizables) {
                const newValue = randomizable.isLimitReached();
                if (newValue !== false && newValue != this.state[randomizable.name]) {
                    updates[randomizable.name] = newValue;
                    update = true;
                } else if (newValue) {
                    console.log("            newValue = ", newValue, ", so not updating.");
                }
            }
            if (update) {
                let state = this.state;
                for (let property in updates) {
                    state[property] = updates[property];
                }
                console.log('            ', this.props.character + ": Setting state: " + JSON.stringify(state));
                this.setState(state);
            }
        }, 300);
    }

    stopTicking(): void {
        if (this.interval != null) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    componentWillUnmount() {
        this.stopTicking();
    }
}