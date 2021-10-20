function encode(obj) {
  const fs = require("fs");
  const { pass } = require("./pass");
  const { randomizeChars } = require("./randomizeChars");
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const digits = "0123456789";
  const ranChars = randomizeChars(abc);
  const ranDigits = randomizeChars(digits);

  fs.writeFileSync("abc.txt", abc);
  fs.writeFileSync("digits.txt", digits);
  fs.writeFileSync("randomized-abc.txt", ranChars);
  fs.writeFileSync("randomized-digits.txt", ranDigits);

  return pass(obj);
}
exports.encode = encode;
