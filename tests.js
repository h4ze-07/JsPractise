// // const text3 = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';
// const text4 = '<@Kate />:apple::apple:'


// function countEmoji(message, emoji) {
//     let result = {}

//     let start = '@'.charCodeAt(0);
//     let finish = '/'.charCodeAt(0);
//     let currentName = '';
//     let emojiCount = 0;

//     let emojiStart = ':'.charCodeAt(0)

//     let isCheckingName = false; 
//     let isCheckingEmoji = false;
//     let isCheckingCounter = false;
//     let isCheckingChain = false;

//     let constrEmoji = '';

//     for (let i = 0; i < message.length; i++) {
//         const charCode = message.charCodeAt(i);
       

//         if (start === charCode) {
//             isCheckingName = true;
//             isCheckingChain = true;
//         }

//         if (emojiStart === charCode) {
//             isCheckingEmoji = true;
//             isCheckingCounter = true;
//         }

//         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) && isCheckingName) {
            
//             let loweredChar = charCode;

//             if (loweredChar <=90) {
//                 loweredChar = String.fromCharCode(loweredChar + 32);
//             } else {
//                 loweredChar = String.fromCharCode(loweredChar)
//             }

//             currentName += loweredChar
//         }
        
//         if (finish === message.charCodeAt(i)) {
//             isCheckingName = false
//         }
        

//         if (((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) && isCheckingEmoji && isCheckingCounter) {
//             constrEmoji += message[i];
//             if (constrEmoji === emoji && isCheckingCounter && isCheckingEmoji) {
//                 constrEmoji = '';
//                 emojiCount++;
//                 console.log(emojiCount);
//                 isCheckingEmoji = false;
//             } 
//             else if (constrEmoji !== '' && charCode === emojiStart) {

//             }
//         }




//         if (currentName !== '' && !isCheckingName) {
//             result[currentName] = emojiCount;
//             currentName = '';
//             emojiCount = 0;
//         }  
//     }


//     return result;
// }



// console.log(countEmoji(text4, 'apple'));



let err = new Error;

console.log(err);

let u = undefined;

console.log(u);

let n = null;
console.log(n);

let i = Infinity;
console.log(i);

function foo() {
    return
}

console.log(typeof i, typeof n, typeof u, typeof err, typeof foo);

console.log(null instanceof err);

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
isObj()
