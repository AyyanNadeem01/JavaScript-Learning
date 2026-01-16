//(1)8,1,0,2,
//(2)
function isPasswordValid(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
console.log(isPasswordValid("abc"));
console.log(isPasswordValid("password"));
console.log(isPasswordValid("12345678"));
//(3)
//""
//undefined
//undefined
let text = "HELLO";

//(4)
//D
//D
//D

//(5)
//65
//66
//67

//(6)
//1
//code
//code 2,

//because the second return the ascii value and the codepointat will return 2 because 2point difference between asci value

//(7)
let first = "Ayyan";
let last = "Nadeem";
console.log(first.concat(" ", last));

//(8)
let result = "".concat("JS", " ", "Strings", " ", 101);
console.log(result);
//because it was converted in string

//(9)
let text2 = "Apple, Banana, Kiwi";
console.log(text2.slice(7, 13));
console.log(text2.slice(7));
console.log(text2.slice(-4));
console.log(text2.slice(-12, -6));

console.log(text2.slice(-3));

let str = "JavaScript";

console.log(str.substring(4, 10));
console.log(str.substring(-4, 4));
//in substring it is convert into 0 if negative
//(10)
const newword = "this is amazing";
console.log(newword.slice(-3));
//(11)
let str2 = "JavaScript";

console.log(str2.substring(4, 10));
console.log(str2.substring(-4, 4));

//(12)
console.log("hello".substring(3, 1));

//(13)
let email = "Ayyan@GMAIL.com";
function normalizeEmail(email) {
  return email.toLowerCase();
}
console.log(normalizeEmail(email));
//(15)
let a = "js";
a.toUpperCase();
console.log(a);
//because not store a
//(16)
let s1 = "Hello World\u8000";
let s2 = "Hello \uD800";

console.log(s1.isWellFormed());
console.log(s2.isWellFormed());

console.log("*".repeat(5));
let text3 = "JS is cool. JS is powerful.";

console.log(text3.replace("JS", "JavaScript"));
console.log(text3.replaceAll("JS", "JavaScript"));
let text4 = "I love google. GOOGLE is my favorite. goOgle is everywhere.";

let result3 = text4.replace(/google/gi, "Google");

console.log(result3);

let names = "alice, BOB, ChArLie, daVid, EVE";

let nameArray = names.split(", ");

let capitalizedNames = nameArray.map((name) => {
  let lower = name.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
});
let results = capitalizedNames.join(" + ");
console.log(results);
console.log(results.split(" + "));

//new prob
let str5 = "JavaScript is fun";

let words = str5.split(" ");

let newArray = words.map((element) => {
  return element.split("").reverse().join("");
});

let result5 = newArray.join(" ");

console.log(result5);

let str10 = "HeLLo WoRLd";
let count = 0;
newe = str10.toLowerCase();
newe = newe.split("");
console.log(newe);
newe.map((e) => {
  if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
    count++;
  }
});
console.log(count);

//newProblem2
let str12 = "RaceCar";
function isPalindrome(str11) {
  str11 = str11.toLowerCase();
  if (str11 === str11.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(str12));
//newProblem3
let str13 = "I love learning JavaScript every day";
newstr3 = str13.split(" ");
let length = 0;
longestword = newstr3[0];
newstr3.map((item) => {
  if (item.length > length) {
    longestword = item;
    length = item.length;
  }
});
console.log(longestword);

function lastCharacter(str) {
  return str.at(-1);
}
function lastCharacterarray(str) {
  itslength = str.length;
  return str[str.length - 1];
}
console.log(lastCharacterarray("df32"));

let itsAString = "itsagoodstring";
console.log(itsAString.at(-1));

array5 = [12, 12, 3235, 3, 244, 5];
text7 = "hellomyfrined";
console.log(array5.at(1));
console.log(text7[5]);
let text9 = "Apple, Banana, Kiwi";
console.log(text9.slice());

let strwao = "Apple, Banana, Kiwi";
console.log(strwao.substring(7, -10));
