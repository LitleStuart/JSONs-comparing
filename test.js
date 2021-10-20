const { encode } = require("./encode");
const { decode } = require("./decode");

const obj = [
  { name: "Ivan" },
  { name: "Ivan", arr: [0, 1, 2, 3, 4, 5] },
  { name: "Ivan", obj: { abc: "asd", qwe: 123 } },
  {
    name: "Ivan",
    arr: [0, 1, { arr: [1, 2, 3, 4, 5], obj: { qwerty: "uyt" } }],
  },
  {
    name: "Ivan",
    obj: { abc: "asd", arr: [{ id: 784 }, { id: "uyghbj" }] },
  },
];
const a = encode(obj);
console.log(decode(a));
