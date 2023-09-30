const str = 'abcd 8944209'

function searchInt(s) {

    const radix = 10;
    let strNum = new String;

    for (let i of s) {
        
        if (i.charCodeAt()-48 >= 0 && i.charCodeAt()-48 <= 9) {
            strNum += i
        }
    }

    let len = strNum.length
    let result = 0;

    for (let i of strNum) {
        let digit = i.charCodeAt() - 48;
        if (digit === 0) {
            result += 0
        } else {
            result += digit * (radix ** (len - 1))
        }
        
        len--;
        if (len === 0) {
            break;
        }
    }

    console.log(result)
    return result
}

searchInt(str)