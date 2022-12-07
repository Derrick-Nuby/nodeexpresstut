const path = require('path');


// console.log(path.join);
// console.log(path.sep);

// const filepath = path.join('/1st-Tut', 'more', 'ing.txt');
// console.log(filepath);

const absolute = path.resolve(__dirname, '/1st-Tut', 'more', 'ing.txt');
console.log(absolute);