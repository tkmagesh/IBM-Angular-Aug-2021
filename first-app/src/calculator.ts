export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

/* The above functions are assembled in a module (es6) object and exported */

function isOdd(x : number) : boolean {
    return x % 2 === 1;
}

export default isOdd;