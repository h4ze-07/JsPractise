let a: number = 10;
let a2 = 24;

let isLogged: boolean = true;

const list: Array<number> = [1, 2, 3]

const func = (a: number, b: string): string => (a+b).toString();




const newFunc = (p: string): number => +eval(p);

// TYPES

export var var1Boolean: boolean = true;

export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 111111;
export var var5Octal : number = 744;

export var var6String: string = 'Hello, world!';

export var var7Array: Array<any> = [1, 'test', {a: 3}, 4, 5];
export var var8NumericArray: Array<number> = [1, 2, 3, 4, 5];

export var var9Tuple: [string, number] = ['key', 12345];

export enum Color {
    Red = 1, 
    Green = 2, 
    Blue = 4
}
export var var10Enum: Color = Color.Blue;

export var var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5];

export var var12VoidFunction = (): void => {
    console.log('Hello world!');
}

export var var13Null: null = null;
export var var14Undefined : undefined = undefined;

export function var15NeverFunction(): never {
    throw new Error()
}