"use strict";

function isTruthy(value) {
  if (
    value === 0 ||
    value === 0 ||
    value === "" ||
    value === null ||
    value === undefined ||
    value === -0 ||
    value === 0n ||
    value === -0n ||
    value === NaN
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(isTruthy([]));

function canLogin(username) {
  if (username === "" || username === null || username === undefined) {
    return false;
  } else {
    return true;
  }
}
console.log(canLogin("talha"));

function displayName(name) {
  if (
    name === 0 ||
    name === null ||
    name === "" ||
    name === undefined ||
    name === -0 ||
    name === 0n ||
    name === -0n ||
    name === NaN
  ) {
    return false;
  } else {
    return name;
  }
}
console.log(displayName("ayyan"));
console.log(displayName(0));

function isValidPrice(price) {
  if (
    price === 0 ||
    price === null ||
    price === "" ||
    price === undefined ||
    price === -0 ||
    price === 0n ||
    price === -0n ||
    price === NaN
  ) {
    return false;
  } else {
    return price;
  }
}
console.log(isValidPrice(0));
console.log(isValidPrice(null));
console.log(isValidPrice(250));
console.log(isValidPrice(undefined));

function hasItems(arr) {
  if (arr.length > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(hasItems([12]));

function isFieldValid(value) {
  if (value === " " || value === "" || value === null || value === undefined) {
    return false;
  } else {
    return true;
  }
}
console.log(isFieldValid());

function runIfExist(callback) {
  if (callback) {
    callback();
  } else {
    console.log("No callback function provided");
  }
}
function sayHello() {
  console.log("Hello");
}
runIfExist();
runIfExist(sayHello);

function featureStatus(isEnabled) {
  return isEnabled !== false;
}

function looseNotStrictEqual(a, b) {
  if (a == b) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}
//looseNotStrictEqual(0,"0")
//looseNotStrictEqual(false,0)
looseNotStrictEqual([], 0);

function filterTruthy(arr) {
  return arr.filter((item) => item);
}
console.log(filterTruthy([0, 1, 3, "", "hello"]));

function defaultValue(value, defaultVal) {
  if (value === 0 || value) {
    return value;
  } else if (defaultVal === 0 || defaultVal) {
    return defaultVal;
  }
  return;
}
console.log(defaultValue("", 24));

function hasNestedTruthy(obj, key1, key2) {
  if (obj[key1] && obj[key1][key2]) {
    return true;
  } else {
    return false;
  }
}
console.log(hasNestedTruthy({ a: { b: 10 } }, "a", "b"));

function allFalsy(arr) {
  let newarr = arr.filter((item) => item);
  if (newarr.length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(allFalsy([0, "", null, NaN]));
console.log(allFalsy([0, "", null, 10]));

async function runLazy(callback) {
  if (typeof callback === "function") {
    await callback();
  } else {
    console.log("No callback");
  }
}

await runLazy(() => console.log("Hello"));

function compareLooseStrict(a, b) {
  if (a == b && a !== b) {
    console.log("Equal");
  } else {
    console.log("Not Equal");
  }
}
compareLooseStrict(1, 1);
function filterTruthy(arr) {
  return arr.filter((item) => item);
}
console.log(filterTruthy([0, 1, "", "hello", [], {}]));
function defaultValue(value, defaultVal) {
  if (value === 0 || value) {
    return value;
  } else if (defaultVal) {
    return defaultVal;
  }
}
console.log(defaultValue(0, 10));
console.log(defaultValue("", 5));
console.log(defaultValue(null, 20));

function hasNestedTruthy(obj, key1, key2) {
  if (obj[key1] && (obj[key1][key2] || obj[key1][key2] === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(hasNestedTruthy({ a: { b: 0 } }, "a", "b"));
console.log(hasNestedTruthy({ a: { b: 10 } }, "a", "b"));
console.log(hasNestedTruthy({ a: {} }, "a", "b"));

function allFalsy(arr) {
  let newarr = arr.filter((item) => item);
  if (newarr.length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(allFalsy([0, "", null, NaN]));
console.log(allFalsy([0, 1, null]));

async function runLazy(callback) {
  if (typeof callback === "function") {
    await callback();
  } else {
    console.log("callback not found");
  }
}
await runLazy(() => console.log("Hello"));
await runLazy();

function isFieldValid(value) {
  if (value && value.trim()) {
    return true;
  } else {
    return false;
  }
}
console.log(isFieldValid("  ")); // false
console.log(isFieldValid("Hello")); // true
console.log(isFieldValid(null)); // false

function featureStatus2(isEnabled) {
  return isEnable !== false;
}
console.log(featureStatus());
console.log(featureStatus(true));
console.log(featureStatus(false));

function arrayEqualsFalse(arr) {}
console.log(arrayEqualsFalse([]));
console.log(arrayEqualsFalse([0]));
console.log(arrayEqualsFalse([1]));

function arrayEqualsFalse(arr) {
  return arr == false;
}

console.log(arrayEqualsFalse([]));
console.log(arrayEqualsFalse([0]));
console.log(arrayEqualsFalse([1]));

function nestedDefault(obj, key1, key2, defaultVal) {
  if (!obj[key1]) {
    return defaultVal;
  } else if (obj[key1][key2] || obj[key1][key2] === 0) {
    return obj[key1][key2];
  } else {
    return defaultVal;
  }
}
console.log(nestedDefault({ a: { b: 0 } }, "a", "b", 100));
console.log(nestedDefault({ a: {} }, "a", "b", 100));
console.log(nestedDefault({}, "a", "b", 50));

let user = {
  name: "",
  address: { city: null, zip: 12345 },
  roles: ["user"],
};
function getUserInfo(u) {
  return {
    username: u?.name,
    city: u?.address.city,
    firstRole: u?.roles[0],
  };
}
console.log(getUserInfo(user));

function processPayment(payment) {
  return ((payment ?? payment?.amount === 0) && "Processed") || "Skipped";
}

// Test cases
console.log(processPayment(null)); // "Skipped"
console.log(processPayment({ amount: 0 })); // "Processed"
console.log(processPayment({ amount: 50 })); // "Processed"
function roleMessage(role) {
  const r = role ?? "";

  switch (r) {
    case "admin":
      return "Admin Access";
    case "editor":
      return "Editor Access";
    case "viewer":
      return "Viewer Access";
    default:
      return "Guest Access";
  }
}

// Test cases
console.log(roleMessage("admin")); // "Admin Access"
console.log(roleMessage("editor")); // "Editor Access"
console.log(roleMessage("viewer")); // "Viewer Access"
console.log(roleMessage(null)); // "Guest Access"
console.log(roleMessage(undefined)); // "Guest Access"
console.log(roleMessage("")); // "Guest Access"

let config = {
  features: {
    darkMode: false,
    beta: true,
  },
};

console.log(
  ((config.features?.darkMode && "Enabled") ||
    (config.features?.beta && "Beta Unknown")) ??
    "Disabled"
);

let logger1 = { log: (msg) => console.log("LOG:", msg) };
let logger2 = {};
logger1.log?.("Hello") || console.log("Logger missing");
logger2.log?.("Hello") || console.log("Logger missing");
