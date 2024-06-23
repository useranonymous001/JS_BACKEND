// arrays ==> forEach indexOf find map filter

// let arr = [12, 34, 67, 45, 76, 98, 9];

// methods for array
// arr.forEach((elem) => {
//   console.log(elem + 1);
// });

// arr.map((elem, index) => {
//   console.log(elem, index);
// });

// let newArr = arr.filter((elem) => {
//   return elem > 20;
// });

/*
 
find  ==> searches the elements in an array and returns the first element if found. also it creates an new arr just like map,filters and all

*/

// let findElem = arr.find((elem) => {
//   if (elem === 34) return true;
//   else return false;
// });
// console.log(findElem);

/*

    indexOf() ==> it will give the index of the elements present in an array

    -1 ==> element not present in an array
    n ==> present at nth index
 */

// console.log(arr.indexOf(24523)); // -1
// console.log(arr.indexOf(34)); // 1

// var collection = {
//   car: "lambo",
//   price: "$1000000",
//   speed: 299,
//   owner: "Rohan Khatri",
// };

// accessing an Object
// console.log(collection.car);

// modifying an object
// collection.speed = 300;
// console.log(collection.speed);

// freezing an object so we it cannot be modifyed anymore

// Object.freeze(collection); // this freezed an object and prevents the further modification of an object

// collection.speed = 300;
// console.log(collection.speed);

// function has length and it is also an object
// function abcd(a, b, c, d) {
//   console.log("hello world");
// }
// console.log(abcd.length); // the length of the function is the number of parameters it contains i.e., 4
// console.dir(abcd); // watch in the browser console

/*

    Async JavaScript ==> puts the async block of code in the side stack and runs the sync nature code 

 */

// const randomUserFetcher = async () => {
//   const response = await fetch(`https://randomuser.me/api/`);
//   const data = await response.json();

//   console.log(data.results[0].name);
// };

// randomUserFetcher();

let arr = [112, 432, 54, 46, 45, 65, 68, 68];

let findElement = arr.find((elem) => {
  if (elem == 112) return true;
  else return false;
});

// console.log(findElement);

function random() {
  console.log("helow world ");
  username = "rohan ";
  for (let i of username) {
    console.log(i);
  }
}

random();

console.log("make me your enemy !!");
