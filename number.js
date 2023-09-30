const num = ['12.22, 2, 2'];


const float = 1010.24092092;

const str = 'sss';




function log(x) {
    console.log(x);
}


log(float.toFixed(1))
// log(Number.parseFloat(num))
// log(parseFloat(num))


let int = 1000;

let int2 = '20';

console.log(int.toPrecision(21), typeof(int.toPrecision(3)));
console.log(int.toFixed(21), typeof(int.toFixed(3)));
console.log(int.toExponential(21), typeof(int.toExponential(3)));
console.log(Number.parseInt(int), typeof(Number.parseInt(int)));

console.log(2.454.toPrecision(3));
console.log(2.454.toFixed(2));

let test = [ '   ', , , ' eee ', '            []         '];

console.log(test.toString());
console.log(test.valueOf());

console.log(Number.toString(test));

Object.valueOf()



console.log(undefined == 0);