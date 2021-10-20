function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function randomizeChars(str) {
  let result = "";
  while (str != "") {
    const char = str[getRandomInt(str.length)];
    result += char;
    str = str.replace(char, "");
  }
  return result;
}
exports.randomizeChars = randomizeChars;
