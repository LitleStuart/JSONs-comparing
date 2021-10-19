function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomizeChars(abc) {
  abc = abc.split("");
  const chars = [];
  const len = abc.length;
  for (let i = 0; i < len; i++) {
    const char = abc[getRandomInt(abc.length)];
    chars.push(char);
    abc.splice(abc.indexOf(char), 1);
  }
  return chars;
}

const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const ranChars = randomizeChars(abc);

function rename(str) {
  str = str.toString();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += ranChars[abc.indexOf(char)];
  }
  return result;
}

function anonimize(obj) {
  const result = {};
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] == "object") {
        obj[i] = anonimize(obj[i]);
      } else {
        obj[i] = rename(obj[i]);
      }
    }
    return obj;
  } else {
    for (key in obj) {
      if (typeof obj[key] == "object") {
        result[rename(key)] = anonimize(obj[key]);
      } else {
        result[rename(key)] = rename(obj[key]);
      }
    }
    return result;
  }
}
exports.anonimize = anonimize;
