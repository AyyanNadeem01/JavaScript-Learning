const fruits = ["Banana", "Orange", "Apple", "Mango"];

let size = fruits.length;
console.log(size);
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
let varnew = 2;
let myList = varnew.toString();
console.log(myList);

console.log(fruits.at(2));
fruits[1] = "banana";
console.log(fruits);
console.log(fruits.join(" * "));
const newarray9 = ["2", "23", "54", "90"];
newarray9.push(10, 321, 232, 11, 12);
console.log(newarray9);
newarray9.pop();
console.log(newarray9);
newarray9.shift();
console.log(newarray9);
newarray9.unshift(921, 19, 21312);
console.log(newarray9);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((item) => item * 10);
console.log(newArr);
const newArr2 = myArr.flatMap((item) => [item, item * 10]);
console.log(newArr2);

const newArr3 = [23, 43, 12, 23];
newArr3.splice(2, 0, "lemon", "kiwi");
console.log(newArr3);

const newArr4 = ["banana", "apple", "orange", "papaya", "kiwi"];
newArr4.splice(newArr4.length - 1, 1);
console.log(newArr4);

const testtoSpliced = [1, 2, 3, 4, 5, 6];
const testtoSpliced1 = testtoSpliced.toSpliced(0, 1);
console.log(testtoSpliced);
console.log(testtoSpliced1);

const arrToBeSearched = [2, 2, 1323, 2, 132];
e1 = arrToBeSearched.find((item) => item > 10);
console.log(e1);

const vIndex = arrToBeSearched.findIndex((val) => val > 10);
console.log(vIndex);

//iterating arrays:
const number0 = [34, 232, 43, 5, 432, 3];
number0.forEach((item, index) => {
  number0[index] = item * 2;
});
console.log(number0);

const newArr9 = [2, 323, 32, 323, 2];
newArr10 = newArr9.map((item) => item * 10);
console.log(newArr9);

const flatmapping = [23, 4, 6, 65, [20], 55];
const newAfterMap = flatmapping.map((x) => x * 2);
console.log(flatmapping);
console.log(newAfterMap);

const testarray = [12, 132, 654, 4654];
const newArr11 = testarray.filter((item) => item > 500);
console.log(newArr11);

const testarray1 = [4324, 3423, 434, 342];
let sum = 0;
testarray1.forEach((item) => (sum = sum + item));
console.log(sum);

const testArray2 = [32, 2, 2, 3];
let val = testArray2.reduce((item, acc) => (acc = acc + item));
console.log(val);

const everyTest = [342, 43, 43, 34];
valret = everyTest.every((item) => item > 100);
console.log(valret);

const someTest = [342, 43, 43, 34];
valret = someTest.every((item) => item > 100);
console.log(valret);

const text9 = "abcdef";
console.log(Array.from(text9));

const newfruits = ["apple", "banana", "orange", "kiwi"];
const keys = newfruits.keys();
for (let x of keys) {
  console.log(x);
}
const entries = newfruits.entries();
for (let [key, val] of entries) {
  console.log(key, val);
}
const entries2 = newfruits.entries();
for (let x of entries2) {
  console.log(x[0], x[1]);
}
const arr12 = [12, 2, 43];
const arr22 = [34, 34, 32];
const arr1222 = [...arr12, ...arr22];
console.log(arr1222);

console.log(arr12.concat(arr22));

//PROBLEMS;:
function truncateArray(arr, size) {
  return (arr = arr.slice(0, size));
}
testArray101 = [2, 31, 23, 123, 232];
console.log(truncateArray(testArray101, 2));

function AddUsingLength(arr, value) {
  arr[arr.length] = value;
  return arr; //original array also changed
}
const newArr8 = [4, 45, 3, 3, 4332, 32, 1];
console.log(AddUsingLength(newArr8, 10));

function clearArray(arr) {
  arr.length = 0;
}
const newarray12 = [3, 22, 232, 2];
console.log(newarray12);
clearArray(newarray12);
console.log(newarray12);
