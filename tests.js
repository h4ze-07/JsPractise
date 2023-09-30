// const text3 = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';
// const text4 = '<@Kate />:apple:'


// function countEmoji(message, emoji) {
//     let result = {}

//     let start = '@'.charCodeAt(0);
//     let finish = '/'.charCodeAt(0);
//     let currentName = '';
//     let emojiCount = 0;

//     let emojiStart = ':'.charCodeAt(0)

//     let isCheckingName = false; 
//     let isCheckingEmoji = false;

//     let constrEmoji = '';

//     for (let i = 0; i < message.length; i++) {
//         const charCode = message.charCodeAt(i);
       

//         if (start === charCode) {
//             isCheckingName = true;
//         }

//         if (emojiStart === charCode) {
//             isCheckingEmoji = true;
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
        



//         if (currentName !== '' && !isCheckingName) {
//             result[currentName] = emojiCount;
//             currentName = '';
//             emojiCount = 0;
//         }  
//     }


//     return result;
// }



// let obj = countEmoji(text3, 'apple');

// console.log(obj);



//=============================================================
// My wallet balance is 14690 USDT. 

