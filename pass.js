function pass(obj) {
  const { rename } = require("./rename");
  const result = {};
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] == "object") {
        obj[i] = pass(obj[i]);
      } else {
        obj[i] = rename(obj[i]);
      }
    }
    return obj;
  } else {
    for (key in obj) {
      if (typeof obj[key] == "object") {
        result[rename(key)] = pass(obj[key]);
      } else {
        result[rename(key)] = rename(obj[key]);
      }
    }
    return result;
  }
}
exports.pass = pass;
