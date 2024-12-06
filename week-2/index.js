const fs = require("fs")

const content = fs.readFileSync("b.txt","utf-8")
console.log(content)
const data = fs.readFileSync("a.txt","utf-8")
console.log(data)