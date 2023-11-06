// function async1() {
//   console.log('async1 start', 4);
//   async2().then(() => {
//     console.log('async1 end', 10);
//   });
// }

// function async2() {
//   return new Promise((resolve) => {
//     resolve();
//     console.log('async2', 5);
//   })
// }

// function* generate() {
//   console.log('generate-1', 2)
//   yield;
//   console.log('generate-1.2', 3)
// }

// function* generate2() {
//   console.log('generate-2', 8)
//   yield;
//   console.log('generate-2.2', 9)
// }

// console.log('script start', 1);

// setTimeout(function () {
//   console.log('setTimeout', 12);
// }, 0);

// const generator1 = generate();
// generator1.next();
// generator1.next();

// async1();

// new Promise(function (resolve) {
//     console.log('promise1');
// }).then(function () {
//   console.log('promise2');
// });


// process.nextTick(() => {
//     console.log('tick 1', 2);
// })

// console.log('start', 1);

// queueMicrotask(() => {
//     console.log('mic 1', 4);
// })

// process.nextTick(() => {
//     console.log('tick 2', 3);
// })

// setImmediate(() => {
//     console.log('end', 6);
// })


// queueMicrotask(() => {
//     console.log('mic 2', 5);
// })


// console.log('script end', 7);
// const generator2 = generate2();
// generator2.next();
// generator2.next();



// const text = '10010001'

// console.log(String.fromCharCode(text, 10))

// const text = 'My wallet balance is 14,00951 USDT'

// function countBalance(str) {

//   let result = 0;
//   let nbersAfterComa = 1;

//   let isDecimal = false;

//   const zero = '0'.charCodeAt(0);
//   const nine = '9'.charCodeAt(0);

//   const coma = ','.charCodeAt(0)
  

//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);

//     if (charCode >= zero && charCode <= nine) {
//       result = result * 10 + charCode - zero
//       if (isDecimal) {
//         numbersAfterComa *= 10
//       }
//       continue;
//     }
    
//     const nextChar = str.charCodeAt(i + 1);

//     if (charCode === coma && nextChar >= zero && nextChar <= nine) {
//       isDecimal = true;
//       continue;
//     }

//   }

//   return result / numbersAfterComa;
// }

// console.log(countBalance(text))




// async function async1() {
//   console.log('async1 start', 2);
//   async2().then(() => {
//     console.log('async1 end', 8);
//   });
// }

// function async2() {
//   return new Promise(resolve => {
//     resolve();
//     console.log('async2', 3);
//   });
// }

// function* generate() {
//   console.log('generate-1', 11);
//   yield;
//   console.log('generate-1.2', 17);
// }

// function* generate2() {
//   console.log('generate-2', 5);
//   yield;
//   console.log('generate-2.2', 15);
// }

// console.log('script start', 1);

// setTimeout(function () {
//   console.log('setTimeout', 13);
// }, 0);

// const generator1 = generate();

// async1();

// const generator2 = generate2();

// setTimeout(() => {
//   console.log('some timer 1', 14);
// }, 0);

// process.nextTick(() => {
//   console.log('next tick 1', 7);
//   setTimeout(() => {
//     console.log('some timer 2', 16);
//     generator1.next();
//   }, 0);
// });

// queueMicrotask(() => {
//   console.log('microtask 1', 9);
//   setTimeout(() => {
//     console.log('some timer 3', 18);
//   }, 0);
// });

// new Promise(function (resolve) {
//   queueMicrotask(() => {
//     console.log('microtask 2', 10);
//     generator1.next();
//   });

//   console.log('promise1', 4);
//   resolve();
// }).then(function () {
//   console.log('promise2', 12);
// });

// setImmediate(() => {
//   generator2.next();
// });

// generator2.next();
// console.log('script end', 6);










// async function f1() {
//     console.log('async 1', 3)
// }

// function f2() {
//   return new Promise(resolve => {
//     resolve();
//     console.log('async2', 8);
//   });
// }

// function* generate() {
//     console.log('generate-1', 2);
//     yield;
//     console.log('generate-1.2', 12);
//   }
  
// function* generate2() {
//     console.log('generate-2', 3);
//     yield;
//     console.log('generate-2.2', 7);
// }

// const generator1 = generate();
// const generator2 = generate2();

// console.log('start', 1);

// generator1.next()
// generator2.next()

// f1().then(() => {
//     f2().then(() => {
//         console.log('f2 then', 11);
//     })
//     console.log('async func 1', 9);
// })

// console.log('mid', 4); 

// setTimeout(() => {
//     generator1.next()
// }, 0)

// new Promise(function() {
//     console.log('promise 1', 5);
//     queueMicrotask(() => {
//         console.log('microtask 1', 10);
//     })
// })

// process.nextTick(() => {
//     generator2.next()
// })

// console.log('end', 6); 

// const str = '0.000190007';

// function parseNumberFromRightToLeft(str) {
//    const dot = '.'.charCodeAt(0);
//    const zero = '0'.charCodeAt(0);
//    const nine = '9'.charCodeAt(0);
   
//    let res = 0;
//    let counter = 0;

//    let isDecimal = true;

//    for (let i = str.length-1; i >= 0; i--) {
//     let char = str[i].charCodeAt(0);

//     if (isDecimal) {
//         counter++;
//     }

//     if (char >= zero && char <= nine) {
//         res = res + (char - zero) * 10**counter;
//     }
//     if (char == dot) {
//         isDecimal = false;
//     }
//    }

//    console.log(res/10**counter);
// }

// parseNumberFromRightToLeft(str)



// const text = `Max received 2400 USDT.
// Kate received 1900.044 USDT.
// Andrey received 2550.23 USDT.
// Before I confirmed first transaction platform deposit was 11750 USDT.
// Than I send Money to charity 900 USDT and paid for flat 1600.93 USDT`;

// const countBalance = str = { str.split(/[a-z]/gi).map(el => parseFloat(el))
//  .filter(el => !Number.isNaN(el)).sort((a,b) => b-a).reduce((pr, curr) => pr - curr);
// countBalance(text)
