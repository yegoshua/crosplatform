import { Settlement } from "./Settlement";

export class Village extends Settlement{
    constructor(override naz: string, override h: number, override numberInHouse: number, override s: number){
        super();
    }
    S()
    {
        let density: number;
        density =  Math.round( (this.h * this.numberInHouse) / this.s);
        this.density = density;
    }
}