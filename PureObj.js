let obj = {name: 'Vlad'}

let a = [{name: 'Vlad'}]
let date = new Date;
let map = new Map;
let reg = new RegExp
let wMap = new WeakMap;
let b = new Boolean

function isObj(data) {
    if (data === null || data === undefined) {
        return false
    }
    if (Object.getPrototypeOf(data) !== Object.prototype) {
        console.log('Not pure obj');
    } else {
        console.log('Pure obj');
    }
}
isObj(obj)

// console.log(obj, typeof obj);
// console.log(date, typeof date);
// console.log(map, typeof map);
// console.log(wMap, typeof wMap);
// console.log(reg, typeof reg);