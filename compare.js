function compare(obj1, obj2) {
  const result = {};
  result.obj1 = {};
  result.obj2 = {};
  for (key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        result.obj1[key] = obj1[key];
        result.obj2[key] = obj2[key];
      }
    } else {
      result.obj1[key] = obj1[key];
    }
  }
  for (key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      result.obj2[key] = obj2[key];
    }
  }
  return result;
}

exports.compare = compare;
