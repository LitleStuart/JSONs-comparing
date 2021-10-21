// 1. получаю объект
// 2. бегу по свойствам
// 3. если свойство есть в Мар(), то заменить им
// 4. если нет, то свойство анонимизировать
// 5. результат сохранить в Мар()
// 6. Мар() сохранить в файл
// 7. возвратить объект
const dict = new Map();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function rename(str) {
  let result = "";
  if (dict.has(str)) {
    result = dict.get(str);
  } else {
    if (typeof str === "number") {
      const digits = "0123456789";
      str = str.toString();
      for (let i = 0; i < 4; i++) {
        result += digits[getRandomInt(digits.length)];
      }
      str *= 1;
      result *= 1;
    } else {
      str = str.toString();
      const abc =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < 5; i++) {
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

console.log(
  anonimize({
    qwe: [1, 2, "asdasd", 2, "qwe", { asdasd: 1, qwe: "asd" }, true],
  })
);
