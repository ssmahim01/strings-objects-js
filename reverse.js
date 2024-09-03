// Reverse

const sentence = `I am a web developer`;
let reverse = ``;

for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);

// Shortcut reverse

const reversed = sentence.split(``).reverse().join(``);
console.log(reversed);