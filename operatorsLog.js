//lOGICAL OPERATOR

console.log(null || undefined); //undefined
console.log('' == false);
console.log(0 == false);


let res = '' || 0 || false || null || 0

console.log(res);

let res2 = true && 1 && '1'

console.log(res2);


console.log(null == undefined);

let res3 = 25 && null && undefined && false && 0

console.log(res3);

let res4 = (true || 0 && false) && true
console.log(res4);

let test = null

console.log(!!test);

let res5 = (null || undefined) ?? null
console.log(res5); 

// const auto = {
//     brand: 'M',
//     color: 'black',
//     details: {
//         price: 100
//     }
// }

const auto = undefined

console.log(auto?.color, auto?.details.brand);