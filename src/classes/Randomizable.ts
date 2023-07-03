export default abstract class Randomizable {

    abstract getRandomValue(): string;
    abstract name: string;

    private limit: number;
    private ticks: number = 0;

    constructor() {
        this.reset();
    }

    public isLimitReached(): false | string {
        this.ticks++;
        if (this.ticks < this.limit) {
            return false;
        }
        this.reset();
        return this.getRandomValue();
    }

    protected getRandomArrayElement(array: Array<any>) {
        return array[this.getRandomNumber(0, array.length - 1)];
    }

    protected getRandomBoolean(): boolean {
        return this.getRandomNumber(0, 1) === 1;
    }

    protected getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    private reset() {
        this.limit = this.getRandomNumber(1, 10);
        this.ticks = 0;
    }
}