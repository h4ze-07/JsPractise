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


// const solve = a => {
//     let res = [];
//     for (let i = 0; i < a.length-1; i++) {
//         let counter = 0;
//         for (let j = i+1; j < a.length; j++) {
//             if (a[i] > a[j]) {
//                 counter++
//             }
//         }
//         if (counter === a.length-(i+1)) {
//             res.push(a[i])
//         }
//     }
//     return res.concat(a.at(-1))
//     return [...new Set(res.concat(a.at(-1)))]
// }

// console.log(solve([75,47,42,56,13,55]));

// const strongEnough = (earthquake, age) => {
//     const strength = earthquake.map(el => el.reduce((a, b) => a + b)).reduce((a, b) => a*b);
//     let hp = 1000;
//     for (let i = 0; i < age; i++) {
//         hp = hp - 0.01*hp;
//     }
//     return hp - strength >= 0 ? "Safe!" : "Needs Reinforcement!";
// }

// console.log(strongEnough([[ 5, 8, 7 ], [ 3, 3, 1 ], [ 4, 1, 2 ]], 100));

// const f = s => s === Array.from(new Set(s)).join``
// console.log(f('Dermatoglyphics'));

// console.log(Number.isInteger(Math.sqrt(26)));

// const XO = s => {
//     let letters = {'x': 0, 'o': 0};

//     for (let i of s.toLowerCase()) {
//         if (i in letters) letters[i]++;
//     }

//     return letters.x == letters.o
// }

// s.split(" ").map(el => el[0].toUpperCase()).join` `

// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(el => el[0].toUpperCase()+el.substring(1)).join` `
// };

// const f = s => s.split(" ").sort((a, b) => a.length - b.length)[0].length;
// f("bitcoin take over the world maybe who knows perhaps")

// const f = s => {
//     let newS = '';
//     for (let i of s) {
//         if (i == 'A') {
//             newS += i.replace(/A/gi, 'T')
//         } else if (i == 'T') {
//             newS += i.replace(/T/gi, 'A')
//         } else if (i == 'G') {
//             newS += i.replace(/G/gi, 'C')
//         } else if (i == 'C') {
//             newS += i.replace(/C/gi, 'G')
//         }
//     }
//     return newS;
// };

// console.log(f('GTATA'));

// const sumTwoSmallestNumbers = a => {
//     let newA = a.toSorted((a,b) => a -b);
//     return newA[0]+newA[1]
// }
// f([5, 8, 12, 19, 22])

// const maskify = s => {
//     if (s.length <= 4) return s;
//     return s.slice(0,-4).replace(/./gi, '#') + s.slice(-4);
// }
// console.log(maskify('qwert'));

// function getSum(a, b) {
//     let res = [];
//     while (a <= b) {
//         res.push(a)
//         a++;
//     }
//     return res.reduce((a,b) => a+b) || 0
// }

// console.log(getSum(0, 1));

// const longest = (a, b = '') => Array.from(new Set(a.concat(b))).sort().join``

// const f = s => 
//     s.split(/[_-]/gi).map((el, ind) => {
//         if (ind==0) {
//             return el
//         } else if (ind >= 1) {
//             return el[0].toUpperCase() + el.slice(1)
//         }
//     }).join``

// f("The-stealth_warrior")

// const f = s => {
//     let newS = '';
//     for (let i of s) {
//         const num = Math.round(Math.random())
//         newS += num == 0 ? i.toLowerCase() : i.toUpperCase()
//     }
//     return newS
// }

// f('Held')


// const digitalRoot = n => {
//     let res = +String(n).split``.reduce((a,b) => +a + +b);
//     return res < 10 ? res : digitalRoot(res);
// }

// const f = s => s.split(" ").sort((a,b) => parseInt(a.split``.sort()) - parseInt(b.split``.sort()));

// console.log(f('is2 Thi1s T4est 3a'));

// console.log('is2'.split``.sort());

// const f = n => {
//     let newA = [], arr = Array.isArray(n) ? [...n] : n.split``;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i-1]) {
//             continue;
//         }
//         newA.push(arr[i]);
//     }

//     console.log(newA);
// }
// f([1,2,2,3])

// const decodeMorse = code => {
//     const ref = { 
//         '.-':     'a',
//         '-...':   'b',
//         '-.-.':   'c',
//         '-..':    'd',
//         '.':      'e',
//         '..-.':   'f',
//         '--.':    'g',
//         '....':   'h',
//         '..':     'i',
//         '.---':   'j',
//         '-.-':    'k',
//         '.-..':   'l',
//         '--':     'm',
//         '-.':     'n',
//         '---':    'o',
//         '.--.':   'p',
//         '--.-':   'q',
//         '.-.':    'r',
//         '...':    's',
//         '-':      't',
//         '..-':    'u',
//         '...-':   'v',
//         '.--':    'w',
//         '-..-':   'x',
//         '-.--':   'y',
//         '--..':   'z',
//         '.----':  '1',
//         '..---':  '2',
//         '...--':  '3',
//         '....-':  '4',
//         '.....':  '5',
//         '-....':  '6',
//         '--...':  '7',
//         '---..':  '8',
//         '----.':  '9',
//         '-----':  '0',
//       };

//       return code.split('   ').map(el => {
//         return el.split(" ").map(i => ref[i]).join``
//       }).join` `.trim()
// }

// // const decodeMorse = code => {
// //     return code.split('   ').map(el => {
// //       return el.split(" ").map(i => MORSE_CODE[i]).join``
// //     }).join` `.trim()
// // }

// decodeMorse('...---...')

// const sort = a => {
//     let odd = [], even = [];
//     for (let i = 0; i < a.length; i++) {
//         const el = a[i];
//         if (el%2!==0) {
//             odd.push([`${i}`, `${el}`])
//         } else {
//             even.push([`${i}`, `${el}`])
//         }
//     }

//     let objE = Object.fromEntries(even);
//     let objO = Object.fromEntries(odd);
//     let sortedOdd = Object.values(objO).sort((a,b) => a-b);

//     let count = 0;
//     for (let key in objO) {
//         objO[key] = sortedOdd[count]
//         count++;
//     }

//     let obj = Object.assign(objE, objO);
//     return Object.entries(obj).map(el => +el[1]);

    
// }

// const sort = a => {
//     const odd = a.filter(el => el % 2 !== 0).sort((a,b) => a-b);
//     return a.map(el => el % 2 !== 0 ? odd.shift() : el);
// }

// sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

// const findMissingLetter = a => {
//     for (let i = 0; i < a.length-1; i++) {
//         const char = a[i].charCodeAt(0);
//         const nextChar = a[i+1].charCodeAt(0) || 0;
//         if (nextChar - char !== 1) {
//             return String.fromCharCode(char+1)
//         }
//     }
// }

// console.log(findMissingLetter(['a','b','c','d','f']));


// const f = s => {
//     let count = 0;
//     s.replace(/[n-z]/gi, () => count++);
//     return `${count}/${s.length}`;
// }
// f('aaaxbbbbyyhwawiwjjjwwm')

// const f = (p0, per, aug, p) => {
//     let counter = 1;
//     while (p0 < p) {
//         p0 = p0 + p0 * (per/100) + aug;
//         console.log(p0);

//         counter++;
//     }
//     return counter-1;
// }

// console.log(f(1500000, 2.5, 10000, 2000000));

// const f = a => {
//     if (a.length == 1) return [a[0], a[0]];
//     const arr = a.sort((a,b)=>a-b);
//     return [a[0], a[a.length-1]]
// }


// const uglify_word = s => {
//     let flag = 1;
//     let newS = '';
//     for (let el of s) {
//         if (el.match(/[a-zA-Z]/g)) {
//             if (flag % 2 !== 0) {
//                 newS += el.toUpperCase();
//                 flag++;
//             } else {
//                 newS += el.toLowerCase();
//                 flag++;
//             }
//         } else {
//             newS += el;
//             flag = 1;
//         }
//     }
//     return newS;
// }

// console.log(uglify_word('Hello World'));

// const f = n => {
//     let newN = 0, strFromN = ""+n;
//     for (let el of strFromN) {
//         newN += Math.pow(+el ,strFromN.length)
//     }
//     return n === +newN;
// }

// console.log(f(122));


// const findUniq = a => {
//     const arrFrSet = Array.from(new Set([...a]));
//     for (let el of arrFrSet) {
//         let len = a.filter(i => i === el).length;
//         if (len === 1) {
//             return el;
//         }
//     }
// }

// console.log(findUniq([ 3, 10, 3, 3, 3 ]));

// const high = x => {
//     return x.split` `.sort((a,b) => {
//         let nA = a.split``.map(el => 26 - (122 - el.charCodeAt(0))).reduce((a,b) => a+b)
//         let nB = b.split``.map(el => 26 - (122 - el.charCodeAt(0))).reduce((a,b) => a+b)

//         if (nB > nA) {
//             return 1;
//         } else if (nB < nA) {
//             return -1
//         } else if (nB == nA) {
//             return 0;
//         }
//     })[0] 
// }

// console.log(high('what time are we climbing up the volcano'));


// const isPrime = s => {
//     if (s.toLowerCase().includes('prime')) return true;
//     let n = parseInt(s);
//     if (n < 2) return false;
//     let root = Math.floor(Math.sqrt(n)); 
//     console.log(n, root);
//     for (let i = 2; i <= root; i++) {
//         if (n % i === 0) {
//             return false;
//         } else {
//             return true;
//         }   
//     }
//     return false;
// }

// console.log(isPrime(629));


// const rowSumOddNumbers = n => {
//     if (n <= 1) return 1;
//     let res = 0, 
//         start = n*n - (n-1), 
//         end = n*n + (n-1);
//     for (let i = start; i <= end; i+=2) {
//         res += i;
//     }
//     return res;
// }

// f(3)

// const isThueMorse = seq => {
    

//     let testSeq = '0';

//     for (let i=testSeq.length; i < seq.length * 2; i+=testSeq.length) {
//         let newS = '';
//         for (let el of testSeq) {
//             if (el === '0') newS += '1';
//             if (el === '1') newS += '0';  
//         }
//         testSeq += newS;
//     }

//     for (let i = 0; i < seq.length; i++) {
//         console.log(seq[i], +testSeq[i]);
//         if (seq[i] !== +testSeq[i]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(isThueMorse([0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1]));

// const comp = (arr1, arr2) => {
//     if ((arr1 == null) || (arr2 == null)) return false;
//     if (arr1.length === 0 && arr2.length === 0) return true;
    

//     let newArr = arr2.map(el => Math.sqrt(el));

//     console.log(arr1);

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < newArr.length; j++) {
//             if (arr1[i] === newArr[j]) {
//                 newArr.splice(j, 1)
//                 break;
//             }
//         }
        
//     }

//     console.log(newArr.length);

//     return !(~~newArr.length);
// }

// let a1 = [10, 6, 7, 10, 9, 5, 6, 8, 0, 9, 2, 1, 3, 7, 1, 8, 9, 2, 6, 6, 2, 1, 10];
// let a2 = [49, 36, 81, 49, 81, 36, 4, 36, 1, 4, 25, 1, 100, 9, 4, 100, 1, 81, 64, 36, 64, 100, 1];


// console.log(comp(a1, a2));

// const nextBigger = n => {
//     let arr = (''+n).split``;

//     const fact = n =>  {
//         let res = 1;
//         for (let i = n; i > 0; i--) {
//             res *= i;
//         }
//         return res;
//     }

//     let testValues = [];
//     let indexes = [];

//     for (let  i = 0; i < fact(arr.length); i++) {
//         let newIn = [];
//         for (let j = 0; j < arr.length; j++) {
//             let ind = Math.floor(Math.random() * arr.length);
//             if (newIn.includes(ind)) {
//                 j--;
//                 continue;
//             } else {
//                 newIn.push(ind);
//             }
//         }

//         let newInString = JSON.stringify(newIn);
//         if (indexes.includes(newInString)) {
//             i--;
//         } else {
//             indexes.push(newInString);
//         }
//     }

//     indexes = indexes.map(JSON.parse);

//     for (let i = 0; i < indexes.length; i++) {
//         let builtArr = [];
//         builtArr = indexes[i].map(el => arr[el]).join``;
//         testValues.push(builtArr);
//     }


//     let newN = testValues.map(el => +el).filter(el => el > n).sort((a,b) => a - b)
//     return newN.length == 0 ? -1 : newN[0];
// }

// console.log(nextBigger(144));

// const findNextSquare = n => !Number.isInteger(Math.sqrt(n)) ?  -1 : Math.pow(Math.sqrt(n)+1, 2);
// console.log(findNextSquare(625));

// const number = (busStops) => {
//     return busStops.map(el => el[0] - el[1]).reduce((pr, curr) => pr + curr)
//     console.log(arr);
// }

// number([[10,0],[3,5],[5,8]])

// const someF = s => {
//     return s.split(' ').map(el => el.split('').reverse().join``).join` `;
// }
// console.log(someF('double  spaces'));

// const f = s => {
//     if (s.length % 2 !== 0) s = s += '_';
//     return s.match(/../gi) || [];
// }

// console.log(f(""));

// const f = n => {
//     let res = [];
//     let start = n;
//     let finish = 1;
//     while (finish <= start) {
//         let qS = start*2-1, qP = n - start;
//         let stars = ''.padEnd(qS, '*');
//         let pad = ''.padEnd(qP, " ");
//         res.push(pad + stars + pad)
//         start--;
//     }
//     return res.reverse()
// }

// f(6)

// const f = arr => {
//     let newA = arr.filter(el => (/(:|;)( |-|~|)(\)|D)/gi).test(el));
//     console.log(newA);
//     // console.log(arr.filter(el => (/(:|;)( |-|~)(\)|D)/gi).test(el)).length);   
// }

// f([';]', ':[', ';*', ':$', ';-D'])

// const f = str => {
//     return str.replace(/[A-Z]/g, (m) => ` ${m}`);
// }
// console.log(f('camelCasing'));

// const validatePIN = PIN => {
//     return /([0-9]{4}|[0-9]{6})/.test(PIN)
// }

// console.log(validatePIN('123458'));





// const f = (d, vS, currV) => {
//     let i = vS.indexOf(currV);
//     if (i == -1) return null;
    
//     console.log(i);

//     let res = i + d;
    

//     while (res < 0 || res > vS.length - 1) {
//         if (res > vS.length - 1) {
//             res -= vS.length
//         } 
        
//         if (res < 0) {
//             res += vS.length
//         }
//     }



//     return vS[res];
// }

// f(1, [1,2,2,3], 2)

// const SeriesSum = (n) => {
//     if (n == 0) return n.toFixed(2);

//     let res = 1;
//     const seriesEl = v => 1/v;
//     let i = 2, currVal = 4;
//     while (i <= n) {
//         res += seriesEl(currVal);
//         currVal += 3;
//         i++;
//     }

//     return res.toFixed(2)
// }

// console.log(SeriesSum(5));

// function removeSmallest(arr) {
//     const lowestItem = [...arr].sort((a,b) => a - b)[0];
//     let newArr = [...arr];
//     newArr.splice(arr.indexOf(lowestItem), 1);
//     return newArr
// }

// console.log(removeSmallest([2,2,2,1,2,1]));

// const f = arr => arr.map((el,ind) => `${ind+1}: ${el}`);
// f(['a', 'b', 'c'])

// const f = (s, f) => {
//     let counter = 0;
//     while (s <= f) {
//         if ((''+s).includes('5')) {
//             s++;
//             continue;
//         };
//         console.log(s+"");
//         counter++;
//         s++;
//     }
//     console.log(counter);
//     return counter;
// }

// f(44, 58)


// const stray = arr => {
//     let unique = [...Array.from(new Set([...arr]))]
//     for (let el of unique) {
//         if (arr.filter(i => i === el).length === 1) return el;
//     }
// }

// console.log(stray([1,1,2]));

// const gimme = a => {
//     let sortedA = [...a].sort((a,b) => a-b);
//     console.log(sortedA);
//     return a.indexOf(sortedA[1])
// }

// console.log(gimme([5, 10, 14]));

// function arrayDiff(a, b) {

//   let newA = [...a];

//   for (let i = 0; i < newA.length; i++) {
    
//     console.log();
    
//     for (let j = 0; j < b.length; j++) {
//         if (newA[i] == b[j]) {
//             newA.splice(i, 1)
//             i--;
//         }
//     }
    
//   }

//   return newA;
// }
// console.log(arrayDiff([1,2,2], [2]));

// const isPangram = s => {
//     let res = {};
//     for (let el of s.toLowerCase()) {
//         if ((/[a-z]/gi).test(el)) {
//             res[el] ? res[el]++ : res[el] = 1;  
//         }
//     }
//     return Object.keys(res).length == 26 ? true : false;
// }

// isPangram('The quick brown fox jumps over the lazy dog')

// const solution = n => {

// }

// String.prototype.camelCase=function(){
//     if (this.length >= 1) {
//       return this.split` `.map(el => el[0].toUpperCase() + el.slice(1)).join``;
//     } else {
//       return this.valueOf();
//     }
//   }

//   console.log(''.camelCase());

// const f = s => {
//     console.log(s.split` `.map(el => el.split``.map((c, i) => i%2 == 0 ? c.toUpperCase() : c.toLowerCase()).join``).join` `);
// }

// f('String and newo')

// const partsSums = arr => {
//     let total = arr.reduce((pr, cur) => {return pr + cur}, 0);
//     let res = [total];

//     for (let i = 1; i < arr.length; i++) {
//         total -= arr[i-1];
//         res.push(total);
        
//     }
    
//     console.log([...res, 0]);
//     return [...res, 0]
// }

// partsSums([1,2,3,4,5,6])

// const f = s => {
//     let res = s.split(/[a-z]/gi).filter(el => el.length >= 1).map(el => +el).sort((a,b) => b - a)[0];
//     console.log(res);
// }


// f("gh12cdy695m1")

// const f = arg => {
//     if (typeof arg === 'string') {
//         return arg.split``.reverse().join``;
//     } else if (typeof  arg === 'number') {
//         return +((''+arg).split``.reverse().join``);
//     } else {
//         return arg;
//     }
// }

// console.log(f());



// const switcher = x => {
//     const chars = {
//         '29': ' ', '28': '?', '27': '!', '26': 'a', '25': 'b', '24': 'c', '23': 'd',
//         '22': 'e', '21': 'f', '20': 'g', '19': 'h', '18': 'i', '17': 'a', '16': 'k',
//         '15': 'l', '14': 'm', '13': 'n', '12': 'o', '11': 'p', '10': 'q', '9': 'r', 
//         '8': 's', '7': 't', '6': 'u', '5': 'v', '4': 'w', '3': 'x', '2': 'y', '1': 'z',
//     }

//     return x.map(el => chars[el]).join``;
// }

// const maxProduct = (nums, s) => [...nums].sort((a,b) => b-a).slice(0, s).reduce((a,b) => a*b);

// const min = (list, s) => {
//     const minV = Math.min(...list);
//     return s === 'value' ? minV : list.indexOf(minV);
// }

// const f = arr => {
//     if (arr == []) {
//         return 0;
//     }
//     let res = {};
//     for (let i = 0; i < arr.length; i++) {
//         res[arr[i]] ? res[arr[i]]++ : res[arr[i]] = 1;
//     }
//     return Math.max(...Object.values(res));
// }

// const isLeapYear = y => {
//     switch (true) {
//         case y%4 == 0 && y%100 !== 0:
//             return true;
//         case y%400 == 0:
//             return true;
//         default:
//             return false;
//     }
// }

// console.log(isLeapYear(2100));

// const humanYearsCatYearsDogYears = y => {
//     let catYs = 0, dogYs = 0;
//     for (let i = 1; i <= y; i++) {
//         if (i == 1) {
//             catYs+=15;
//             dogYs+=15;
//         } else if (i == 2) {
//             catYs+=9;
//             dogYs+=9;
//         } else {
//             catYs+=4;
//             dogYs+=5;
//         }
//     }
//     return [y, catYs, dogYs]
// }

// console.log(humanYearsCatYearsDogYears(10))

// const moveZeros = arr => [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)];
// console.log(moveZeros([ 'a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, +0, +0, +0, false, +0, +0, [], +0, +0, +0, +0, +0 ]));

// class Solution {
//     static main(arg) {
//         console.log('Hello World!');
//     }
// }

// Solution.main('Greet')

  
// const findDup = arr => arr.sort((a,b) => a - b).filter((_, i, arr) => arr[i] == arr[i+1])[0];

// console.log(findDup([1,3,2,5,4,5,7,6]));

// const f = year => {
//     year++;
//     while (new Set(...[year+''.split``]).size !== 4) {
//         year++;
//     }
//     return year;
// } 

// f(1234)

// const elevatorDistance = arr => {
//     let res = 0;
//     for (let i = 1; i < arr.length; i++ ) {
//         res += Math.abs(arr[i] - arr[i-1])
//     }
//     return res;
// }

// const deleteNth = (arr, n) => {
//     let vals = {}, newA = [...arr], inds = [];

//     for (let i = 0; i < newA.length; i++) {
//         vals[newA[i]] ? vals[newA[i]]++ : vals[newA[i]] = 1;
//         if (vals[newA[i]] > n) {
//             newA.splice(i, 1)
//             i--;
//         }
//     }
    


//     return newA;
// }

// deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3)

// const f = s => {
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == " ") continue;
//         res.push(s.slice(0, i)+s[i].toUpperCase()+s.slice(i+1)) 
//     }

//     return res;
// }

// f('helloh')

// let a = 'hello';

// console.log(a.slice(0, 3) + a[3].toUpperCase()+a.slice(4));


// const firstNonRepeatingLetter = s => {
//     let res = {}, value = '';
//     let newS = s.toLowerCase()
//     for (let i = 0; i < newS.length; i++) {
//         res[newS[i]] ? res[newS[i]]++ : res[newS[i]] = 1; 
//     }

//     for (let key in res) {
//         if (res[key] === 1) {
//             value = key;
//             break;
//         }
//     }
//     if (value == '') return``;
//     console.log(s.indexOf(value) == -1 ? value.toUpperCase() : value);
//     console.log(res, value);
//     return s.indexOf(value) == -1 ? value.toUpperCase() : value;
// }

// firstNonRepeatingLetter('a')


// const common = (a,b,c) => {
//     console.log(a,b,c)
//     let res = [];
//     for (let i = 0; i<a.length; i++) {
//         let indB = b.indexOf(a[i]), indC = c.indexOf(a[i]);
//         if (indB != -1 && indC != -1) {
//             res.push(a[i]);
//             b.splice(indB, 1);
//             c.splice(indC, 1);
//             a.splice(i, 1)
//             i--;
//         }
//     }

//     return res.length >= 1 ? res.reduce((pr,c) => pr + c) : 0;
// }

// common([1],[1],[2])

// function redistributeWealth(wealth) {
//     const avg = wealth.reduce((pr, c) => pr+c)/wealth.length;
//     wealth.fill(avg);
//     void wealth;
// }

// redistributeWealth(wealthUnequal)

// const solution = str => {
//     const syms = {
//         'M': 1000,
//         'D': 500,
//         'C': 100,
//         'L': 50,
//         'X': 10,
//         'V': 5,
//         'I': 1
//     } 

//     let arr = str.split``.map((el,i,a) => {
//         if (syms[a[i]] < syms[a[i+1]]) {
//             return -[syms[el]]
//         }
//         return syms[el]
//     })
//     return arr.reduce((a,b)=>a+b)
// }

// console.log(solution('MDCLXVI'));


// const f = ip => {
//     let arr = ip.split('.');
//     if (arr.length !== 4) return false;
//     for (let i of arr) {
//         if (+i[0] == 0) return false;
//         if ((i.match(/[a-z]/gi) || []).length > 0) return false;
//         if (+i < 0 || +i > 255) return false;
//     }
//     return true;
// } 

// console.log(f('abc.def.ghi.jkl'));

// console.log('abc'.match(/[a-z]/gi).length > 0);

// const f = (n, d) => {
//     let counter = 0;
//     for (let i = 0; i*i <= n*n; i++) {
//         let el = i*i+``;
//         if ((el.match(new RegExp(d, 'gi')) || []).length > 0) {
//             counter += (el.match(new RegExp(d, 'gi'))).length;
//         }  
//     }
//     return counter;
// }

// console.log(f(5750, 0));

// const f = n => {
//     while (true) {
//         if (Math.abs(n%5) == 0) return n;
//         n++;
//     }
// }

// console.log(f(-6));

// const f = (b,e,s) => {
//     let res = 0;
//     while (b<=e) {
//         res+=b;
//         b+=s;
//     }
//     return res;
// }

// console.log(f(1,5,3));

// const f = (s1,s2) => {
//     if (s1.length !== s2.length) {
//         return false;
//     }
//     let newS = s1.toLowerCase().split``;
//     let res = '';
//     for (let i=0;i<s2.length;i++) {
//         let ind = newS.indexOf(s2[i].toLowerCase());
//         if (ind >=0) {
//             newS.splice(ind, 1)
//         }
//     }
//     return !(!!newS.length);
// }

// console.log(f("foefet", "toffee"));

// const f = s => s.replace(/#.{0,}/gi, '')
// console.log(f('www.codewars.com/katas/?page=1#about'));

// function findSenior(list) {
//     const highestAge = list.map(el => el.age).sort((a,b) => b-a)[0];
//     return list.filter(el => el.age == highestAge);
// }

// function allContinents(list) {
//     let res = {};

//     for (let i = 0; i < list.length; i++) {
//         res[list[i].continent] ? res[list[i].continent]++ : res[list[i].continent] = 1;
//     }

//     return [...Object.values(res)].length === 5;
// }

// const countDevelopers = l => l.filter(el=>el.continent = 'Europe').length;

// const greetDevelopers = l => {
//     return l.map(el => {
//         return {...el, greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`}
//     })
// }

// var list1 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//   ];

// console.log(greetDevelopers(list1));

// const f = l => l.filter(el => el.language == 'Ruby').length > 0;

// const f = l => {
//     const fList = [...l].filter(el => el.language === 'Python');
//     return fList.length > 0 ? `${fList[0].firstName}, ${fList[0].country}` : 'There will be no Python developers'; 
// }

// let list1 = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];

// console.log(f(list1));

// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];

// const f = l => {
//     let res = {};
//     const len = l.length;

//     for (let i = 0; i < len; i++) {
//         res[l[i].language] ? res[l[i].language]++ : res[l[i].language] = 1;
//     }

//     return res;
// }

// console.log(f(list1));

// const f = l => {
//     return l.every((el, ind, arr) => el.language === arr[0].language)
// }

// const isAgeDiverse = l => {
//     let res = {
//         teens: 0, twenties: 0, thirties: 0, forties: 0, fifties: 0, sixties: 0, seventies: 0, eighties: 0, nineties: 0, centenarian: 0,
//     }

//     l.forEach(el => {
//         switch (true) {
//             case el.age < 20:
//                 res.teens++;
//                 break;
//             case el.age < 30:
//                 res.twenties++;
//                 break;
//             case el.age < 40:
//                 res.thirties++;
//                 break;
//             case el.age < 50:
//                 res.forties++;
//                 break;
//             case el.age < 60:
//                 res.fifties++;
//                 break;
//             case el.age < 70:
//                 res.sixties++;
//                 break;
//             case el.age < 80:
//                 res.seventies++;
//                 break;
//             case el.age < 90:
//                 res.eighties++;
//                 break;
//             case el.age < 100:
//                 res.nineties++;
//                 break;
//             case el.age >= 100:
//                 res.centenarian++;
//                 break;
//         }
//     })


//     return Object.values(res).every(el => el >= 1);
// }

// const addUsername = l => l.map(
//     dev => {return {...dev, username: `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${2023 - dev.age}`}}
// )

// console.log(addUsername([{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}]));

// const getAverageAge = l => Math.round(l.reduce((pr, curr) => pr + curr.age, 0) / l.length);
// console.log(getAverageAge([{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}]));

// console.log([{age: 19}].reduce((pr, curr) => pr + curr.age, 0));

// const findAdmin = (l, lang) => l.filter(el => el.githubAdmin=='yes' && el.language == lang);

// const isLanguageDiverse = list => {
//     let res = {};
//     list.forEach((el) => {
//         res[el.language] ? res[el.language]++ : res[el.language] = 1;
//     })

//     let values = Object.values(res).sort((a,b) => b-a);

//     if (values[0] / values[1] >= 2 || values[1] / values[2] >= 2) {
//         return false
//     } else {
//         return true;
//     }

// }

// const f = l => {
//     let res = {};
//     list.forEach((el) => {
//         res[el.meal] ? res[el.meal]++ : res[el.meal] = 1;
//     })
//     return res;   
// }

// const findOddNames = l => l.filter(el => el.firstName.split``.map(i => i.charCodeAt(0)).reduce((pr,curr) => pr+curr,0) % 2 == 0);

// console.log(findOddNames([
//     { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//     { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
//   ]));

// const f = l => l.filter(el => Object.values(el).some(x=>x==null))
//                     .map(el => {
//                         let miss = '';
//                         for (let key in el) {
//                             if (el[key] == null) miss = key;
//                         }
//                         return {...el, question: `Hi, could you please provide your ${miss}.`}
//                     });

// console.log(f([
//     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
//     question: 'Hi, could you please provide your firstName.' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
//     question: 'Hi, could you please provide your language.' }
//   ]));

// const divisions = (n, d) => {
//     if (n < d) {
//         return 0;
//     }
//     let counter = 0;
//     while (n >= d) {
//         n = n / d;
//         if (!Number.isInteger(n)) {
//             n = Math.floor(n)
//         }
//         counter++
//     }

//     return counter;
// }

// console.log(
//     divisions(100, 2)
// );

// const validBraces = b => {
//     const braces = { '{':'}', '[':']', '(':')' };
//     let list = [];

//     for (let i = 0; i < b.length; i++) {
//         if (b[i] == '{' || b[i] == '[' || b[i] == '(') {
//             list.push(b[i])
//         } else {
//             let lastIn = list.pop();
//             if (braces[lastIn] !== b[i]) {
//                 return false;
//             }
//         }
//     }

//     return list.length !== 0 ? false : true;

// }

// console.log(validBraces("[]"));


// function titleCase(title, minorWords) {
//     if (minorWords) minorWords = minorWords.split(' ').map(el => el.toLowerCase());
//     if (title == '') return '';
//     return title.split(" ")
//         .map((el, ind) => {
//             if (ind == 0) {
//                 return el[0].toUpperCase() + el.slice(1).toLowerCase()
//             }
//             if (minorWords && minorWords.includes(el.toLowerCase())) {
//                 return el.toLowerCase()
//             } else {
//                 return el[0].toUpperCase() + el.slice(1).toLowerCase()
//             }
//         }).join` `;
// }

// console.log(titleCase('the quick brown fox'));

// const dataReverse = data => [...data].join``.match(/.{8}/gi).reverse().join``.split``;

// console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));

// const meeting = s => {
//     let res = s.split(';').map(el => {
//         let innerArr = el.split(":").map(i => i.toUpperCase()).reverse();
//         return `(${innerArr[0]}, ${innerArr[1]})`
//     }).sort()

//     return res;
// }

// meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern")

// const cleanString = s => {
//     let res = [];
//     for (let i of s) {
//         if (i !== '#') {
//             res.push(i)
//         } else {
//             res.pop()
//         }
//     }
//     return res.join``;
// }

// f('abc##d######')


// function calculateYears(principal, interest, tax, desired) {
//     let y = 0;
//     while (principal < desired) {
//         let inc = principal * interest;
//         principal = principal + inc - (inc*tax);
//         y++;
//     }
//     return y;
// } 

// calculateYears(1000,0.01625,0.18,1200)

// const f = s => {
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == s[i].toUpperCase()) res.push(i);
//     }
//     return res;
// }

// const f2 = s => s.split``.map((el, i, arr) => {
//     return arr[i] == arr[i].toUpperCase() ? i : ''
//     }).filter(el => el!=='')

// console.log(f2('CodEWaRs'));

// const f =a=>a.sort((a,b)=>a-b).splice(-2)
// console.log(f([1,2,3,4]));

// const capitalize = s => {
//     let even = '', odd = '';
//     for (let i = 0; i < s.length; i++) {
//         if (i % 2 == 0) {
//             even += s[i].toUpperCase();
//             odd += s[i].toLowerCase();
//         } else {
//             even += s[i].toLowerCase();
//             odd += s[i].toUpperCase();
//         }
//     }
//     return [even, odd];
// }

// function flattenAndSort(array) {
//     return [].concat(...array).sort((a,b) => a - b);
// }

// console.log(
//     flattenAndSort([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])
// );

// const f = a => a.reduce((pr,curr) => pr + Math.min(...curr),0);

// console.log(
// f([
//     [ 1, 2, 3, 4, 5 ],
//     [ 5, 6, 7, 8, 9 ],
//     [ 20, 21, 34, 56, 100 ]
// ])
// );

// const diamond = n => {
//     if (n <= 0 || n%2===0) return null;
//     let res = [];
//     for (let i = n; i >= 1; i = i-2 ) {
//         let pads = '';
//         if (i < n) {
//             pads = " ".repeat((n-i)/2);
//         }
//         res.push(pads + '*'.repeat(i) + pads +'\n')
//     }
//     return [...res.reverse(), ...res.reverse().splice(1)].join``;
// }

// console.log(diamond(5));


// function checkRoot(string){
//     console.log(string)
//       let arr = string.split(',');
//       console.log(new Set([...arr]).size);
//       if (arr.length !== 4 || arr.some(x=>/[a-zA-Z]/.test(x)||+x<=0) || new Set(...arr).size !== 4) return 'incorrect input';
//       if (arr.join`,` !== [...arr].sort((a,b)=>a-b).join`,`) return `not consecutive`;
//       const sqrt = arr.map(Number).reduce((a,b)=>a*b)+1;
//       return Number.isInteger(Math.sqrt(sqrt)) ? `${sqrt}, ${Math.sqrt(sqrt)}` : `not consecutive`;
//   }

// console.log(checkRoot('2,3,4,7'));

// const timedReading = (maxLength, text) => 
//     text.replace(/[^a-zA-Z]/gi, ',').split`,`.filter(el=>el).filter(el=>el.length<=maxLength).length;
// timedReading(4,"The Fox asked the stork, 'How is the soup?'")

// function onlyOne(...args) {
//     if (args.length == 0) return false;
//     let res = {};
//     for (let i of args) {
//         res[i] ? res[i]++ : res[i] = 1;
//     }
//     return res[true] == 1 && res[false] >= 1;
// }

// console.log(onlyOne(true, false));
// let a2 = ["lively", "alive", "harp", "sharp", "armstrong"],
// a1 = ["live", "strong", "arp"]
// const inArray = (a1, a2) => {
//     let text = a2.join`,`;
//     return a1.filter(el=> text.includes(el)).sort();
// }

// inArray(a1,a2)

// const goodVsEvil = (good, evil) => {
    
//     const worth = {
//         'Hobbits': 1,
//         'Men': 2,
//         'Elves': 3,
//         'Dwarves': 3,
//         'Eagles': 4,
//         'Wizards': 10,
//         'Orcs': 1,
//         'Wargs': 2,
//         'Goblins': 2,
//         'Uruk Hai': 3,
//         'Trolls': 5
//     }

//     let gArr = good.split(' ').map((el, ind)=> {
//         let race = ind==0 ? 'Hobbits' : ind==1 ? 'Men' : ind==2 ? 'Elves' : ind==3 ? 'Dwarves'
//             : ind==4 ? 'Eagles' : 'Wizards';
//         return [race, el]
//     }).reduce((a,b)=>a + worth[b[0]] * b[1],0);

//     let eArr = evil.split(' ').map((el, ind)=> {
//         let race = ind==0 ? 'Orcs' : ind==1 ? 'Men' : ind==2 ? 'Wargs' : ind==3 ? 'Goblins'
//             : ind==4 ? 'Uruk Hai' : ind==5 ? 'Trolls' : 'Wizards';
//         return [race, el]
//     }).reduce((a,b)=>a + worth[b[0]] * b[1],0);

//     return gArr < eArr ? 'Battle Result: Evil eradicates all trace of Good' :
//         gArr > eArr ? 'Battle Result: Good triumphs over Evil' : 
//             'Battle Result: No victor on this battle field';
// }

// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));

// const f = s => {
//     console.log(s.split(/[aeiou]/gi).filter(el=>el!=='').map(el=> {
//         let sum = 0;
//         for (let i of el) {
//             sum += i.charCodeAt(0) - 96;
//         }
//         return sum;
//     }).sort((a,b)=>b-a)[0])
// }

// f('strength')

// const bouncingBall = (h,b,w) => {
//     if (h <= 0 || w >= h || h <= 0 || b <= 0 || b >= 1) return -1;
//     let newH = h, ballCount = 0;
//     while (w < newH) {
//         newH = newH*b;
//         ballCount += 2;
//     }
//     return ballCount-1;
// }

// console.log(bouncingBall(3, 0.66, 1.5));

// const encryptThis = s => {
//     let arr = s.split(" ").map(el=> {
//         const fSymb = el[0].charCodeAt(0);
//         if (el.length == 1) return ''+fSymb;
//         const sSymb = el[1].charAt(0), 
//         lSymb = el[el.length - 1].charAt(0), other = el.slice(2, el.length-1)
//         return el.length > 2 ? `${fSymb}${lSymb+other+sSymb}` : `${fSymb}${lSymb}`;
//     }).join(' ');
//     return arr;
// }

// encryptThis('hello wab')

// function rgb(r, g, b) {
//     const convert = p => {
//         if (p > 255) p = 255;
//         if (p < 0) p = 0;
//         let res = p.toString(16)
//         if (res.length == 1) return '0'+res;
//         return res;
//     };
//     return `${convert(r)+convert(g)+convert(b)}`.toUpperCase();
// }

// console.log(rgb(10,147,10));

// const f = s => {
//     let res = [], value = 0;
//     for (let i of s) {
//         if (i == 'i') {
//             value++;
//         } else if (i == 'd') {
//             value--;
//         } else if (i == 's') {
//             value = Math.pow(value, 2);
//         } else if (i == 'o') {
//             res.push(value);
//         }
//     }

//     return res;
// }
// f('iiisdoso')

// const f = s => {
//     const date = new Date(null);
//     date.setSeconds(s);
//     console.log(date.toUTCString());
//     let arr = date.toUTCString().split(/[^0-9]/gi).filter(el=>el!='');
//     let hh = arr[0] == '01' ? arr[2] : +arr[0] * 24 - 24 + +arr[2], mm = arr[3], ss = [arr[4]]
//     return `${hh}:${mm}:${ss}`;
// }

// console.log(f(359999));

// const vowels = {
//     encode: {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5},
//     decode: {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'},
// }

// const encode = s => s.replace(/[aeiou]/gi,(m)=>vowels.encode[m]);
// const decode = s => s.replace(/[0-9]/g, (m)=>vowels.decode[m]);

// console.log(encode('hello'));
// console.log(decode('h2ll4'));

// const f = s => (/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/g).test(s) && s.length==14;

// const foldArray = (arr, runs) => {
//     console.log(arr, runs);
//     const run = arr => {
//         let copy = [...arr];
//         const length = Math.ceil(copy.length/2);
//         let newArr = copy.splice(length).reverse();
//         return copy.map((_,i) => copy[i] + (newArr[i] || 0));
//     }
//     let counter = 0, res = [...arr];
//     while (counter < runs) {
//         res = run(res);
//         counter++;
//     }
//     return res;
// }

// console.log(foldArray([1,2,3], 2));

// const f = (a1, a2) => (a1+a2).toString(2)
// console.log(f(1,1));

// const isTriangle = (a,b,c) => a+b>c && a+c>b && b+c>a;

// const f = n => (Math.abs(n)+'').split``.reduce((a,b)=>a + +b ,0);

// console.log(f(99));

// const checkExam = (t, a) => {  
//     let res = t.map((_,i)=> {
//         return t[i] == a[i] ? 4 : a[i] == '' ? 0 : -1;
//     }).reduce((a,b)=>a+b);
//     return res < 0 ? 0 : res;
// }

// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));

//  const solve = s => {
//     let check = {l: 0, u: 0};
//     for (let i of s) {
//         i == i.toUpperCase() ? check.u++ : check.l++;
//     }
//     return check.l >= check.u ? s.toLowerCase() : s.toUpperCase();
//  }

//  solve('code')

// const rowWeights = a => {
//     let b = a.filter((_,i)=>i%2===0).reduce((p,c)=>p+c,0);
//     let c = a.filter((_,i)=>i%2!==0).reduce((p,c)=>p+c,0);
//     return [b,c]
// }

// console.log(rowWeights([0]));

// const f = s => [...new Set(s.split(' '))].join` `;
// f('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')

// function mxdiflg(a1, a2) {
//     if (a1.length == 0 || a2.length == 0) return -1;
//     let b = [...a1].sort((a,b) => a.length - b.length);
//     let c = [...a2].sort((a,b)=> a.length - b.length);
    
//     console.log(b,c);

//     let bSm = b[0].length, bLg = b[b.length-1].length,
//         cSm = c[0].length, clg = c[c.length-1].length;

//     console.log(bSm,bLg, cSm,clg);
    
//     return Math.max(Math.abs(bSm - clg), Math.abs(bLg - cSm));
// }

// let a1 = [
//     'ejjjjmmtthh',
//     'zxxuueeg',
//     'aanlljrrrxx',
//     'dqqqaaabbb',
//     'oocccffuucccjjjkkkjyyyeehh'
//   ]
// let a2 = [ 'bbbaaayddqbbrrrv' ]

// console.log('oocccffuucccjjjkkkjyyyeehh'.length);
// console.log(a2[0].length);

// console.log(mxdiflg(a1,a2));

// getEvenNumbers=a=>a.filter(i=>i%2==0);

// const f = a => {
//     let newA = [...a].sort((a,b)=>b-a);
//     return newA[0]+newA[1];
// }

// const isSortedAndHow = a => {
//     let asc = [...a].sort((a,b)=>a-b).join``;
//     let desc = [...a].sort((a,b)=>b-a).join``;
//     return a.join`` == asc ? "yes, ascending" : a.join`` == desc ? "yes, descending" : "no";
// }

// const alphabetWar = s => {
//     const alph = {
//         left: {
//             'w': 4, 'p': 3, 'b': 2, 's': 1,
//         },
//         right: {
//             'm': 4, 'q': 3, 'd': 2, 'z': 1,
//         }
//     }

//     let left = s.split``.filter(i=>(/[wpbs]/g).test(i))
//                .map(el=>alph.left[el]).reduce((a,b)=>a+b,0);

//     let right = s.split``.filter(i=>(/[mqdz]/g).test(i))
//                 .map(el=>alph.right[el]).reduce((a,b)=>a+b,0);

//     return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : "Let's fight again!"
// }

// alphabetWar('z')

// const predictAge = (...ages) => Math.floor(Math.sqrt(ages.map(el=>el*el).reduce((a,b)=>a+b,0))/2)

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

// const bump = x => x.match(/n/g).length <= 15 ? "Woohoo!" : "Car Dead";

// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));

// const greet = name => `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

// let f = s => {
//     let res = [];
//     s.replace(/[aeiouy]/gi,(_,ind)=> {
//         res.push(ind+1)
//     })
//     return res;
// }

// f('Apple')

// var list1 = [  
//     { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
//     { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
//     { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
//     { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
//   ];
  
//   const sortByLanguage = arr => {
//       return arr.sort((a,b) => {
//         if (a.language < b.language) return -1;
//         if (a.language > b.language) return 1;
//         if (a.language == b.language) {
//             return a.firstName < b.firstName ? -1 : 1;
//         }
//       })
//   }
//   console.log(sortByLanguage(list1));

//   console.log('Ruby' > 'Java');


// const reOrdering = str => {
//     let arr = str.split(' ');
//     let word = [...arr].filter(el => el[0] == el[0].toUpperCase()).join``;
//     arr.splice(arr.indexOf(word), 1);
//     return [word, ...arr].join(' ');
// }

// f('bull color pig Patrick')

// function sumDigPow(a, b) {
//     let res = [];
//     while (a < b) {
//         if (a < 10) res.push(a);
//         if (a>9) {
//             let sum = `${a}`.split('').map(Number).reduce((a,b,i)=> a+=Math.pow(b,i+1),0);
//             if (sum == a) res.push(a);
//         }
//         a++;
//     }
//     return res;
// }

// sumDigPow(10, 150)

// const f = arr => {
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
//     }

//     return +Object.entries(obj).sort((a,b) => {
//         if (a[1] < b[1]) return 1;
//         if (a[1] > b[1]) return -1;
//         if (a[1] == b[1]) {
//             return Number(a[0]) < Number(b[0]) ? 1 : -1;
//         }    
//     })[0][0];
// }

// console.log(f([12, 10, 8, 12, 7, 6, 4, 10, 12]));

// function upArray(arr){
//     if ((arr.some(el => el < 0 || el > 9)) || arr.length == 0) return null;
//     ++arr[arr.length-1];

//     let n = arr.reverse().map((el,i, arr)=> {
//         if (el >= 10) {
//             if (arr[i + 1] == undefined);
//             arr[i+1]++;
//             return 0;
//         }
//         return el;
//     }).reverse();

//     if (n.every(el => el == 0)) n.unshift(1);
//     return n;
// }

// console.log(upArray([9, 9, 9]));

// function reverse(str){
//     let arr = str.split(' ').filter(el=>el!=='');
//     return arr.map((el, ind) => {
//         return ind%2!==0 ? el.split('').reverse().join`` : el;
//     }).join(' ');
// }

// console.log(reverse('Did it work?'));


// Array.prototype.square = function() {
//     return [...this].map(el=>el*el);
// }

// Array.prototype.cube = function() {
//     return [...this].map(el=>el*el*el);
// }

// Array.prototype.average = function() {
//     return [...this].reduce((a,b)=>a+=b,0) / this.length;
// }

// Array.prototype.sum = function() {
//     return [...this].reduce((a,b)=>a+=b,0);
// }

// Array.prototype.even = function() {
//     return [...this].filter(el=>el%2===0);
// }

// Array.prototype.odd = function() {
//     return [...this].filter(el=>el%2!==0);
// }

// console.log([1,2,3].average());

// function dashatize(num) {
//     if (!Number.isInteger(num)) return 'NaN';
//     let str = String(Math.abs(num))
//     if (str.length === 1) return str;
//     return str.split('').map((el,ind, arr) => {
//         if (el%2!==0) {
//             if (ind === 0) return `${el}-`;
//             if (ind === arr.length-1) return `-${el}`;
//             return `-${el}-`; 
//         }
//         return el;
//     }).join``.split('').map((_, i, a) => {
//         if (a[i] === a[i+1] && _ == '-') {
//             return null;
//         }
//         return _;
//     }).filter(el=>el!==null).join``;
// }

// console.log(dashatize(86320));

// const f = str => {

//     let arr = (str[0].toUpperCase()+str.slice(1)).replace(/\d/g, '').replace(/[A-Z]/g, (m,i)=> {
//         return i !== 0 ? `-${m}`.toLowerCase() : m.toLowerCase();
//     })
//     return arr;
// }

// console.log(f('camelsHaveThreeHumps'));

// const noonerize = arr => {
//     if (arr.some(el => typeof el !== 'number')) return "invalid array";
//     arr = arr.map(String);
//     return Math.abs([arr[1][0]+arr[0].slice(1), arr[0][0]+arr[1].slice(1)].map(Number).reduce((a,b)=>b-a));
// }

// console.log(noonerize([ 1000000, 'hello' ]));

// const points = arr => {
//     let counter = 0;
//     arr.forEach(el => {
//         const [x,y] = el.split(':');
//         switch (true) {
//             case x < y:
//                 counter+=0;
//                 break;
//             case x > y:
//                 counter+=3;
//                 break;
//             default:
//                 counter+=1;
//                 break;
//         }
//     })
//     return counter;
// }

// console.log(points(['1:2', '1:1', '3:0']));

// const flip=(d, a)=>{
//     return a.sort((a,b) => d == 'R' ? a-b : b-a);
// }

// const validate = num => {
//     let sum = String(num).split('').reverse().map((el,i)=>{
//         if (i % 2 !== 0) {
//             if (el >= 5) {
//                 return el*2-9;
//             }
//             return el*2;
//         }

//         return +el;
//     }).reverse().reduce((a,b)=>a+b,0);

//     return sum % 10 == 0;
// }

// console.log(validate(123));

//65-90

// const playPass = (s, n) => s.toUpperCase().split('').map(((el) => {
//         if (/[0-9]/.test(el)) {
//             return `${9-el}`;
//         } else if (/[A-Z]/.test(el)) {
//             let char = el.charCodeAt(0) + n;
//             return String.fromCharCode(char > 90 ? 64 + char - 90 : char);
//         } else {
//             return el;
//         }
//     })).map((v, i) => {
//         return i%2!==0 ? v.toLowerCase() : v.toUpperCase()
//     }).reverse().join``;

// playPass("Hello123", 1)


// console.log(['a', 'b', '1'].map((el, i) => {
//     return i%2!==0 ? el.toLowerCase() : el.toUpperCase()
// }));

// const pyramid = n => {
//     let res = []
//     if (n <= 0) return res;

//     for (let i = 1; i <= n; i++) {
//         res.push('1'.repeat(i).split``.map(Number))
//     }

//     return res;
// }
// console.log(pyramid(3));

// const nato = {
//     A: "Alfa",
//     B: "Bravo",
//     C: "Charlie",
//     D: "Delta",
//     E: "Echo",
//     F: "Foxtrot",
//     G: "Golf",
//     H: "Hotel",
//     I: "India",
//     J: "Juliett",
//     K: "Kilo",
//     L: "Lima",
//     M: "Mike",
//     N: "November",
//     O: "Oscar",
//     P: "Papa",
//     Q: "Quebec",
//     R: "Romeo",
//     S: "Sierra",
//     T: "Tango",
//     U: "Uniform",
//     V: "Victor",
//     W: "Whiskey",
//     X: "Xray",
//     Y: "Yankee",
//     Z: "Zulu"
// };

// const to_nato = w => w.toUpperCase().split(' ').map(el => {
//         return el.split('').map(i => nato[i] ? nato[i] : i).join(' ');
//     }).join(' ');

// const s = 'abc def ghj';

// const f = w => {
//     let arr = [];
//     for (let i = w.length; i >= 0; i--) {
//         arr.push(w[i]);
//     }
//     return arr.join``;
// }

// const rev = sent => sent.split(' ').map(el => {
//     return f(el);
// }).join(' ');

// console.log(rev(s));

// function factorial(n) {
//   let res = 1;
//   if (n == 0) return res;
//   if (n < 0 || n > 12) throw new RangeError();
//   while (n >= 1) {
//     res*=n;
//     n--;
//   }
//   return res;
// }

// console.log(factorial(4));

// minValue=v=>+[...new Set(v)].sort((a,b)=>a-b).join``;
// console.log(minValue([5, 7, 9, 5, 7]));

// const factorial = n => n ? factorial(n - 1) * n : 1;