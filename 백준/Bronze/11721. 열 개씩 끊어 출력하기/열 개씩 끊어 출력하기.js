const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();


for (let i = 0; i <= input.length; i+=10) {  
	console.log(input.slice(i, i + 10).toString());
}
