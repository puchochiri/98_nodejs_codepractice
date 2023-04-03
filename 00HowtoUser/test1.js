// nodejs 테스트 하는법
// ./ 현재폴더
// / 루트
// ../상위폴더
console.log("__dirname");

console.log(__dirname);
const fs = require("fs");
//const filePath = process.platform === "linux" ? "/dev/stdin" : "c:/Users/doawi/Documents/01. 개발/01. react 개빌/01. ws/01.todoapp/nodejs_codepractice/00HowtoUser/input.txt";
const filePath = process.platform === "linux" ? "/dev/stdin" : "./00HowtoUser/input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
console.log(input);
console.log('Hello World!');


