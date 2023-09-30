function includes(text, matchStr, index) {

    let start = index || 0;
    let matches = false;


    for (let i = start; i < text.length; i++) {
        
        let res = '';

        for (let j = 0; j < matchStr.length; j++) {
            res += text[i+j];
        }

        if (res === matchStr) {
            matches = true
            break;
        }

    }
    console.log(matches);
    return matches;
}

includes('wasd', 'sd', 0)
console.log('wwasd'.includes('sd', 0));



console.log(includes('wasd', 'wa', 0)); // true
console.log(includes('wasd', 'sd', 0)); // true
console.log(includes('wasd', 'abc', 0)); // false
console.log(includes('wasd', 'w', 0)); // true
console.log(includes('wasd', 'w', 2)); // false

console.log('wasd'.includes('wa', 0)); // true
console.log('wasd'.includes('sd', 0)); // true
console.log('wasd'.includes('abc', 0)); // false
console.log('wasd'.includes('w', 0)); // true
console.log('wasd'.includes('w', 2)); // false