const myInfo = require('./information');
const cowsay = require('cowsay');

const message = `Hello, my name is ${myInfo.name} and I'm from the ${myInfo.campus} campus.`;

console.log(cowsay.say({ text: message }));