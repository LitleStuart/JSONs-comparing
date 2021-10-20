const fs = require("fs");
const { compare } = require("./compare");
var person1 = JSON.parse(fs.readFileSync("person1.json").toString());
var person2 = JSON.parse(fs.readFileSync("person2.json").toString());
const difference = compare(person1, person2);
console.log(difference);
