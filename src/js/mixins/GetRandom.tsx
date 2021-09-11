/*type Constructor = new (...args: any[]) => {};

export default function GetRandom<TBase extends Constructor>(Base: TBase) {
    return class GetsRandom extends Base {

        //get a random number between min and max (inclusive)
        getRandom(min:number, max:number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
}*/

export default class GetsRandom {
    getRandom(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}