// Lets Learn  About the string method

// What is String?
// A string is basic basical use to store textual from of data like word sentence or we can say it is used to store sequennce of Character, And it follow zero indexing.

// How to declared a string js
// 1.String literals
// ex-let a="Mu name is Abhishek";
// it return a typeof as string
// 2.String object
// ex-let ab=String("Mu name is Abhishek");
// it return a typeof as string
// 3.String using new keyword
// ex-let ab= new String("Mu name is Abhishek");
// it return a typeof as object

// let fname = "Abhihske";
// // console.log(fname[0] == 90);
// console.log(charAt(0)='b');
// console.log(fname);
// const areEqualInUpperCase = (str1, str2) =>
//   console.log(str1.toUpperCase() === str2.toUpperCase());
// const areEqualInLowerCase = (str1, str2) =>
//   console.log(str1.toLowerCase() === str2.toLowerCase());

// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true

// const f_name = "Abhishek";
// console.log(f_name.encodeURI());

const newstring = new String("Hello❤️ Abhihske");
console.log(newstring.charAt(02));
console.log(newstring.charCodeAt(05));
console.log(newstring.codePointAt(05));
const newstringconcat = newstring.concat(" good boy");
console.log(newstringconcat);
console.log(newstringconcat.endsWith("b"));
console.log(newstringconcat.startsWith("h"));

const fontex = "Hello world";
console.log(`This is ex of font function rn type ${fontex.fontcolor("red")}`);
console.log(String.fromCharCode(189, 43, 190));
console.log(newstring);

const newobject = {
  name: "Abhihske",
  age: 16,
  address: "sunderpada",
};
console.log(newobject.valueOf());

const no = 788;
console.log(typeof toString(no));
