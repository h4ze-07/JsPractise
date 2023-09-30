const pers = {
    name: 'vald',
    age: 20,
    'last name': 'Bb' //ЕСЛИ СВОЙСТВО ДОЛЖНО СОСТОЯТЬ ИЗ НЕСКОЛЬКИХ СЛОВ, ТО ОНО ОБОРАЧИВАЕТСЯ В КАВЧКИ
}
// console.log(pers["last name"]); // И ВЫВОДИТСЯ ТАК

const test = {
    'f name': 'vlad',
    'my age': '20',
    'my job': 'frontend',
    'my hobby': "sport",
    'my dream': 'car'
}

// console.log(test['f name'], test['my age'], test['my job']);




const test2 = {
    name: 'me',
    age: 'some age',
    '121': '121',
    1: 1,
    21.5: 21.5,
    true: false
}

for (const key in test2) {
    console.log(test2[key]); // ЦЕЛЫЕ ЧИСЛА БУДУТ ОТ БОЛЬШЕГО К МЕНЬШЕМУ ВЫВОДИТСЯ ПЕРВЫМИ, ВСЕ ОСТАЛЬНЫЕ ЗНАЧЕНИЯ ПО ОЧЕРЕДИ
}




const user1 = {
    name: 'name',
    age: 20
}

const user2 = {...user1} //ДЕСТРУКТУРИЗАЦИЯ ПЕРЕСОЗДАЁТ НОВУЮ ССЫЛКУ НА ОБЪЕКТ(СВОЙСТВА БУДУТ НЕЗАВИСИМЫМИ)
user2.age = 25

// console.log(user1);
// console.log(user2);


// Map, SET


const mapObj = {
    name: 'user',
    age: 20
}

const mapARR = [1, 2, 3, 4]

console.log(Object.entries(mapARR))

console.log(Object.entries(mapObj));

// let map = new Map(
//     [
//         Object.entries(mapARR),
//         Object.entries(mapObj)
//     ]
// )

// map.forEach((value, key) => {
//     console.log(key, value);
// })

// console.log(map.get())

const newMap = new Map ([
    ['key', "value"],
    ['hi', 'Hello']
])

// console.log(newMap.get('key'));

newMap.set('newKey', 'newValue')

// console.log(newMap);


const objMap = new Map(Object.entries(mapObj))
console.log(objMap);
objMap.set('key', "value")
console.log(objMap.has('age'))
objMap.delete('age')
objMap.set('1', 1)

// console.log(objMap);

const newObj = Object.fromEntries(objMap)
// console.log(objMap);
// console.log(newObj);

for (let v of objMap.values()) {
    console.log(v);
}

objMap.forEach((value, key, map) => {
    console.log(value, key);
})


const arrFm = Array.from(objMap)

console.log(Object.entries([1, 2, 3, 4, 5]));
console.log(arrFm);

//===========================================================

const set = new Set('sysysystsysdfsdf')
const arrS = new Set([1, 1, 1, 1, '1', 1])
// console.log(set);
// console.log(arrS);

for (let i of set) {
    // console.log(i);
}


set.forEach((value, valueAgain) => {
    // console.log(value, valueAgain); //У СЕТА КЛЮЧ И ОБЪЕКТ ЭТО ОДИНАКОВЫЕ ЗНАЧЕНИЯ
})

set.clear()
console.log(set);