function decode(obj) {
  const { pass } = require("./pass");
  const fs = require("fs");
  const abc = fs.readFileSync("randomized-abc.txt", "utf-8");
  const digits = fs.readFileSync("randomized-digits.txt", "utf-8");
  const ranChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ranDigits = "0123456789";

  fs.writeFileSync("abc.txt", abc);
  fs.writeFileSync("digits.txt", digits);
  fs.writeFileSync("randomized-abc.txt", ranChars);
  fs.writeFileSync("randomized-digits.txt", ranDigits);

  return pass(obj);
}
exports.decode = decode;
