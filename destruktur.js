let fff = [1, 2, 4]

console.log({'hi': {...fff}});

let users = ["user11", "user12", "user13"];
const [name1, name2, name3] = users;

console.log(name1, name2, name3);


//DEST




let dObj = {
    name: 'Vlad',
    age: 20,
    job: 'Frontend',
    skills: {
        hard: ['js', 'react'],
        soft: 'skills'
    }
}


let {hard, soft} = dObj.skills

let {skills, ...others} = dObj;

let newDobj = {...skills, others}

console.log(newDobj);

newDobj.hard.push('html')
newDobj.others.age = 21


console.log(newDobj);
console.log(dObj);

console.log(others);

console.log(hard, soft);



const f = ({fr: job, name, age = 20}) => {
    console.log(name, age, job);
}

f({fr: 'front', name: 'V'})


let simpleObject = {
    name: 'ee',
    age: 37
}

let simpleArr = [
    'hello', 'there'
]

let [firstA, secondA] = simpleArr;
let {firstO, secondO} = simpleObject;

console.log(firstA, secondA) //hello there
console.log(firstO, secondO) //undefined undefined