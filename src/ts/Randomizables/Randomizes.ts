export default class Randomizes {

    getArrayElement(array:Array<any>) {
        return array[this.getRandom(0, array.length - 1)];
    }

    getRandom(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}