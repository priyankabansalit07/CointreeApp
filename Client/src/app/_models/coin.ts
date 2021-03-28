export interface Coin {

    id: number;
    sell: string;
    buy: string;
    ask: number;
    bid:number;
    rate:number;
    spotRate:number;
    market:string;
    timestamp: Date;
    rateType: string;
    rateSteps: object;

    change: number;
}
