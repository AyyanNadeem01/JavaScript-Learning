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
