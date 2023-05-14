import { Settlement } from "./Settlement";

export class City extends Settlement{
    constructor(override naz: string, override h: number, override s: number){
        super();
    }
    S()
    {
        let density: number;
        density = Math.round(this.h / this.s);
        this.density = density;
    }
}