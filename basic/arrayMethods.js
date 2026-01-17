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

//Combined Problems:
function cleanUsers(users) {
  const result = [];
  users
    .map((u) => u.trim())
    .filter((u) => u !== "")
    .forEach((u) => {
      if (!result.includes(u)) {
        result.push(u);
      }
    });
  return result.sort();
}
const users = ["  Ali ", "", "Sara", "ali", "Sara ", "  "];

console.log(cleanUsers(users));

//
cart = ["Milk", "Bread"];
action = { type: "ADD", item: "Eggs" };

function updateCart(cart, action) {
  if (action.type === "ADD") {
    cart.push(action.item);
  } else if (action.type === "REMOVE_LAST") {
    cart.pop();
  } else if (action.type === "CLEAR") {
    cart.length = 0;
  } else {
    return "Invalid";
  }
}
console.log(cart);
updateCart(cart, { type: "ADD", item: "Biryani" });
console.log(cart);
updateCart(cart, { type: "REMOVE_LAST", item: "Biryani" });
console.log(cart);
updateCart(cart, { type: "CLEAR" });
console.log(cart);

//
function analyzeScores(score) {
  score = score.filter((i) => i >= 0);
  let sum = score.reduce((s, ac) => ac + s);
  let avg = sum / score.length - 1;
  let highest = Math.max(...score);
  const hasinv = score.some((s) => s > 100);
  return { average: avg, max: highest, hasInvalid: hasinv };
}
console.log(analyzeScores([90, 70, -10, 100, 85]));
//
function formatMessage(msg) {
  return msg
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
console.log(formatMessage("   hello   world   from  js  "));

//
function inventorySystem(inv, soldItems) {
  return inv.filter((item) => !soldItems.includes(item)).toSorted();
}
inventory = ["Pen", "Pencil", "Eraser", "Scale"];
soldItems = ["Pencil", "Scale"];
console.log(inventorySystem(inventory, soldItems));

function processEmails(emails) {
  const domains = [];

  emails
    .filter((e) => e.includes("@"))
    .map((e) => e.split("@")[1])
    .forEach((domain) => {
      if (!domains.includes(domain)) {
        domains.push(domain);
      }
    });

  return domains;
}
console.log(
  processEmails([
    "user@gmail.com",
    "admin@yahoo.com",
    "test@gmail.com",
    "invalidEmail",
    "hello@yahoo.com",
  ]),
);

function transform(arr) {
  return arr
    .flat()
    .filter((item) => Number(item))
    .map((item) => item ** 2)
    .reverse();
}
testarray102 = [1, "a", [2, 3], null, 4];
console.log(transform(testarray102));

[
  "",
  "User logged in",
  "Error occurred",
  "File uploaded",
  "User logged out",
  "Server restarted",
  "",
];
("0: Error occurred | 1: File uploaded | 2: User logged out | 3: Server restarted");

function analyzeLogs(logs) {
  return [
    ...logs
      .filter((l) => l !== "")
      .slice(-5)
      .entries(),
  ]
    .map(([i, l]) => `${i}: ${l}`)
    .join(" | ");
}

console.log(
  analyzeLogs([
    "",
    "User logged in",
    "Error occurred",
    "File uploaded",
    "User logged out",
    "Server restarted",
    "",
  ]),
);

const students = [
  { name: "Ali", marks: 78 },
  { name: "Sara", marks: 92 },
  { name: "Zara", marks: 85 },
  { name: "John", marks: 92 },
  { name: "Liam", marks: 88 },
];
function findTop3(students) {
  return students
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 3)
    .map((item) => item.name);
}

console.log(findTop3(students));

//
const products = [
  [101, 102],
  [103, 101],
  [104, 102, 105],
];
function simplify(products) {
  final = [];
  products
    .flat()
    .sort()
    .map((item) => {
      if (!final.includes(item)) {
        final.push(item);
      }
    });
  return final;
}
console.log(simplify(products));

//
function restockAlert(inventory) {
  return inventory.filter((item) => item.qty < 5).map((item) => item.name);
}
const inventory1 = [
  { name: "Apple", qty: 10 },
  { name: "Orange", qty: 2 },
  { name: "Mango", qty: 0 },
  { name: "Banana", qty: 7 },
];
console.log(restockAlert(inventory1));

const emails1 = [
  "ali@gmail.com",
  "sara@yahoo.com",
  "zara@gmail.com",
  "john@hotmail.com",
  "emma@gmail.com",
];

function countDomains(emails) {
  return emails.reduce((acc, email) => {
    const domain = email.split("@")[1]?.split(".")[0];
    if (domain) acc[domain] = (acc[domain] || 0) + 1;
    return acc;
  }, {});
}

console.log(countDomains(emails1));

//
const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi",
  "kiwi",
];
function topWords(words) {
  const freq = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  console.log(freq);
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word)
    .slice(0, 5);
}
console.log(topWords(words));

function removeInvalid(data) {
  return data.flat(Infinity).filter((item) => Number(item));
}

const data = [1, "a", [2, "b"], [3, [4, "c"]], 5];
console.log(removeInvalid(data));

const arr103 = [1, 2, 3, 4, 5];
const k = 2;
function rotateArray(arr, k) {
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
console.log(rotateArray(arr103, k));
//
const array104 = [1, 2, 3, 4, 5];
const array105 = [2, 4, 6];
function arrayDifference(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
console.log(arrayDifference(array104, array105));

function movingAverage(arr, windowSize) {
  const result = [];
  for (let i = 0; i <= arr.length - windowSize; i++) {
    const sum = arr.slice(i, i + windowSize).reduce((a, b) => a + b, 0);
    result.push(sum / windowSize);
  }
  return result;
}

const nums = [10, 20, 30, 40, 50];
console.log(movingAverage(nums, 3));

const logs = [
  { user: "Ali", action: "login" },
  { user: "Sara", action: "login" },
  { user: "Ali", action: "logout" },
  { user: "Ali", action: "login" },
  { user: "Sara", action: "logout" },
];

const loginCounts = logs.reduce((acc, curr) => {
  if (curr.action === "login") {
    acc[curr.user] = (acc[curr.user] || 0) + 1;
  }
  return acc;
}, {});

const result = Object.fromEntries(
  Object.entries(loginCounts).filter(([user, count]) => count >= 2),
);

console.log(result);

const products10 = [
  { name: "Laptop", price: "1200$" },
  { name: "Phone", price: "800$" },
  { name: "Tablet", price: "500$" },
];
function productNormalizer(product10) {
  return product10
    .map((item) => {
      return { name: `${item.name}`, price: `${parseFloat(item.price)}` };
    })
    .map((item) => {
      return { name: `${item.name}`, price: `${item.price * 0.9}` };
    })
    .sort((a, b) => a.price - b.price);
}
console.log(productNormalizer(products10));

const data10 = [1, "a", [2, null, [3, undefined, [4, "b"]]], false, 5];
function DeepDataCleaner(data) {
  return data
    .flat(Infinity)
    .filter((item) => Number(item))
    .sort();
}
console.log(DeepDataCleaner(data10));

const messages = [
  "Hi",
  "",
  "Hello there",
  "How are you?",
  "",
  "I am fine",
  "Bye",
];
function messageSummarizer(msg) {
  return [
    ...msg
      .filter((item) => item !== "")
      .slice(-3)
      .entries(),
  ]
    .map(([index, item]) => `${index}: ${item}`)
    .join("|");
}
console.log(messageSummarizer(messages));

const orders = [
  {
    id: 1,
    items: [
      { price: 100, qty: 2 },
      { price: 50, qty: 1 },
    ],
  },
  { id: 2, items: [{ price: 200, qty: 1 }] },
];
function orderTotalCalculator(orders) {
  return orders.map((order) => {
    const total = order.items.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    return {
      orderId: order.id,
      total,
    };
  });
}

console.log(orderTotalCalculator(orders));

const posts = [
  { title: "JS Basics", tags: ["js", "programming"] },
  { title: "Advanced JS", tags: ["js", "advanced"] },
  { title: "Web Dev", tags: ["html", "css", "js"] },
];

function tagFrequencyEngine(post) {
  return post
    .flatMap((item) => item.tags)
    .reduce((acc, i) => {
      acc[i] = (acc[i] || 0) + 1;
      return acc;
    }, {});
}
console.log(tagFrequencyEngine(posts));


const sessions = [
  { user: "Ali", start: 10, end: 40 },
  { user: "Sara", start: 5, end: 20 },
  { user: "Ali", start: 50, end: 70 }
];
function sessionDurationCalculator(session){
  return session.reduce((acc,i)=>{
    acc[i.user]=(acc[i.user]||0)+(i.end-i.start)
    return acc
  },{})
}
console.log(sessionDurationCalculator(sessions))