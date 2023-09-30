function split(text, divider) {
    let res = [];
    
    if (divider == null) {
        return [text];
    } 

    let part = '';
    let dividerInd = 0;

    for (let i = 0; i < text.length; i++) {
        if (divider === '') {
            res.push(text[i]);
        } else if (text[i] !== divider[dividerInd]) {
            part += text[i];
        } else {
            if (dividerInd === divider.length - 1) {
                res.push(part);
                part = '';
                dividerInd = 0;
            } else {
                dividerInd++;
            }
        }
    }

    if (part !== '') {
        res.push(part);
    }

    return res;
}



console.log(split('abc123def456ghi', '123'));
console.log('abc123def456ghi'.split('123'));


console.log(split('123123123'));
console.log('123123123'.split());


console.log(split('wasdwasdwasd', '1'));
console.log('wasdwasdwasd'.split('1'));