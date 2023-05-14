export abstract class Settlement {
    naz!: string;
    h!: number;
    s!: number; 
    numberInHouse!: number;
    density!: number;
    constructor() {
        
    }
    show(){
        return `Назва = ${this.naz} площа = ${this.s} густота населення = ${this.density}` 
    }
    abstract S(): any;
}