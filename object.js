// Primitive => Primary data type
// Basic

const age = 21;
const college = `Modon Mohan College`;
const isPassed = true;

const subjects = [`Bangla`, `English`, `Physics`, `Biology`, `Chemistry`];

// Object => Non-primitive

const school = {
    place: `Shibganj`,
    color: `white`,
    isGood: true
}
console.log(school);

const sub = {
    name: `Biology`,
    teacher: `Dipu Sir`,
    examDate: `30 March`,
    chapters: [`first`, `second`, `third`],
    exams: {
        name: `Final Exam`,
        marks: 100
    }
}
console.log(sub);

// Just one property check

const subName = sub.name;
console.log(subName);

// Properties check

const properties = Object.keys(sub);
console.log(properties);

// delete property

delete sub.examDate;
console.log(sub);

// Check length

let person = {}

person.name = "John";
person.age = 30;

const numberOfProperties = Object.keys(person).length;
console.log(numberOfProperties);