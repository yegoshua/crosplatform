export interface IComponent {
    naz: string;
    h: number;
    w: number; 
    serialNumber: string;
}

export interface IShow{
    showConsole(): void;
    showReturn(): string;
}