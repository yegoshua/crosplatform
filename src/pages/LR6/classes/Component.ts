import {IComponent, IShow} from './Interfaces'

export class Component implements IComponent, IShow{
    naz: string;
    h: number;
    w: number;
    serialNumber: string;

    constructor(naz: string, h: number, w: number, serialNumber: string) {
        this.naz = naz;
        this.h = h;
        this.w = w;
        this.serialNumber = serialNumber;
    }
    showReturn(): string {
        return `${this.naz}, висота = ${this.h}, ширина = ${this.w}, серійний номер = ${this.serialNumber}`;
    }
    showConsole(): void {
        console.log( `${this.naz}, висота = ${this.h}, ширина = ${this.w}, серійний номер = ${this.serialNumber}`)
    }
}