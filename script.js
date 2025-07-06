// var ES5

// ES6
//let , const

// datatypes

// number
// strings- '', "", template strings - ``
// bool - true/false
// functions - fn declarations are also hoisted
// undefined // type
// null -> typeof null -> object
// NaN -> Not a Number

// objects
// arrays
// maps
// datetime

// Promises

// creating variables
// var - function scoped, hoisted
// let - block scoped
// const - block scoped

var name = "Global Variable Name";
let name1; //variable declaration
name1 = "xyz"; //assignment
// // // // // // // // // // console.log("🚀 ~ name1:", name1);
// let name1 = 'xyz; //throws err

const PI = 3.14;

// fn();

// function fn() {
//     // var name;   // undefined;
// // // // // // // // // //     console.log("🚀 ~ fn ~ name:", name);
// // // // // // // // // //     console.log("🚀 ~ fn ~ blockVariable:", blockVariable)
//     // var name = "Nikhil";
//     if (true) {
//         console.log(name)
//         var name = 'if block';
//         // TDZ,
//         let blockVariable = 'xyz';
// // // // // // // // // //         console.log("🚀 ~ fn ~ blockVariable:", blockVariable)
//     };
// // // // // // // // // //     console.log("🚀 ~ fn ~ blockVariable:", blockVariable)
// // // // // // // // // //     console.log("🚀 ~ fn ~ name:", name);
// }

function fnCopy() {
  let name = "Nikhil";
  // // // // // // // // // console.log("🚀 ~ fnCopy ~ name:", name)
  if (true) {
    // block 1
    // // // // // // // // // console.log("🚀 ~ fnCopy ~ name:", name);
    if (true) {
      // block 2
      let name = "xyz";
      // // // // // // // // // console.log("🚀 ~ fnCopy ~ name:", name)
    }
    let name = "if block";
    console.log(name);
  }
  // // // // // // // // // console.log("🚀 ~ fn ~ name:", name)
}
// fnCopy();

// fn();
// // // // // // // // // // console.log("🚀 ~ fn ~ name:", name)

// // // var nonExistingVariable;
// // // // // // // // // // // // console.log("🚀 ~ nonExistingVariable:", nonExistingVariable)
// // // var nonExistingVariable = 123;
// // // // // // // // // // // // console.log("🚀 ~ nonExistingVariable:", nonExistingVariable)

// function add(num1, num2) {
// // // // // // //   // // // console.log("🚀 ~ add ~ num1:", num1)
// // // // // // //   // // // console.log("🚀 ~ add ~ num2:", num2)
// // // // // // //   // // // console.log("🚀 ~ add ~ num1+num1:", num1+num2)
//   // return num1+num2
// }

// const additionVal = add(1,2);
// // // // // // // // // // console.log("🚀 ~ additionVal:", additionVal)
// add(3)
// add();

// // // console.log(NaN == NaN)
// // // console.log(NaN != NaN)

// // // number
// // // strings- ''
// // // bool
// // // functions - fn declarations are also hoisted
// // // undefined
// // // null -> not a type
// // // NaN
let intNum = 123;
let num = 123.532123213;

// // // // // // // // // // console.log("🚀 ~ num.toFixed(2):", num.toFixed(2));
// // // // // // // // // // console.log("🚀 ~ parseInt(num):", parseInt(num));
// // // // // // // // // // console.log("🚀 ~ Math.round(num):", Math.round());
// // // // // // // // // // console.log("🚀 ~ Number.isNaN(NaN):", Number.isNaN(NaN));

// // // // // // // // // // console.log("🚀 ~ num:", num);
// // // // // // // // // // console.log("🚀 ~ typeof intNum:", typeof intNum);
// // // // // // // // // // console.log("🚀 ~ typeof num:", typeof num);
// let amount = 100_00_00_0;
// // // // // // // // // // console.log("🚀 ~ amount:", amount);
// // let amount = 10000000;
// // // // // // // // // // console.log("🚀 ~ amount:", amount.toLocaleString("en-in"));

let str = "hello world";
str[0] = "H"; // not allowed, str are immutable in js;

str.indexOf("o");
str.lastIndexOf("o");
str.includes("wor");
// // // // // // // // // console.log("🚀 ~ str.indexOf('o'):", str.indexOf('o'));
// // // // // // // // // console.log("🚀 ~ str:", str);

str.split(" ");
const email = "nikhil123@gmail.com";
email.split("@");
// // // // // // // // // console.log("🚀 ~ str.split(' '):", str.split(' '));

const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
const token = authToken.split(" ")[1];

// const capStr = str.toUpperCase()
// // // // // // // // // // console.log("🚀 ~ capStr:", capStr)
// const lowerCaseStr = str.toLowerCase()
// // // // // // // // // // console.log("🚀 ~ lowStr:", lowStr)

// // // template string

let loggedInUserName = "test";
let visitorNum = 100;
// console.log("Welcome " + loggedInUserName + " congrats you are our vistor number "+ visitorNum);
// console.log(
//   `Welcome ${loggedInUserName} congrats you are our vistor number ${
//     1 * 2 * 3 * 40
//   }`
// );

// // loggedInUserName = ""

// // let loggedInUserDetails = {
// //     name:"test",
// //     username:"abcd",
// //     loginTime: "8pm"
// // }

// // loggedInUserDetails = null

// // isLoggedIn = true;
// // isAdmin = false;

let num1 = 0;
// // // // // // // // console.log("🚀 ~ num1++:", num1++);  // console.log(num); num = num+1;
// // // // // // // console.log("🚀 ~ num1:", ++num1)       // num = num+1; console.log(num)
// // // // // // // console.log("🚀 ~ num1:", num1)

// ternary operator

// optional chaining -

// // // falsy -> 0, "" (empty string), NaN, undefined, null,
// // // truthy -> anything that is not falsy is truthy
// // // truthy  - empty array - []
// // // truthy-  empty object - {}

// if (null) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }
// if ({}) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// // equality operator ==, === (strict equality check)

// // console.log('1'== 1);
// // console.log('1'+1) // 11
// // console.log(1+ null) //
// console.log(1/0) //
// console.log(-1/0) //
// console.log(1+2+3+'4');

// // Arrow fn

// function add(num1, num2) {
// return num1+num2
// }

// const add = (num1,num2)=>{
// // // // // // //   console.log("🚀 ~ add ~ num2:", num2)
// // // // // // //   console.log("🚀 ~ add ~ num1:", num1)
//   return num1+num2;
// }

const add = (num1, num2) => num1 + num2;

const doubleNum = (num) => num * 2; //single param

const arrowFn = () => console.log("arrow Fn"); //single param

// // // // // // console.log("🚀 ~ add(1,2):", add(1, 2));

// // Arrays
// // Objects //primitve vs ref, shallow deep copy
// // ES6 classes
// // IIFE
// // setTimeout
// // Promises

// // function add(num1, num2){
// //     return num1+num2
// // };

// // const add = (num1,num2)=>{
// //     return num1+num2
// // }

// const add = (num1,num2)=>num1+num2

// const arrowFn = ()=>{
//     console.log('no params arrow fn')
// };
// arrowFn();

// const arr = [1,2,"3",null, ()=>'hello',{value:123},[1,2,3]];

const arr = [1, 2, 3, 4, 5];
// arr[3] = 999;

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };

// const logArrayValue = (val)=>console.log(`foreach Loop ${val}`);
// arr.forEach((val) => console.log(`foreach Loop ${val}`));

// // // arr.forEach(logArrayValue)
// // // arr.forEach((val)=>console.log(val));
// arr.forEach((val, index) =>
//   console.log(`The value at index ${index} is ${val}`)
// );
const doubleNumsArr = arr.map((val) => val ** 2);
// // // // // // console.log("🚀 ~ arr:", arr);
// // // // // // console.log("🚀 ~ doubleNumsArr:", doubleNumsArr);

const evenNums = arr.filter((val) => !val % 2);
// // // // // // console.log("🚀 ~ evenNums:", evenNums);

// // const squaredNums = arr.map((val)=>val*val)
// // // // // // // // // // // // console.log("🚀 ~ arr:", arr)
// // // // // // // // // // // // console.log("🚀 ~ squaredNums:", squaredNums);

// // const evenNums = arr.filter((val)=>!(val%2))
// // // 1%2 = 1
// // // 2%2 = 0
// // // 3%2 = 1

// // // // // // // // // // // console.log("🚀 ~ evenNums:", evenNums)

// // const arrVal = [1,2,null, 3,4,undefined, NaN,5];
// // console.log(arrVal.filter(Boolean));

// // const squredEvenNums = arr.filter(val=>!(val%2)).map(val=>val**2);
// // // const squredEvenNums1 = arr.map(val=>val**2).filter(val=>!(val%2));
// // // // // // // // // // // console.log("🚀 ~ squredEvenNums:", squredEvenNums);
// const sum1 = arr.reduce((accumulator, currValue) => {
//   return accumulator + currValue;
// },0);

const sum = arr.reduce((prevValue, currValue, index) => {
  // // // // // console.log("🚀 ~ sum ~ prevValue:", prevValue);
  // // // // // console.log("🚀 ~ sum ~ currValue:", currValue);
  // // // // // console.log("🚀 ~ sum ~ index:", index);
  // // // // // console.log(
  // // // // // "🚀 ~ sum ~ return Value-> prevValue+ currValue:",
  // // // // // prevValue * currValue
  // // // // // );
  // console.log();
  return prevValue * currValue;
});

// prevValue = 1;
// [2,3,4,5]

// console.log(sum);

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

// destructing assignment
//     [1,2,3,4,5]
// const [first, second, third] = arr;
const [first, second, ...rest] = arr;
// // // // console.log("🚀 ~ first:", first);
// // // // console.log("🚀 ~ second:", second);
// // // // console.log("🚀 ~ rest:", rest);

// arr.reverse();

// // console.log(arr)

// // rest operator, spread operator -> ...

const sum2 = (num1, num2) => num1 + num2;
const sum3 = (num1, num2, num3) => num1 + num2 + num3;

const sumN = (num1, num2, ...params) => {
  // // // // console.log("🚀 ~ sumN ~ num2:", num2);
  // // // // console.log("🚀 ~ sumN ~ num1:", num1);
  // // // // console.log("🚀 ~ params:", params);
};

sumN(); //-> []
sumN(1); //-> [1]
sumN(1, 2); //-> [1,2]
sumN(1, 2, 3, 4, 5); // ->
sumN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const defaultValueFn = (num1, num2 = 0) => num1 + num2;

defaultValueFn(1); //  1
// // // // console.log("🚀 ~ defaultValueFn(1):", defaultValueFn(1));
defaultValueFn(1, 2); // 3
// // // // console.log("🚀 ~ defaultValueFn(1, 2):", defaultValueFn(1, 2));

// const arr = [1, 2, 3, 4, 5];

// // const [num1, num2, ...rest] = arr;
// const [num1, num2, , elem] = arr;
// // // // // // // // // // console.log("🚀 ~ num1:", num1)
// // // // // // // // // // console.log("🚀 ~ num2:", num2)
// // // // // // // // // // console.log("🚀 ~ elem:", elem)

// const [, , num, ,] = arr;
// // // // // // // // // // console.log("🚀 ~ num:", num)

// const response = [
//     {
//         username: "abcd"
//     }
// ]

// // const user = response[0]

// // pass by value - primitives, num, str, bool, null, undefined, NaN
// // pass by ref - fn, objects/Array

// Array methods;

const add10 = (num1) => (num1 += 10);

const add10ToArray = (arr123) => arr123.push(10);

// // // console.log("🚀 ~ arr:", arr)
add10ToArray(arr);
// // // console.log("🚀 ~ arr:", arr)

let number123 = 1;
add10(number123);
// // // console.log("🚀 ~ number123:", number123)

num1 = number123;
num1 += 100;
// // // console.log("🚀 ~ num1:", num1)
// // // console.log("🚀 ~ number123:", number123)

// spread operator
const arr2 = [...arr];
// const arr2 = [ 1,2,3,4,5 ]; //...arr => 1,2,3,4,5
arr2.push(1234);
// // console.log("🚀 ~ arr:", arr)
// // console.log("🚀 ~ arr2:", arr2)

// let xyz = num1;

// xyz+=10;

const newArr = [1, [2, 3], [4, 5]];

const shallowCopy = [...newArr];

shallowCopy[0] = 123;

shallowCopy[1][0] = 999;
// console.log("🚀 ~ newArr:", newArr)
// console.log("🚀 ~ shallowCopy:", shallowCopy)

const emp1 = {
  name: "emp1",
  empID: "E101",
  dept: {
    deptId: "D101",
    deptName: "dept1",
    reportings: ["101", "102", "103"],
  },
};

const emp2 = {
  ...emp1,
  dept: { ...emp1.dept, reportings: [...emp1.dept.reportings] },
};
emp2.name = "emp2";
emp2.dept.reportings.push("1000");

console.log("🚀 ~ emp1:", emp1);
console.log("🚀 ~ emp2:", emp2);

console.log("🚀 ~ Object.keys(emp1):", Object.keys(emp1));
console.log("🚀 ~ Object.values(emp1):", Object.values(emp1));
console.log("🚀 ~ Object.entries(emp1):", Object.entries(emp1));
console.log("🚀 ~ typeof emp1.name:", typeof emp1.name);
console.log("🚀 ~ typeof emp1.dept:", typeof emp1.dept);

// Object.entries(emp1).forEach((entry) => {
//   const [key, val] = entry
//   console.log(key, val);
// });

Object.entries(emp1).forEach(([key, val]) => console.log(key, val));

// // lodash.clonedeep

// const emp1 = {
//   name: "emp1 Name",
//   empID: "E101",
//   dept: {
//     deptId: "D101",
//     deptName: "dept1",
//   },
// };

// const [first,second] = arr;
// const name = emp1.name;

// const empName = emp1.name;

// extract property `name` from emp1 object as empName
// const { name : empName } = emp1;

// extract property `name` from emp1 object as empName
// extract property `deptName` from dept object, which is present in emp1 object
const {
  name: empName,
  dept,
  dept: { deptName },
} = emp1;
// // // // // // // // // // console.log("🚀 ~ deptName:", deptName)
// // // // // // // // // // console.log("🚀 ~ empName:", empName)

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  lat: "some value",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const {
  lat,
  address: {
    geo: { lat: lattitude },
  },
} = user;
// // // // // // // // // //   console.log("🚀 ~ lattitude:", lattitude)

const { nonExisting: { value } = { value: "fallback value" } } = null || {};
// const value = user?.nonExisting?.value || "fallback value"
// // // // // // // // // // console.log("🚀 ~ value:", value)
