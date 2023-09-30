// STRING

let str = ' 2214 '

let str2 = '222     5'
let str3 = '        333     5'


// console.log(str.at(3));

// console.log(str.charAt(3));

// console.log(String.fromCharCode([' 49 '], "50", 51));

// console.log(str.charCodeAt(1));


// console.log(str.concat(['2', 3, ['4']]))
// console.log(str.concat([str2, str3]))

let testStr1 = 25

testStr1 = testStr1+''

console.log(testStr1);

// console.log(testStr1.endsWith('lo ', 4));

console.log(testStr1.includes('25'));


let testStr2 = 'Hello world!'

console.log(testStr2.indexOf('l'));
console.log(testStr2.lastIndexOf('l'));
console.log(testStr2.indexOf('10'));

console.log(testStr2.slice(5)); //... world!
console.log(testStr2.slice(0, 5)); //Hello
console.log(testStr2.slice(-6, -1)); //world

console.log(testStr2.substring(0, 5)); //Hello
console.log(testStr2.substring(5, 0)); //Hello

console.log(testStr2.substr(0, 9));


console.log(testStr2.toUpperCase());
console.log(testStr2.toLowerCase());


let testStr3 = '   hi!          ';

console.log(testStr3.trim());
console.log(testStr3.trimStart());
console.log(testStr3.trimEnd());


console.log('A'.codePointAt());
console.log('A'.charCodeAt());
console.log('А'.codePointAt());
console.log('А'.charCodeAt());


const testStr4 = 'HwuiahuahuwhufahuhiufhuaisuhifuhasuhfhuhuashufhiuL'

console.log(typeof testStr4);
console.log(testStr4[testStr4.length - 1]);
console.log(testStr4[-1]); //НЕ РАБОТАЕТ

let testStr5 = 'Hello'
console.log(testStr5.repeat('5')); // HelloHelloHelloHelloHello

console.log(testStr5.replace('H', ['h'])); //hello
console.log(testStr5.replaceAll('l', 'L')); //Hello

console.log(testStr5.split('')); //[ 'H', 'e', 'l', 'l', 'o' ]


let testUni = '\u00C7'
let testUni2 = '\u0043\u0327'
console.log(testUni.normalize("NFC") === testUni2.normalize('NFC')) //true


console.log(testStr5.search('ll')) // 2
console.log(testStr5.search(/ll/)) // 2

console.log(testStr5.match('l')) //[ 'l', index: 2, input: 'Hello', groups: undefined ]
console.log(testStr5.match(/l/)) //[ 'l', index: 2, input: 'Hello', groups: undefined ]
console.log(testStr5.match(/l/g)) //[ 'l', 'l' ]
console.log(testStr5.match('w'))


let res = testStr5.matchAll('l')
console.log([...res]) 
//   [
//     [ 'l', index: 2, input: 'Hello', groups: undefined ],
//     [ 'l', index: 3, input: 'Hello', groups: undefined ]
//   ]


let testStr6 = 'abc'

console.log(testStr6.padStart(10)); //        abc//
console.log(testStr6.padStart(6, '0123')) //012abc (Тройка убралась, потому что  нужно чтоб длина была 6, если длина например будет 15, то 0123 будут повторяться)
console.log(testStr6.padStart(15, '0123')) //012301230123abc (Если длина например будет 15, то 0123 будут повторяться пока не заполнят строчку из 15 символов)

console.log(testStr6.padEnd(10)); //abc         //
console.log(testStr6.padEnd(6, '0123'))
console.log(testStr6.padEnd(15, '0123')) 



console.log('a'.localeCompare('b')) // -1
console.log('b'.localeCompare('a')) // 1
console.log('a'.localeCompare('a')) // 0

console.log();

console.log(String.fromCodePoint(79, 107, 32, 128077)); // Ok 👍
console.log(String.fromCharCode(79, 107, 32, 55357, 56397)); // Ok 👍


console.log('istanbul'.toLocaleUpperCase('tr')); //İSTANBUL


let string = new String('Hello')
console.log(string); // [String: 'Hello']
console.log(string.valueOf()); // Hello
console.log(string.toString()); // Hello

console.log(String.raw `Hi \u000A15`);
console.log(String.raw `Hi\n${string.valueOf()}`);