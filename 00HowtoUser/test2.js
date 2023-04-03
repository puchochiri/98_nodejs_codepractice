//toString()으로 문자열을 받을때
/*
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
*/

const fs = require("fs");
let input = fs.readFileSync("./00HowtoUser/input.txt").toString();
console.log(input);
