// Change values

const person = {
    age: 21,
    profession: 'developer',
    salary: 30000,
    married: false,
    'fav framework': ['Tailwind', 'React']
}

person.salary = 35000;
person['fav framework'] = ['Tailwind', 'React', 'Bootstrap'];
console.log(person);

// Check values

const values = Object.values(person);
console.log(values);