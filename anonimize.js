const fs = require("fs");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const dict = new Map();
function rename(str) {
  let result = "";
  if (dict.has(str)) {
    result = dict.get(str);
  } else {
    if (typeof str === "number") {
      const epsilon = 999999999;
      result = getRandomInt(epsilon);
    } else {
      str = str.toString();
      const abc =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 8; i++) {
        result += abc[getRandomInt(abc.length)];
      }
    }
    dict.set(str, result);
  }
  return result;
}

function anonimize(obj) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = anonimize(obj[i]);
    }
    return obj;
  }
  if (typeof obj === "object") {
    const result = {};
    for (const key in obj) {
      result[rename(key)] = anonimize(obj[key]);
    }
    return result;
  }
  return rename(obj);
}

const result = [];
for (const key of dict) {
  result.push(key);
}
fs.writeFileSync("dict.json", JSON.stringify(result));
