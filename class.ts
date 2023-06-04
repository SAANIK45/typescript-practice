class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage(): number {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

const toyota = new Car('toyota', 100000);
const totalPrice: number = toyota.getTotalPrice(25);


class Player {
    name : string ;
    age : number;
    country : string ; 

    constructor (n : string , a : number , c : string){
        this.name = n ;
        this.age = a ;
        this.country = c;
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

const mash = new Player('Mash' , 50, 'Bangladesh');
const sakib = new Player('Sakib' , 40, 'Bangladesh');

const players : Player[] = [];

players.push(mash);
players.push(sakib);

console.log(players);