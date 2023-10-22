// // const text = 'h272772 h hhhh  h hh'

// // const func = (arg, lim) => {
// //     console.time()
// //     while (arg < lim) {
// //         arg += 1
// //     }
// //     console.timeEnd()
// // }

// // console.log('Hello')
// // setTimeout(()  => console.log('Timeout 2'), 2000)
// // setTimeout(()  => func(1, 10000000000000))
// // setImmediate(() => console.log('Immmid'))


// // console.log(text.charAt(0+4));

// // function async1() {
// //     console.log('async1 start');
// //     async2().then(() => {
// //       console.log('async1 end');
// //     });
// // }
  
// // function async2() {
// //     return new Promise((resolve) => {
// //       resolve();
// //       console.log('async2');
// //     })
// // }
  
// // function* generate() {
// //     console.log('generate-1')
// //     yield;
// //     console.log('generate-1.2')
// // }
  
// //   function* generate2() {
// //     console.log('generate-2')
// //     yield;
// //     console.log('generate-2.2')
// //   }
  
// //   console.log('script start');
  
// //   setTimeout(function () {
// //     console.log('setTimeout');
// //   }, 0);
  
// //   const generator1 = generate();
// //   generator1.next();
// //   generator1.next();
  
// //   async1();
  
// //   new Promise(function (resolve) {
// //     console.log('promise1');
// //     resolve();
// //   }).then(function () {
// //     console.log('promise2');
// //   });
  
// //   console.log('script end');
// //   const generator2 = generate2();
// //   generator2.next();
// //   generator2.next();


// function f1() {
//     console.log('F1');
// }

// function f2() {
//     f1()
//     console.log('F2');
// }

// function f3() {
//     f2()
//     console.log('F3');
// }

// // f3()

// function factorial(n) {
//     if (n < 2) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
// // console.log(factorial(110000)); ERROR. CAllSTACK IS FULL

// function log(m) {
//     console.log(m);
// }


// // log('start')
// // log('start1')
// // log('start2')
// // log('start3')
// // setTimeout(() => {
// //     console.log('Timeout');
// // }, 3000)
// // setTimeout(() => {
// //     console.log('Timeout');
// // }, 5000)
// // log('end')

// // function log() {
// //     console.log('1');
// // }

// // function log1() {
// //   log();
// //   console.log('2');
// // }

// // function log2() {
// //   log1();
// //   console.log('3');
// // }

// // function log3() {
// //   log2();
// //   console.log('3');
// // }

// // function log4() {
// //   log3();
// // }

// function log(m) {
//     console.log(m);
// }

// log(1)

// setTimeout(() => {
//     log('Timeout 1')
//     Promise.resolve().then(() => {
//         log('promise 1')
//     })
// }, 0)

// queueMicrotask(() => {
//     log(4+4)
// })

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 0);
//   });
// }

// async function add1(x) {
//   const a = await resolveAfter2Seconds(20);
//   const b = await resolveAfter2Seconds(30);
//   console.log('async')
//   return x + a + b;
// }
// add1(10)

// setTimeout(() => {
//     log('Timeout 2')
// }, 0)

// Promise.resolve().then(() => {
//     log('promise 2')
// })

// Promise.resolve().then(() => {
//     log('promise 3')
// })
// log(2)

// // 1, 2, promise 2, promise 3, timeout 1, promise 1, timeout 2


// const foo = () => {
//     console.log('foo');
// }

// const foo2 = () => {
//     console.log('foo2');
// }

// const foo3 = () => {
//     console.log('foo3');
// }


// function start() {
//     console.log('start');

//     foo()
//     process.nextTick(foo2)

//     // setTimeout(foo3, 1000)
//     queueMicrotask(() => console.log('microtask'))

//     console.log('end');
// }
// start()

//start foo end foo2 microtask foo3


// setTimeout(() => console.log('1'), 0)
// setImmediate(() => console.log('2'))

// const l = (x) => {
//     console.log(x);
// }

// const x = 9
// const y = 10

// let num = "1"

// console.log(+'');

// console.time()
// for (let index = 1; index <= 1000000; index++) {
//     console.log(index);
// }
// console.timeEnd()
//10.324, 1.41.331

// console.time()
// let i = 1;
// while (i <= 1000000) {
//     console.log(i)
//     i++
// }
// console.timeEnd()
//10.307, 1.44.103


// console.time()
// let i = 1;
// do {
//     console.log(i)
//     i++
// } while (i <= 1000000)
// console.timeEnd()
//1.44.889

// const arr = [1, 2, 3, 4, 5]
// arr.length = 1000000

// console.time()
// for (let i of arr) {
//     console.log(i);
// }
// console.timeEnd()
//1.45.332

// console.time()
// for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i])
// }
// console.timeEnd()
//1:42.567 1:44.594 

// console.time()
// for (let i in arr) {
//     console.log(i);
// }
// console.timeEnd()


// const user = {
//     name: 'v',
//     age: 20,
//     isDev: true
// }

// for (let i in arr) {
//     console.log(arr[i]);
// }



//SYMBOL

// let s = Symbol('id')

// let s2 = Symbol('id')

// console.log(s, s2);

// // let obj = {
// //     [s]: 'Hello',
// //     [s2]: 'Hi'
// // }

// let obj2 = {
//     name: 'vv',
//     age: 20
// }








//======================================================================


const text = 'My wallet balance is 14960 USDT 1244 wdwad'

function parseBalance(message) {
    
    let balance = '';
    let result = 0;

    for (let i = 0; i < message.length; i++) {  
        const charCode = message.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            balance += message.charCodeAt(i) - 48;
            result = result * 10 + charCode - 48 //Каждую итерацию мы резалт умножаем на 10 и добавляем число
        } else if (balance !== '') {     //так как баланс уже не пустой и следующий символ после 0 идёт не цифра, значит мы выходим из цикла
            break;
        }
    }

    return result
}

// console.log(parseBalance(text));




//======================================================================

const text2 = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT.';

function countBalance1(message) {
    let result = {}

    let start = '@'.charCodeAt(0);
    let finish = '/'.charCodeAt(0);
    let currentName = '';
    let currentStrBalance = '';
    let currentNumBalance = 0;
    let isCheckingName = false;
    let isCheckingBalance = false;
    
    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        

        if (start === charCode) {
            isCheckingName = true;
            continue
        }

        if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) && isCheckingName) {
            
            let loweredChar = charCode;

            if (loweredChar <=90) {
                loweredChar = String.fromCharCode(loweredChar + 32);
            } else {
                loweredChar = String.fromCharCode(loweredChar)
            }

            currentName += loweredChar
        }
        
        if (finish === message.charCodeAt(i)) {
            isCheckingName = false
        }

        else if (charCode >= 48 && charCode <= 57) {
            isCheckingBalance = true;
            currentStrBalance += message.charCodeAt(i) - 48
            currentNumBalance = currentNumBalance * 10 + (charCode - 48)
        }  else if (currentNumBalance !== 0) {
            result[currentName] = currentNumBalance
            currentName = '';
            currentNumBalance = 0;
            currentStrBalance = '';
            isCheckingName = false;
            isCheckingBalance = false;
        }    
    }

    

    return result
}

// console.log(countBalance1(text2));



//======================================================================

const text3 = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';
const newText3 = '<@Kate />:apple: <@Max/> :apple <@liza/>drt sdifhsdif jdsf ds<@maria/><@alisa /> :like: received:apple::apple:'

function countEmoji(message, emoji) {
    let result = {}

    let start = '@'.charCodeAt(0);
    let finish = '/'.charCodeAt(0);
    let currentName = '';
    let isCheckingName = false; 

    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);


        if (start === charCode) {
            isCheckingName = true;
        }

        if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) && isCheckingName) {
            
            let loweredChar = charCode;

            if (loweredChar <=90) {
                loweredChar = String.fromCharCode(loweredChar + 32);
            } else {
                loweredChar = String.fromCharCode(loweredChar)
            }

            currentName += loweredChar
        }
        
        if (finish === message.charCodeAt(i)) {
            isCheckingName = false
        }
        
        else if (currentName !== '' && !isCheckingName) {
            result[currentName] = 0;
            currentName = '';
            isCheckingName = false;
        }    
    }


    return result;
}


console.log(countEmoji(newText3, 'apple'));




//======================================================================



const text4 = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat.'
const text5 = 'I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.'

function countBalance2(str) {

    let balanceStr = 'balance';
    let balanceWord = '';

    let balance = 0;
    let costs = 0;

    let currentNum = 0;

    let startBalanceCheck = false;
    let isBalanceMentioned = false;

    for (let i = 0; i < str.length; i++) {

        let charCode = str.charCodeAt(i)

        if (charCode === balanceStr.charCodeAt(0)) {
            startBalanceCheck = true;
        }
      
        if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) && startBalanceCheck) {
            balanceWord += str[i];
        } else if (balanceWord !== '' && balanceWord === balanceStr) {
            startBalanceCheck = false;
            isBalanceMentioned = true;
            balanceWord = '';
        }

        if (isBalanceMentioned) {
            if (charCode >= 48 && charCode <= 57) {
                currentNum = currentNum * 10 + charCode - 48
            } else if (currentNum !== 0) {
                balance += currentNum;
                currentNum = 0;
                isBalanceMentioned = false;
            }            
        } else if (!isBalanceMentioned) {
            if (charCode >= 48 && charCode <= 57) {
                currentNum = currentNum * 10 + charCode - 48
            } else if (currentNum !== 0) {
                costs += currentNum;
                currentNum = 0;
            }           
        }
    }

    return balance - costs
}

// console.log(countBalance2(text4));
// console.log(countBalance2(text5));


let s = 'abcdefg';

let newS = s.replace(/[abe]/gi, function(m, o) {
    console.log(o);
    return 'B'
})

console.log(newS);