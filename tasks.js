// const text = '10010001'

// console.log(parseInt(text, 2));


// function pigIt(str){
//     let res = str.split(" ");

//     let lSmStart = 'a'.charCodeAt(0);
//     let lSmEnd = 'z'.charCodeAt(0);
//     let lBigStart = 'A'.charCodeAt(0);
//     let lBigEnd = 'Z'.charCodeAt(0);

//     console.log(lSmStart, lSmEnd, lBigStart, lBigEnd);

//     let zero = '0'.charCodeAt(0);
//     let nine = '9'.charCodeAt(0);
    
//     let newRes = [];

//     for (let i = 0; i < res.length; i++) {
//         let newW = res[i].slice(1);
//         let fL = res[i].slice(0, 1);
//         newW += fL;

//         let loneSymb = newW.length === 1 ? newW.charCodeAt(0) : 0;


//         if (loneSymb && ((lSmStart <= loneSymb && loneSymb <= lSmEnd) || (lBigStart <= loneSymb && loneSymb <= lBigEnd))) {
//             newRes.push(newW + 'ay');
//         } else if (loneSymb && (loneSymb < lSmStart || loneSymb > lSmEnd || loneSymb < lBigStart || loneSymb > lBigEnd) && !(loneSymb >= zero &&   loneSymb <= nine)) {
//             console.log(newW, loneSymb);
//             newRes.push(newW);
//         } else {
//             newRes.push(newW + 'ay')
//         }
//     }

//     return newRes.join(" ")
// }

// function pigIt(str){
//     return str
//       .split(' ')
//       .map((word) => word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word)
//       .join(' ')
//   }

// console.log(pigIt('O tempora o mores !'))


// function initializeNames(name){
//     let res = name.split(" ");

//     if (res.length <= 2) {
//         return name
//     } else {

//         return res.map((v, i) => {
//             if (i >= 1 && i <= res.length - 2) {
//                 return v.at(0) + '.'
//             } else return v
//         }).join(" ");
//     }
// }

// console.log(initializeNames('Vlad Bond fff Loh'));

// const makeNegative = num => num < 0 ? num : 0 - num;
// console.log(makeNegative(9));


// function findOutlier(integers){
//     let res;
//     if (integers.length < 3) {
//         return false
//     }
//     let resArr = integers.map((el) => {return Math.abs(el)})
//     for (let i = 0; i < resArr.length; i++) {
//         let currNum = resArr[i] % 2;
//         let prevNum = resArr[i - 1] % 2;
//         let nextNum = resArr[i + 1] % 2;
//         if (i === 0) {
//             if (currNum !== resArr[i + 1] % 2 && currNum !== resArr[i + 2] % 2 ) {
//                 res = integers[i];
//             }
//         } else if (i === resArr.length - 1) {

//             if (currNum !== resArr[i - 1] % 2 && currNum !== resArr[i - 2] % 2 ) {
//                 res = integers[i];
//             }

//         } else if (currNum !== prevNum && currNum !== nextNum) {
//             res = integers[i];
//         }
//     }
//     return res;
// }

// console.log(findOutlier([137017823,-44627887,-86761999,-60912635,-124456829,173933771,-190752751,30083681,119309587,32258549,-65276763,156481227,-130834549,-52860565,106394899,-199465626,-131424955,-18205243,-189000303,90724985,-8755455,146756561,105582401,135430375,-42377259,-191294015,-69362917,-37384117,-25866205,92983807,-177422435,187338795,112117017,94062833,-53950349,-156368161,158273347,136778459,58583701]));


// function age(x, y){
//     let res;
//     for (let i = 0; i < 1000; i++) {
          
//         if (i + x === i * y) {
//             res = i * y
//             break;
//         }
//     }

//     return res;
// }

// console.log(age(-15, 0.25));

// let age = (x, y) => x / (y - 1) + x;


// let t1 = age + x
// let t1 = age * y

// age + x = age * y
// x = age * y - age
// x = age*(y - 1)
// t1 = x / (y - 1) + x



// function solution(number){
//     let i = 0;
//     let res = 0;

//     while (i < number) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             res += Math.floor(i);
//         }
//         i++;
//     }

//     return res;
// }

// console.log(solution(10));


// function countPositivesSumNegatives(input) {
    
//     let positives = input?.filter(el => el > 0);
//     let negatives = input?.filter(el => el < 0);
//     let negCount = 0;

//     if (negatives) {
//         for (const i of negatives) {
//             negCount += i;
//         }
//     }

//     return !input || input.length === 0 ? [] : [positives?.length, negCount];
// }

// console.log(countPositivesSumNegatives(null));

// String.prototype.isUpperCase = function() {
//     for (let i = 0; i < this.length; i++) {
//         const char = this[i];
//         if (char !== ' ' && char !== char.toUpperCase()) {
//             return false;
//         }
//     }
//     return true;
// };

// String.prototype.isUpperCase = function() {
//     return this == this.toUpperCase()
// }

// console.log('str'.toUpperCase());
// console.log('HELLO I AM DONALD'.isUpperCase());

// function getAges(sum, diff){
//     if (sum < 0 || diff < 0) {
//         return null
//     }
//     let a = (sum + diff) / 2;
//     let res = [a, sum - a].sort((a, b) => b - a)      
//     return res[0] < 0 || res[1] < 0 ? null : res;
// };

// // sum  = a + b
// // diff = a - b
// // 24 = a + b
// // 4 = a - b
// // b = a - 4
// // 

// console.log(getAges(20, 40));

// const intDiff = (arr, n) => {
//     let res = 0;
//     let num = 0;
//     let newArr = arr.sort((a, b) => b - a)
//     for (let i = 0; i < newArr.length; i++) {
//         num += newArr[i] - n;
//             for (let j = i; j < newArr.length; j++) {
//                 if (num === newArr[j + 1]) {
//                     res++
//                 }
//             }
//         num = 0  
//     }
//     return res;
// }

// console.log(intDiff([1, 1, 3, 3], 2));

// function findChildren(santasList, children) {
    
//     let res = [];

//     for (const i of santasList) {
    
//         for (const j of children) {
//             if (j === i) {
//                 res.push(j)
//             }
//         }

//     }
//     return Array.from(new Set(res.sort()))
// }

// console.log(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]));

// function empty(array) {
//     let res = array;
//     res.length = 0;
//     return res
// }

// const arr = [1, 2, 3, 4];

// console.log(empty(arr) === arr);

// function solve(a){
//     let even = 0, odd = 0;
//     a.forEach(el => el % 2 === 0 ? even++ : el % 2 !== 0 && !isNaN(el % 2) ? odd++ : null)
//     return even - odd
// };


// console.log(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]));

// function wheatFromChaff(values) {
//     let pos = values.filter(el => el > 0).sort((a, b) => a - b)
//     let neg = values.filter(el => el < 0).sort((a, b) => a - b)
//     values = [...neg, ...pos]
//     return values
// }

// console.log(wheatFromChaff([2,-4,6,-6]));

// function stairsIn20(s){
//     let res = 0;
//     s.forEach(el => el.forEach(i => res += i))
//     return res * 20
// }

// const sumAverage = (arr) => {
//     let result = 0;
//     arr.forEach(a => result += (a.reduce((total, cur) => {return total += cur}, 0) / a.length))
//     return Math.floor(result);
// }

// console.log(sumAverage([[52, 64, 84, 21, 54], [44, 87, 46, 90, 43]]));



// function test(arr) {
//     let a = 0;
//     arr.forEach(el => a += el)

//     return a / arr.length
// }
// console.log(test([44, 87, 46, 90, 43]));
// console.log([1, 2, 3].reduce((total, cur) => {return total += cur}, 0));

// function flickSwitch(arr){
//     let a = "flick";
//     let flag = true;
//     let res = arr.map(el => 
//         // if (el === a) {
//         //     flag = !flag
//         //     // return el = flag
//         // }
//         el === a ? flag = !flag : el = flag
//         // return el = flag
//     )
//     return res;
// }

// console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));


// function sumDigNthTerm(initval, patternl, nthterm) {

//     let res = initval;

//     let currPosition = 0;
//     for (let i = 0; i < nthterm - 1; i++) {
//         res += patternl[currPosition++]
//         if (currPosition >= patternl.length) {
//             currPosition = 0
//         }

//     }
//     let arr = String(res).split("")
//     let counter = 0;
//     arr.forEach((el) => counter += Number(el))
//     return counter;
// }

// function calculateString(s){
//     const zero = '0'.charCodeAt(0);
//     const nine = '9'.charCodeAt(0);

//     const pl = '+'.charCodeAt(0);
//     const m = '-'.charCodeAt(0);
//     const d = '/'.charCodeAt(0);
//     const mult = '*'.charCodeAt(0);
//     const dot = '.'.charCodeAt(0);

//     let num1 = 0;
//     let num2 = 0;
//     let sign = '';

//     let res = ''

//     let signFound = false;
//     let dotFound = false;

//     for (let i = 0; i < s.length; i++) {
//         let char = s.charCodeAt(i);
//         let el = s[i]

        
//         if (!signFound && char >= zero && char <= nine) {
//             res += el
//         } else if (char === pl || char === m || char === d || char === mult) {
//             res += el
//             signFound = true;
//         } 
//         else if (signFound && char >= zero && char <= nine) {
//             res += el
//         } else if (char === dot) {
//             res += el
//         }        
//     }

//     return String(Math.round(eval(res)))
// }

function calculateString(s){
    let res = ''
    let signFound = false;
    for (let i = 0; i < s.length; i++) {
        let el = s[i]
        if (!signFound && '0123456789'.includes(el)) {
            res += el
        } else if ('+-/*'.includes(el)) {
            res += el
            signFound = true;
        } 
        else if (signFound && '0123456789'.includes(el)) {
            res += el
        } else if ('.'.includes(el)) {
            res += el
        }        
    }
    return String(Math.round(eval(res)))
}

// console.log(calculateString("a1a2b3c.c0c/a1a0b.cc00c"));

// console.log(String(Math.floor(eval('123-10000'))));

// function noIfsNoButs(a, b) {
//     let res = a - b;
//     switch (res > 0) {
//         case true:
//             res = `${a} is greater than ${b}`
//     }

//     switch (res < 0) {
//         case true:
//             res = `${a} is smaller than ${b}`
//     }

//     switch (res === 0) {
//         case true: {
//             res = `${a} is equal to ${b}` 
//         }
//     }

//     return res
// }

// console.log(noIfsNoButs(44, 45));

// let deadAntCount = (ants) => {
//     let counter = 0;

//     if (typeof ants === 'string') {
//         let arr = ants.split(" ");

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === 'ant') {
//                 counter++;
//             }
//         }

//         return arr.length - counter;
//     }

//     return counter;
// }

// console.log(deadAntCount(null));

// let someFunc = (i) => {
//     return +String(i).split("").map(el => el ** 2).join('')
// }

// console.log(someFunc(99));

// const trouble = (a, t) => {
//     let res = [];
//     for (let i = 0; i < a.length; i++) {

//         if (a[i] + a[i + 1] === t) {
//             res.push(i+1);
//         }
//     }
//     for (let i = res.length - 1; i >= 0; i--) {
//         a.splice(res[i], 1);
//     }
//     return a;
// }

// function closingInSum(n) {
//     let res = String(n).split("")

//     let start = 0;
//     let stop = res.length - 1;

//     let output = 0;

//     for (let i = 0; i < res.length / 2; i++) {
        
//         if (start === stop) {
//             output += Number(res[i])
//         } else {
//             output += Number(res[start] + res[stop])
//             start++;
//             stop--;
//         }
//     }

//     return output   
// }

// console.log(closingInSum(1039));


// let f = (s) => {
//     const nums = {'nil': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}
//     return String(s).split(" ").map((el, ind, arr) => el in nums ? nums[el] : null).filter(el => el !== null)
// }

// console.log(f("new score: two three"));

// const sillycase = s => String(s).split("").map((el, ind, arr) => ind < arr.length / 2 ? el.toLocaleLowerCase() : el.toUpperCase()).join("")
// console.log(f("brian"));

// let sortByBit = arr => {
//     return arr.map(el => el.toString(2))
//     .sort((a, b) => {
//         const onesA = (a.match(/1/g) || []).length;
//         const onesB = (b.match(/1/g) || []).length;
//         if (onesA !== onesB) {
//             return onesA - onesB;
//         } else {
//             return parseInt(a, 2) - parseInt(b, 2);
//         }
//     })
//     .map(el => parseInt(el, 2))
// }

// let sortByBit = arr => 
//     arr.sort((a, b) => {
//         let bF = a.toString(2)
//         let bS = b.toString(2)

//         let matchesF = bF.match(/1/g).length;
//         let matchesS = bS.match(/1/g).length;

//         if (matchesF !== matchesS) {
//             return matchesF - matchesS
//         } else {
//             return a - b
//         }
// })

// let test = [3, 8, 3, 6, 5, 7, 9, 1]
// let test2 = [7, 6, 15, 8]
// console.log(sortByBit(test));

// let ntest = test.push(1)

// console.log(test == ntest);

// Number(a.replace(/0/g, '')) - Number(b.replace(/0/g, ''))
// parseInt(a, 2) - parseInt(b, 2) 

// let orderWord = s => !s ? "Invalid String!" : s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");


// let highAndLow = s => {
//     let arr = s.split(" ").map(el => +el).sort((a, b) => b - a)
//     return `${arr[0]} ${arr[arr.length - 1]}`
// }

// console.log(highAndLow("1 9 3 4 -5"));

// let getMiddle = s => {
//     return s.length % 2 !== 0 ? s[Math.ceil((s.length/2)-1)] : `${s[(s.length/2)-1]}${s[s.length/2]}` 
// }

// console.log(getMiddle('A'));

// let accum = s => s.toLowerCase().split("").map((v, i) => String(v).repeat(i+1).replace(v[0], v[0].toUpperCase())).join('-');

// console.log(accum('MjtkuBovqrU'));

// let arrayPlusArray = (arr1, arr2) =>
//     arr1.reduce((pr, curr) => {return pr += curr}, 0) + arr2.reduce((pr, curr) => {return pr += curr}, 0)

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// function add(num1, num2) {

//     let len = num1.toString().length >= num2.toString().length ? num1.toString().length : num2.toString().length;
    
//     num1 = num1.toString().padStart(len, 0)
//     num2 = num2.toString().padStart(len, 0)

//     let sum = '';

//     for (let i = 0; i < len; i++) {
//         console.log(Number(num1[i]) + Number(num2[i]));
//         sum += Number(num1[i]) + Number(num2[i])
//     }

//     return Number(sum)
// }

// console.log(add(49999, 49999));

// function permutationPosition(perm) {
//     return 1;
// }

// let stringExpansion = s => {
//     let result = '';
//     let currStr = '';
//     let currNum = '';

//     let flag = false;

//     if (s === '' || s === null || s === undefined) {
//         return ''
//     } else if (s.match(/[a-zA-Z]/g) && s.match(/[a-zA-Z]/g).length === s.length) {
//         return s
//     } else if (s.match(/[0-9]/g).length && s.match(/[0-9]/g).length === s.length) {
//         return ''
//     } else {
//         for (let i=0; i < s.length; i++) {

//                 if (s[i].match(/[a-zA-Z]/) && !flag) {
//                     result += s[i]
//                 }

//                 if (s[i].match(/[0-9]/)) {
//                     currNum += s[i]
//                     flag = true

//                     if (s[i+1].match(/[a-zA-Z]/)) {
                        
//                     }
//                 }

//                 if (s[i].match(/[a-zA-Z]/) && flag) {
//                     currStr += s[i]
//                     if (s[i + 1] === undefined) {
//                         break
//                     } else if (s[i+1].match(/[0-9]/)) {
//                         flag = false
//                     }
//                 }

//                 if (!flag && currNum && currStr) {
//                     for (let i of currStr) {
//                         result += i.repeat(+currNum%10)
//                     }
//                     currStr = '';
//                     currNum = '';
//                 }
//             }   
//         }

//     for (let i of currStr) {
//         result += i.repeat(+currNum%10)
//     }
//     currStr = '';
//     currNum = '';

//     return result
// }

// console.log(stringExpansion('jjjbbbjjjllleb'));

// let compare = (s1, s2) => {
//     if (s1 === null || !s1 || s1 === 'None' || s1 === 'NULL' || s1 === 'Nil' || s1.match(/[^a-zA-Z]/g)) {
//         s1 = 0
//     } else {
//         s1 = [...s1].map(el => el.toUpperCase().charCodeAt(0)).reduce((pr, cur) => pr + cur)
//     }

//     if (s2 === null || !s2 || s2 === 'None' || s2 === 'NULL' || s2 === 'Nil' || s2.match(/[^a-zA-Z]/g)) {
//         s2 = 0
//     } else {
//         s2 = [...s2].map(el => el.toUpperCase().charCodeAt(0)).reduce((pr, cur) => pr + cur)
//     }

//     console.log(s1, s2);

//     return  s1 === s2
// }

// console.log(compare('gf', 'FG'));

// console.log('abd'.match(/[^a-zA-Z]/g));

// let f = (n) => {
//     let newN = n + 1;
//     while (newN < 9000) {
//         let str = String(newN)
//         let isUnique = true;
//         for (const i of str) {
//             const regex = new RegExp(`${i}`, 'g')
//             if ([...str.matchAll(regex)].length > 1) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             return newN
//         }
//         newN++
//     }
// }

// console.log(f(1987));


// function howManydays(month){
//     var days;
//     switch (month){
//       case 2: 
//         days = 28;
//         break;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         days = 30
//         break;
//       default:
//         days = 31;
//         break;
//     }
//     return days;
// }
// console.log(howManydays(6));


// function padIt(str,n){
//     let i = 1, nStr = str;
//     while (i <= n) {
//         if (i % 2 !== 0) {
//             nStr = nStr.padStart(nStr.length + 1, '*')
//         } else {
//             nStr = nStr.padEnd(nStr.length + 1, '*')
//         }
//         i++
//     }
//     return nStr;
// }

// padIt('a', 4)

// function pickIt(arr){
//     let odd = [], even = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] % 2 !== 0 ? odd.push(arr[i]) : even.push(arr[i])
//     }
//     return [odd,even];
// }

// function grabDoll(dolls){
//     let bag=[];
//     for (let i = 0; i < dolls.length; i++) {
//         if (dolls[i] === "Hello Kitty" || dolls[i] === 'Barbie doll')  {
//             bag.push(dolls[i])
//         } else {
//             continue;
//         }

//         if (bag.length === 3) break; 
//     }
//     return bag;
// }

// function giveMeFive(obj){
//     let res = [];
//     for (const key in obj) {
//         if (key.length === 5) {
//             res.push(key)
//         } 
//         if (obj[key].length === 5) {
//             res.push(obj[key])
//         }
//     }
//     return res;
// }

// function whatNumberIsIt(n){
//     let res = '';
//     switch (n) {
//         case Number.POSITIVE_INFINITY:
//             res = 'Number.POSITIVE_INFINITY'
//             break;
//         case Number.NEGATIVE_INFINITY:
//             res = 'Number.NEGATIVE_INFINITY'
//             break;
//         case Number.MAX_VALUE:
//             res = 'Number.MAX_VALUE'
//             break;
//         case Number.MIN_VALUE:
//             res = 'Number.MIN_VALUE'
//             break;
//         default:
//             res = n;
//             break;
//     }

//     if (isNaN(n)) res = 'Number.NaN';
//     return `Input number is ${res}`
// }

// function colorOf(r,g,b){
//     let newR = r.toString(16).length < 2 ? '0' + r.toString(16) : r.toString(16)
//     let newG = g.toString(16).length < 2 ? '0' + g.toString(16) : g.toString(16)
//     let newB = b.toString(16).length < 2 ? '0' + b.toString(16) : b.toString(16)
//     return `#${newR}${newG}${newB}`
// }


// function howManySmaller(arr,n){
//     arr = arr.map(el => el = +el.toFixed(2))
//     let counter = 0;
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i] < n) {
//             counter++
//         }
//     }
//     return counter;
// }

// let cutIt = a => {
//     let MIN_LENGTH = 0;
//     for (let i of a) {
//         if (MIN_LENGTH === 0) MIN_LENGTH = i.length;
//         if (MIN_LENGTH > 0 && i.length < MIN_LENGTH) MIN_LENGTH = i.length;
//     }
//     return a.map(el => el.slice(0, MIN_LENGTH))
// }

// let firstToLast = (str, c) => {
//     let regex = new RegExp(c, 'g')
//     let matches = str.match(regex) || [];

//     if (matches.length === 1) {
//         return 0; 
//     } else if (matches.length > 1) {
//         return str.lastIndexOf(c) - str.indexOf(c)
//     } else if (matches.length === 0) {
//         return str.search(c)
//     }
// }

// let firstToLast = (str, c) => {
//     let first = str.indexOf(c), last = str.lastIndexOf(c)
//     return first == -1 ? first : last - first
// }

// let f = (str, sep) => {
//     return str.split(" ").map(el => el.split("").join(sep)).join(" ")
// }

// let alienLanguage = str =>
//     str.split(" ").map(el => el.slice(0, el.length - 1).toUpperCase()+el[el.length - 1].toLowerCase()).join(" ")

// function topSecret(str){
//     let chars = str.split("");
//     let Z = 'Z'.charCodeAt(0), z = 'z'.charCodeAt(0);
//     for (let i = 0; i < chars.length; i++) {
//         chars[i] = chars[i].replace(/[a-zA-Z]/g, el => 
//             String.fromCharCode(
//                 el.charCodeAt() === 65 ? Z - 2 : 
//                 el.charCodeAt() === 66 ? Z - 1 :
//                 el.charCodeAt() === 67 ? Z :
//                 el.charCodeAt() === 97 ? z - 2 :
//                 el.charCodeAt() === 98 ? z - 1 :
//                 el.charCodeAt() === 99 ? z :
//                 el.charCodeAt() - 3
//                 ))
//     }
//     return chars.join("")
// }


// let fiveLine = s => {
//     let res = s.trim();
//     for (let i = 1; i < 5; i++) {
//         res += '\n' + s.trim().repeat(i + 1);
//     }
//     return res;
// }

// let shuffleIt = (arr, ...numerics) => {   
//     let res = [...arr];
//     numerics.forEach(([el1, el2]) => {[res[el1], res[el2]] = [res[el2], res[el1]]})
//     return res;
// }

// let f = (arr, d, num) => {
//     arr.forEach((el, ind, arr) => {
//         if (ind === 0 && d === 'right') {
//             let innnerArr = arr.filter((el, ind) => ind === arr.length - 1).flat()
//             el.unshift(innnerArr[innnerArr.length - 1])
//         } else if (ind === arr.length - 1 && d === 'left') {
//             let innnerArr = arr.filter((el, ind) => ind === 0).flat()
//             console.log(innnerArr);
//             el.push(innnerArr[0])
//         }
//         // d === 'left' ? el.push(arr[ind + 1][0]) : el. 
//         // d === 'left' ? el.shift() : el.pop()
//     })
//     console.log(arr);
// }

// console.log(f([[1, 2], [3, 4]], 'left', 1));

// let threeInOne = (arr) => {
//     let copy = [...arr];
//     let res = [];
//     for (let i = 0; i < copy.length; i+=3) {
//         let a = copy.splice(i, i + 3)
//         res.push((a.reduce((pr, curr) => pr + curr)));
//         i-=3;
//     }
//     console.log(copy, arr);
//     return res;
// }

let sorting = arr => {
    let copy = [...arr];
    copy.sort((a,b) => {
        let na = 0; nb = 0;
        for (let i of arr) {
            if (i == a) na++; 
            if (i == b) nb++; 
        }
        if (na > nb) return 1;
        if (na < nb) return -1;
        if (na == nb) return b-a; //if the same amount, the largest value is returned first
    })
    return copy;
}

// let isolateIt = arr => {
//     let res = arr.map(el => {
//         return el.slice(0, el.length / 2) + '|' + el.slice(Math.ceil(el.length / 2), el.length);
//     })
//     return res;
// }

// let countGrade = arr => {
//     let grades = {S:0, A:0, B:0, C:0, D:0, X:0}
//     arr.filter(el => { 
//         switch (true) {
//             case el == 100:
//                 grades.S++;
//                 break;
//             case el < 100 && el >= 90:
//                 grades.A++;
//                 break;
//             case el < 90 && el >= 80:
//                 grades.B++;
//                 break;
//             case el < 80 && el >= 60:
//                 grades.C++;
//                 break;
//             case el < 60 && el >= 0:
//                 grades.D++;
//                 break;
//             default:
//                 grades.X++
//                 break;
//         }
//     })
//     return grades;
// }

// let mirrorImage = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === Number(String(arr[i+1]).split('').reverse().join(''))) {
//             return [arr[i], arr[i + 1]]
//         }
//     }
//     return [-1, -1]
// }

// let bigToSmall = arr => [].concat(...arr).sort((a,b) => b-a).join('>');

// const tailAndHead = arr => {
//     let res = [];
//     let sums = [];
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         if (i == 0) res.push(+String(el).charAt(String(el).length -1));
//         if (i > 0 && i < arr.length - 1) {
//             if (el < 10) {
//                 res.push(+String(el).charAt(0), +String(el).charAt(0))
//             } else {
//                 res.push(+String(el).charAt(0), +String(el).charAt(String(el).length -1))
//             }
//         }
//         if (i === arr.length - 1)  res.push(+String(el).charAt(0));
//     }
//     console.log(res);
//     for (let i = 0; i < res.length; i+=2) {
//         sums.push(res[i] + res[i+1]);
//     }
//     console.log(sums);
//     return sums.reduce((a,b) => a*b)
// }

// let doMath = str => {
//     let copy = str.slice().split(" ").sort((a, b) => {
//         const sortedA = a.split("").sort((x, y) => y.charCodeAt(0) - x.charCodeAt(0)).join("")[0];
//         const sortedB = b.split("").sort((x, y) => y.charCodeAt(0) - x.charCodeAt(0)).join("")[0];
//         return sortedA.localeCompare(sortedB)
//     }).map(el => el.replace(/[a-zA-Z]/g, ""));

//     if (copy.length === 1) {
//         return +copy
//     }
    
//     const signs = ['+', '-', '*', '/'];
//     let signCount = 1;
//     let res = eval(copy[0] + signs[0] + copy[1]);

//     for (let i = 2; i < copy.length; i++) {
//         const el = copy[i];
//         console.log(el, res);
//         res = eval(res+signs[signCount]+el);
//         signCount++;
//         if (signCount === signs.length) {
//             signCount = 0
//         }
//     }

//     return Math.round(res);
// }

// let blackAndWhite = arr => {
//     if (!Array.isArray(arr)) return "It's a fake array";
//     return arr.filter(el => el === 5).length && arr.filter(el => el === 13).length ? "It's a black array" : "It's a white array";
// }

// let roundIt = num => {
//     let str = num.toString();
//     console.log(str.indexOf('.'));
//     switch (true) {
//         case str.indexOf('.') < (str.length - 1) / 2:
//             return Math.ceil(num);
//         case str.indexOf('.') > (str.length - 1) / 2:
//             return Math.floor(num)
//         default:
//             return Math.round(num);
//     }
// }

// const maxMin = (arr1, arr2) => {
//     let res = [];
//     for (let i = 0; i < arr2.length; i++) {
//         res.push(Math.abs(arr2[i] - arr1[i]))
//     }
//     return [Math.max(...res), Math.min(...res)]
// }

// const cutCube = (v, n) => {
//     if (Number.isInteger(Math.cbrt(n))) {
//         return Number.isInteger(Math.cbrt(v/n))
//     } else {
//         return false
//     }
// }

const rndCode = () => {
    let res = '';
    const chars = 'ABCDEFGHIJKLM', symbols = '~!@#$%^&*', numbers = '0123456789';
    for (let i = 0; i < 2; i++) {
        res += chars[~~(chars.length*Math.random())]
    }
    for (let i = 0; i < 4; i++) {
        res += numbers[~~(numbers.length*Math.random())]
    }
    for (let i = 0; i < 2; i++) {
        res += symbols[~~(symbols.length*Math.random())]
    }
    return res;
}

// const countAnimals = (s, a) => {
//     let res = [];
//     for (let i = 0; i < a.length; i++) {
//         const reg = new RegExp(a[i], 'g');
//         res.push((s.match(reg) || []).length);
//     }
//     return res;
// }

// const findSimilarity = (str, word) => {
//     let regex = new RegExp('^'+word[0]+word.slice(1, -1).replace(/./g, '.')+word.slice(-1)+'$');
//     return str.split(" ").filter(el => regex.test(el))
// }

// findSimilarity("bag dog dig dot doog dogs","dot")

// var regex=/htt(p|ps):\/\/[a-z0-9\.]*\.(com|net)/gi;
// console.log("1234http://www.codewars.comabcd".match(regex));

// const persistence = num => {
//     if (num < 10) return 0;
//     const reducer = n => String(n).split('').map(el => +el).reduce((a, b) => a*b);
//     let res = reducer(num);
//     let counter = 1;
//     while (res >= 10) {
//         res = reducer(res);
//         counter++;
//     }
//     return counter;
// }

// const filter_list = l => l.filter(el => typeof el !== 'string')

// function filter_list(l) {
//     let res = [];

//     for (let i = 0; i < l.length; i++) {
//         if (typeof l[i] === 'number') {
//             res.length === 0 ? res[0] = l[i] : res[res.length] = l[i]
//         }
        
//     }
//     console.log(res);
// }

// let f = (str1, str2) => {
//     let res = '';
//     for (let i = 0; i < str1.length; i++) {
//         str1[i] === str2[i] ? res += str1[i] : res += 0
//     }
//     return res;
// }

// let f = n => Math.ceil(n/8)*5

// let additionWithoutCarrying = (n1, n2) => {
//     let str1 = String(n1), str2 = String(n2);
//     const maxLngth = Math.max(str1.length, str2.length);
//     if (str1.length < maxLngth) str1 = str1.padStart(maxLngth, '0');
//     if (str2.length < maxLngth) str2 = str2.padStart(maxLngth, '0');

//     let res = '';
//     for (let i = 0; i < str1.length; i++) {
//         res += (eval(`${str1[i]} + ${str2[i]}`))%10
//     }
//     return +res;
// }

// let factors = (integer, limit) => {
//     let res = [];
//     if (integer < limit) return [];
//     let counter = integer;
//     while (counter >= limit) {
//         if (integer % counter === 0) res.push(counter);
//         counter--;
//     }
//     return res.sort((a, b) => a-b);
// }


// let f = arr => parseInt(arr.join(""), 2)

// const uniteUnique = (...arr) => [...new Set(arr.flat())]

// function SubstringTest(str1, str2) {
//   let regex = new RegExp('['+ str2 + ']', 'i')
    
//     if (str2.length > 1) {    
//         for (let i = 0; i < str1.length; i++) {
//             if (regex.test(str1[i]) && str1[i+1] !== undefined && regex.test(str1[i+1])) {
//                 console.log(str1[i]);
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(SubstringTest("gsdgdiushhugiuhuihuguhsuhguiUDUSUHguhuusUGHUHSUGUHUIHHUIGUHIDSUHIGUHSDHUDGUHGSHgsuhiDS","is"));


// let sortAnimal = animals => {
//     let res = animals.slice().sort((a, b) => {
//         if (a.numberOfLegs === b.numberOfLegs) {
//             return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
//         }
//         return a.numberOfLegs - b.numberOfLegs
//     })
//     return res
// }

// console.log(sortAnimal([
//     { name: "Centipede", numberOfLegs: 100 },
//       { name: "Snail", numberOfLegs: 0 },
//       { name: "Lizard", numberOfLegs: 4 },
//       { name: "Dog", numberOfLegs: 4 },
//       { name: "Human", numberOfLegs: 2 },
//       { name: "Bird", numberOfLegs: 2 }
//   ]));

// let toDayOfYear = (date) => {
//     const [day, month, year] = date;
//     let res = 0;
//     for (let i = 1; i < month; i++) {
//         switch (true) {
//             case i === month && i === 1:
//                 res += day;
//                 break;

//             case i === 1 && i !== month:
//             case i === 3:
//             case i === 5:
//             case i === 7:
//             case i === 8:
//             case i === 10:
//             case i === 12:
//                 res += 31
//                 break;
            
//             case i === 4:
//             case i === 6:
//             case i === 9:
//             case i === 11:
//                 res += 30
//                 break;
            
//             case i === 2 && year % 4 === 0 && year % 100 !== 0:
//             case i === 2 && year % 4 === 0 && year % 100 === 0 && year % 400 === 0:
//                 res += 29
//                 break;

//             default:
//                 res += 28
//                 break;
//         }
        
//         console.log(i, res);

//         // // if (i % 2 !== 0) {
//         // //     res += 31
//         // // }
//         // // if (i % 2 === 0 && i !== 2) {
//         // //     res += 30
//         // // }
//         // // if (i === 2) {
//         // //     if (year % 4 === 0 && (year % 400 === 0 && year % 100 === 0)) {
//         // //         res+=29
//         // //     } else {
//         // //         res+=28
//         // //     }
//         // // }
//         // console.log(res);
//     }
//     return res + day
// }

// console.log(toDayOfYear([5, 11, 1604]));

// const hotpo = n => {
//     let counter = 0;
//     while (true) {
//         if (n === 1) {
//             break;
//         }
//         n % 2 === 0 ? n = n / 2 : n = (n*3) + 1
//         counter++; 
//     }
//     return counter;
// }

// console.log(hotpo(23));

// const arrayOperations = (a, k) => {
//     let res = a.slice()
//     for (let i = 0; i < k; i++) {
//         let maxVal = Math.max.apply(null, res);
//         res = res.map(el => maxVal - el); 
//     }
//     return res;
// }

// console.log(arrayOperations([-1], 100000));

// const premierLeagueStandings = tS => {
//     let res = Object.entries(tS).map(el => el.map((i, ind) => ind==0 ? +i : i)).sort((a, b) => {
//         if (a[0] === 1 || b[0] === 1) {
//             return 1
//         }

//         if (a[1] > b[1]) {
//             return 1
//         } else {
//             return -1
//         }
//     }).map((el, ind) => [el[0] = ind+1, el[1]])


    
//     return Object.fromEntries(res)
//     console.log(Object.fromEntries(res));
// }

// premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'})

// const strangeCoach = arr => {
//     let res = '';
//     for (let i = 0; i < arr.length; i++) {
//         let counter = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i][0] === arr[j][0]) {
//                 counter++;
//             }    
            
//         }

//         if (counter > 5) {
//             res += arr[i][0]
//         }

//         console.log(res);
        
//     }
    
//     return res === '' ? "forfeit" : [...new Set(res)].join("");
// }

// console.log(strangeCoach(["hzoldbtfwp","bgnzhlemwhet","klhhaasyastv","khfoptbfo","slflh","ilxtogqir","tsq","gusbfmfhbodcf","giwzo","gkoulffpqf","iekcddmwqahqcd","drgsojkoaxywdd","ijkudsztz","bilyyqucw","gzojws","ytkzeokbuz","izvy","mcxvugnjeioqjz","hnenvzeqairsuro","isawfa","epumxoweauj","idgoms","gmvbjuimetowyf","wfqawmeybpizibm","iygrntofnjh","racuukiicvbjmff","xhoti","ajmqpltvnxkub","bbamktdz","arjjzmihdvufhw","ifoehcyxiitjrrn","bvdvbibc","btzgg","ruayecykzusd","gehpmntdnsjczku","roceahlu","syhzdpyy","bzksqxwjckmd","gufxbh"]));

// const nicknameGenerator = s => {
//     if (s.length < 4) return "Error: Name too short";
//     return (!!s[1].match(/[aeiou]/i) && !!s[2].match(/[^aeiou]/i)) || !!s[2].match(/[^aeiou]/i) ? s.slice(0, 3) : s.slice(0, 4) 
// } 

// console.log(nicknameGenerator("Jett"));
// console.log('kkkk'.match(/[^aeiou]/i));
// console.log('aeiou'.includes('a'));

// const getNewNotes = (s, b) => b.reduce((pr, cur) => {return pr - cur}, s)/5
// console.log(getNewNotes(2000, [500, 160, 400]));

// let f = l => {
//     l = l.split('').sort().join('');
//     let res = false;
//     if (l.length === 1) return true;
//     for (let i = 0; i < l.length; i++) {
//         let char = l[i].charCodeAt(0);
//         if (i === 0) {
//             if (char+1 === l[i+1].charCodeAt(0)) {
//                 res = true
//             } else {
//                 return false;
//             }
//         }
//         if (i > 0 && i < l.length - 1) {
//             if (char-1 === l[i-1].charCodeAt(0) && char+1 === l[i+1].charCodeAt(0)) {
//                 res = true;
//             } else {
//                 return false;
//             }
//         }
//         if (i === l.length - 1) {
//             if (char-1 === l[i-1].charCodeAt(0)) {
//                 res = true
//             } else {
//                 return false;
//             }
//         }
//     }
//     return res;
// }

// const solve = s => 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))

// const lateRide = n => {
//     let res = '';
//     let hours = Math.floor(n / 60);
//     let minutes = n - hours * 60;

//     res += hours < 10 ? '0' + hours : hours;
//     res += minutes < 10 ? '0' + minutes : minutes;

//     return res.split("").reduce((pr, curr) => +pr + +curr)
// }
// console.log(lateRide(1440));

// const sortByLength = arr => {
//     return arr.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(["Beg", "Life", "I", "To"]));


// function evenNumbers(array, number) {
//     let res = array.filter(el => el%2===0).reverse()
//     res.length = number;
//     return res.reverse()
// }

// const reverseLetter = s => s.replace(/[^a-z]/g, '').split("").reverse("").join("")

// const f = arr => {
//     let res = 0;
//     let ls = arr.filter(el => el === 'left'), rs = arr.filter(el => el === 'right')
//     res -= ls.length * 90
//     res += rs.length * 90

//     console.log(res);
//     return Math.abs(res)/360
// }
// console.log(f(["right", "right", "right", "right", "right", "right", "right", "right"]));

// const adjacentElementsProduct = arr => {
//     let maxVal = arr[0] * arr[1];
//     for (let i = 1; i < arr.length - 1; i++) {
//         let res = arr[i] * arr[i+1];
//         res > maxVal ? maxVal = res : maxVal = maxVal
//     }
//     return maxVal;
// }
// console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));

// const findTimeToBreak = (bA, bB) => {
//     let sortedAngles = [bA, bB].sort((a, b) => b - a)
//     let [newA, newB] = sortedAngles;
//     console.log(newA, newB);
//     if (Math.abs(newA - newB) === 180) {
//         return +(20*60/90).toFixed(2);
//     } else if (newA - newB === 0) {
//         return Infinity;
//     } else {
//         let angle = 0;

//         if (newA - newB < 180) {
//             angle = newA - newB;
//         } else if (newA - newB > 180) {
//             angle = 360 - newA + newB
//         }

//         console.log(angle);

//         let radianA = ((180 - angle)/2) * Math.PI/180;
//         let radianB = angle * Math.PI/180;

//         let side = (40 * Math.sin(radianA)/Math.sin(radianB))
//         return +(side * 60 / 90).toFixed(2)
//     }
// }

// console.log(findTimeToBreak(270,90));

// const rem = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 console.log(arr[i], "=", arr[j]);
//                 arr.splice(i, 1)
//                 i--;
//             }
//         }
//     }
//     return arr
// }

// console.log(rem([3, 4, 4, 3, 6, 3]));

// let players = ["ptlukrvjlgxi","gttpf","ggbljibbzmialzw","mirz","mbclomkbza","qeewcnlt","gjokqg","mupvgndgeqqrttu","gkgmwavnji","mldaadyhvfz","glpwutcppdpig","wpbsgldv","rdvpzfxouilx","rpfgljnpgfnkmb","rpbbxsfpjbelt"]

// const strangeCoach = arr => {
//     let res = '';
//     for (let i = 0; i < arr.length; i++) {
//         let counter = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i][0] === arr[j][0]) {
//                 counter++;
//             }    
//         }
//         if (counter >= 5) {
//             res+=arr[i][0]
//         }
//     }
//     return res === '' ? "forfeit" : [...new Set(res)].join("");
// }
// console.log(strangeCoach(players));

// const trouble = (a, t) => {    
//     for (let i = 0; i < a.length - 1; i++) {
//         if (a[i] + a[i+1] === t) {
//             a.splice(i+1, 1)
//             i--;
//         }
//     }
//     return a
// }
// console.log(trouble([1, 3, 5, 6, 7, 4, 3],7));

// function nextPrime(n){
//     let res = ++n;
//     while (true) {
//       if (res >= 4 && res % 2 !== 0 && res % 3 !== 0) {
//         return res
//       } else if (res > 1 && res <=3) {
//         return res
//       }
//       res++
//     }
// }
// console.log(nextPrime(2971));

// const common = (arr1, arr2, arr3) => {
//     let res = 0;
//     let nums = {};

//     function addToNums(arr) {
//         for (let num of arr) {
//             nums[num] = (nums[num] || 0) + 1;
//         }
//     }

//     addToNums(arr1)
//     addToNums(arr2)
//     addToNums(arr3)

//     for (const key in nums) {
//         if (nums[key] >= 3) {
//             res += key * nums[key]/3
//         }
//     }

//     console.log(nums);
//     return res;
// }

// console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));

// const a = arr => {
//     let f = arr.at(0), l = arr.at(-1);
//     arr[0] = l; arr[arr.length-1] = f;
//     return arr;
// }

// console.log(a([1,2,3,4,5]));

// const counterEffect = s => {
//     let res = [];
//     for (const el of s) {
//         console.log(el);
//         let arr = [], counter = 0;
//         while (counter <= +el) {
//             arr.push(counter);
//             counter++;
//         }
//         res.push(arr);
//     }
//     return res;
// }

// console.log(counterEffect('1250'));

// function whoseMove(lastPlayer, win) {

//     if (lastPlayer === 'white') {
//         if (win) {
//             return 'white';
//         } else {
//             return 'black';
//         }
//     } else if (lastPlayer === 'black') {
//         if (win) {
//             return 'black';
//         } else {
//             return 'white';
//         }
//     }
// }

const isPrime = num => {
    if (num < 2) return false;
    let root = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
            return false;
        }   
    }
    return true;
}


const nextPrime = num => {
    let res = num+1;
    while (true) {
        if (res < 2) res++;
        const root = Math.floor(Math.sqrt(res))
        let isPrime = true;
        for (let i = 2; i <= root; i++) {
            if (res % i === 0) {
                isPrime = false;
                break;
            } 
        }
        if (isPrime) {
            return res;
        } else {
            res++;
        }
    }
}

// console.log(nextPrime(2971));

// const odd = str => {
//     let n = str.replace(/[^od]/gi, "").split("");

//     let counter = 0;
//     let odd = '';

//     for (let i = 0; i < n.length; i++) {
//         const el = n[i];
//         if (odd.length == 0 && el == 'o') {
//             n.splice(i, 1)
//             odd+='o'
//             i--;
//         }

//         if (odd.length>=1 && el == 'd') {
//             n.splice(i, 1)
//             odd+='d'
//             i--;
//             if (odd == 'odd') {
//                 counter++;
//                 odd = '';
//                 i--;
//             }
//         }
//     }
//     return counter;
// }
// console.log(odd("qoddoldfoodgodnooofostorodrnvdmddddeidfoi"));


const coffeeLimits = (y, m, d) => {
    let h = +`${y}${m<10?'0':""}${m}${d<10?'0':""}${d}`

    console.log(h);


}

// const keysAndValues = obj => {
//     let keys = [], values = [];
//     for (const key in obj) {
//         keys.push(key);
//         values.push(obj[keys]);
//     }
//     return [keys, values]
// }

// function sortList (sortBy, list) {
//     return list.sort((a, b) => {
//         return b[sortBy] - a[sortBy] 
//     })
// }

// console.log(sortList('a', [
//     {"a": 1, "b": 3},
//     {"a": 3, "b": 2},
//     {"a": 2, "b": 40},
//     {"a": 4, "b": 12}
//   ]));


// var Counter = function() {
//     this.val = Number(0)
//     this.valueOf = function() {
//         return Number(this.val)
//     }
//     this.incr = function() {
//         this.val = this.val + 1
//     }
// }


// let coun = new Counter()
// coun.incr()
// console.log(coun == 1);



// const oneTwoThree = n => {
//     if (n == 0) return ['0', '0'] 
//     let right = ''.padEnd(n, '1');

//     let left = '';
//     if (n < 10) {
//         left = String(n)
//     } else if (n >= 10) {
//         let nines = ''.padEnd(+String(n).slice(0, -1), '9');
//         let hunds = n >= 100 ? +String(n)[0] : 0;
//         let modifiedN = String(n);
//         let counter = -1;
//         while (modifiedN.length > 1) {
//             modifiedN = String(modifiedN.split("").reduce((pr, curr) => +pr + +curr));
//             counter++;
//         }
//         left = nines + "".padEnd(hunds, '9') + "".padEnd(counter, '9') + modifiedN;
//     }
    

//     return [left, right];
// }
// console.log(oneTwoThree(19));

// const explode = arr => {
//     if (typeof arr[0] === 'string' && typeof arr[1] === 'string') return 'Void!';
//     let score = 0;
//     let res = [];
//     if (typeof arr[0] === 'number' && typeof arr[1] === 'number') {
//         score = arr.reduce((pr, cur) => pr+cur)
//     } else if (typeof arr[0] === 'number' || typeof arr[1] === 'number') {
//         score = typeof arr[0] === 'number' ? arr[0] : arr[1];
//     }
    
//     for (let i = 0; i < score; i++) {
//         res.push(arr)
//     }
//     return res;
// }

// console.log(explode([2, 2]));


// const f = (arr) => {
//     let counter = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if ((arr[i] < 0 && arr[i+1] >= 0) || (arr[i] >= 0 && arr[i+1] < 0)) {
//             counter+=1
//         } 
//     }
//     return counter;
// }

// console.log(f([-47,84,-30,-11,-5,74,77]));

// const f = arr => arr.map(el => Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : Math.pow(el, 2))
// console.log(f([4,3,9,7,2,1]));

// const ipsBetween = (start, end) => {
//     const indexes = [3, 2, 1, 0];
//     let arr1 = start.split('.').map((el, i) => +el*256**indexes[i]).reduce((pr, curr) => pr + curr)
//     let arr2 = end.split('.').map((el, i) => +el*256**indexes[i]).reduce((pr, curr) => pr + curr)

//     return arr2 - arr1
// }
// console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

// const data1 = {
//     id : 1,
//     items : [{
//       id : 2,
//       items : [{
//           id : 3,
//           items : [
//           {id : 4},
//           {id : 5}
//           ]
//         },{
//           id : 6,
//           items : [{id : 7}]
//         }]
//       }]
//   }


// const extractIds = data => {
//     let res = [];
    
//     for (const el of Object.values(data)) {
//         if (!(Array.isArray(el))) {
//             res.push(el)
//         } else if (Array.isArray(el)) {
//             for (const i of el) {
//                 res.push(...extractIds(i))
//             }
//         }
//     }

//    return res;
// }

// console.log(extractIds(data1));

// const parseNumbers = a => a.map(el =>{ console.log(el); return +el < 0 ? Math.ceil(+el) : Math.floor(+el)})

// const parseNumbers=a=>a.map(el=>parseInt(el))
// console.log(parseNumbers(['-1','0','1']));

// const spinWords = s => {
//     return s.split(" ").map(el => el.length > 4 ? el.split("").reverse().join("") : el).join(" ")
// }

// console.log(spinWords("Seriously this is the last one"));

// const f = arr => {
//     let res ={};
//     for (const i of arr) {
//         res[i] = (res[i] || 0) + 1;
//     }
//     for (const i in res) {
//         if (res[i] % 2 != 0) return +i;
//     }
// }
// console.log(f([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


// const likes = n => {
//     const phS = 'likes this', phP = 'like this';
//     if (n.length == 0) return 'no one '+phS;
//     if (n.length == 1) return `${n[0]} ${phS}`;
//     if (n.length == 2) return `${n[0]} and ${n[1]} ${phP}`;
//     if (n.length == 3) return `${n[0]}, ${n[1]} and ${n[2]} ${phP}`;
//     if (n.length >= 4) return `${n[0]}, ${n[1]} and ${n.length - 2} others ${phP}`;
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max", 'vlad']));

// const createPhoneNumber = n => {
//     let f = '', s ='', t='';
//     for (let i = 0; i < n.length; i++) {
//         if (i <= 3) f += n[i];
//         if (i > 3 && i <= 6) s += n[i];
//         if (i > 6) t += n[i];
        
//     }

//     return `(${f}) ${s}-${t}`;
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// const f = s => {
//     let res = {};
//     let counter = 0;
//     let arr = s.toLowerCase().split("");
//     for (let i of arr) {
//         res[i] ? res[i]++ : res[i] = 1;
//     }
//     Object.values(res).forEach(el => {
//         if (el>=2) counter++;
//     })
//     return counter;
// }

// console.log(f('abcde'));

// const isValidWalk = a => {
//     if (a.length !== 10) return false;
//     let d = 0;
//     for (let el of a) {
//       switch(el) {
//           case 'n': d++; break;
//           case 's': d--; break;
//           case 'e': d+=2; break;
//           case 'w': d-=2; break;
//       }
//       console.log(d);
//     }
//     return d==0 ? true : false
// }

// const alphabetPosition = s => s.toLowerCase().replace(/[^a-z]/gi, "").split("").map(el => el.charCodeAt(0)-96).join(" ")
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// const duplicateEncode = (s) => {
//     let newS = s.toLowerCase().split("")
//     return newS.map(el => newS.filter(i => i == el).length == 1 ? '(' : ')').join("")
// }