import { TextDecoder } from "util"; // node module
import { Foo } from "custom-module"; // custom module

const decoder = new TextDecoder();
let foo: Foo = {
  bar: "world"
};
console.log("hello", foo.bar);
