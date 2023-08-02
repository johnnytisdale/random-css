export default abstract class Randomizable {

    abstract getRandomValue(): string;
    abstract name: string;

    private limit = this.getRandomNumber(1, 10);
    private ticks = 0;

    public isLimitReached(): boolean {
        this.ticks++;
        const isLimitReached = this.ticks >= this.limit;
        if (isLimitReached) {
            this.reset();
        }
        return isLimitReached;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected getRandomArrayElement(array: Array<any>) {
        return array[this.getRandomNumber(0, array.length - 1)];
    }

    protected getRandomBoolean(): boolean {
        return this.getRandomNumber(0, 1) === 1;
    }

    protected getRandomNumber(
        min: number,
        max: number,
        integerOnly = true
    ) {
        const rando = Math.random() * (max - min + 1) + min;
        return integerOnly === true
            ? Math.floor(rando)
            : parseFloat(rando.toFixed(2));
    }

    private reset() {
        this.limit = this.getRandomNumber(1, 10);
        this.ticks = 0;
    }
}