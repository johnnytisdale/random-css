export default abstract class Randomizable {

    abstract getRandomValue(): string;
    abstract name: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected getRandomArrayElement(array: Array<any>) {
        return array[this.getRandomNumber(0, array.length - 1)];
    }

    protected getRandomBoolean(): boolean {
        return this.getRandomNumber(0, 1) === 1;
    }

    public getRandomNumber(min: number, max: number, integerOnly = true) {
        const random = Math.random() * (max - min + 1) + min;
        return integerOnly === true
            ? Math.floor(random)
            : parseFloat(random.toFixed(2));
    }
}
