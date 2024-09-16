console.log("hello Typescript");

const num: number = 20;
const str: string = "moon";
const isbool: boolean = true;

console.log("num value", num);
console.log("str value", str);
console.log("num value", isbool);

function add(a: number, b: number): number {
  return a + b;
}
const y: number = add(100, 400);

console.log("ADD", y);

const add2 = (a: number, b: number): number => {
  return a + b;
};

const myprint = (text: string): void => {
  console.log("hello", text);
};

const s = add2(200, 300);

myprint("welcome");
