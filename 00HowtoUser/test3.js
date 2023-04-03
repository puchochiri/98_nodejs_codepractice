//toString()으로 문자열을 받을때
/*
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
*/

const fs = require("fs");
let input = fs.readFileSync("./00HowtoUser/input.txt").toString();
input = input.split("\n");
const inputC = +input[0];
const inputTestCase = [];
console.log(input);
// ctrl shift k 줄지우기
console.log(inputC);

for(let i = 1; i <= inputC; ++i){
    const arr = input[i].split(" ").map((item) => +item);
    console.log(i);
    console.log(arr);
    
    let newArr = [];

            
            
  









}
