const subject = `English`;
const book = `english`;

// Uses of toUpperCase() and toLowerCase() Methods

if(subject.toLowerCase() === book.toUpperCase()){
    console.log(`I am reading book and expect that i will achieve a good result`);
}
else{
    console.log(`I was studied hard but it does not work`);
}

const drink = `  Water`;
const water = `Water  `;

// Uses of trim() Method

if(drink.trimStart() === water.trimEnd()){
    console.log(`I would like to drink water`);
}
else{
    console.log(`I would not like to water`);
}