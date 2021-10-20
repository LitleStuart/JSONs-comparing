function rename(str) {
  const fs = require("fs");
  const abc = fs.readFileSync("abc.txt", "utf-8");
  const digits = fs.readFileSync("digits.txt", "utf-8");
  const ranChars = fs.readFileSync("randomized-abc.txt", "utf-8");
  const ranDigits = fs.readFileSync("randomized-digits.txt", "utf-8");
  let result = "";
  if (typeof str == "number") {
    str = str.toString();
    for (let i = 0; i < str.length; i++) {
      const digit = str[i];
      result += ranDigits[digits.indexOf(digit)];
    }
    result = result * 1;
  } else {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      result += ranChars[abc.indexOf(char)];
    }
  }
  return result;
}
exports.rename = rename;
