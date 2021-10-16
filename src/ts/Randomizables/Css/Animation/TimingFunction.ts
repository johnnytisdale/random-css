type TimingFunction = (
    'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | 'steps'
);

const timingFunctions: TimingFunction[] = [
    'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'steps'
];

export {TimingFunction, timingFunctions};