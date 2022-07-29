// 1st type
// ------------------------------------------------------------------------------------

var person = {};
person.name = "karthik";
person.id = "sm_090";
person.location = "India";

// creating property one by one

const name = person.name;
const id = person.id;
// extracting property one by one

// 2nd type
// ------------------------------------------------------------------------------------

// creating multiple properties together by using object literal notation
var person = {
  name: "karthik",
  id: "sm_090",
  location: "India",
};

var namee = person.name;
var idd = person.id;
var location = person.location;
// extracting property one by one

// ES6
const { namee, idd, location } = person;
// The code can now be written in a better way now

// 3rd type
// ------------------------------------------------------------------------------------

// You can also destructure from return values from other functions.
// If you have an api call and it returns a large object.

function getData() {
  let count = 5;
  let url = "127.0.0.1:8000";
  let obj = {
    count,
    url,
  };
  return obj;
}

var { count, url } = getData();

// Array Destructuring
// ------------------------------------------------------------------------------------

// standard way
const arr = ["MASAI", "INDIA", "EDTECH"];
var namme = arr[0];
var location = arr[1];
var desc = arr[2];

// es6
var [namme, location, desc] = arr;
console.log(namme, location, desc);

// using destructuring in split()
// ------------------------------------------------------------------------------------

namme = "albert sebastian";
const [fname, lname] = namme.split(" ");
console.log(fname, lname);
// ans - albert, sebastian

// Renaming field names:
// ------------------------------------------------------------------------------------
// use const
var person = {
  f: "swanand",
  l: "kadam",
  i: "swanand7",
};

var { f: fnname, l: lnname, i: idd } = person;
console.log(fnname, lnname, idd);

// Implementing in function arguments:
// ------------------------------------------------------------------------------------
function fetchData(baseUrl, query, maxResults, orderby) {}
fetchData(" https://www.googleapis.com/youtube/v3/search", "masai", 10, "date");

// We can use object destructuring:
function fetchData({ baseUrl, query, maxResults, orderby }) {}

// we can change the order
fetchData({
  baseUrl: "https://www.googleapis.com/youtube/v3/search",
  orderby: "date",
  maxResults: 10,
  query: "masai",
});

// combining with default values:
// ------------------------------------------------------------------------------------
function fetchData({
  baseUrl,
  query = "",
  maxResults = null,
  orderby = null,
}) {}

// pass only some variables
fetchData({
  baseUrl: "https://www.googleapis.com/youtube/v3/search",
  query: "masai",
});

// Spread Operator
// ------------------------------------------------------------------------------------
function sum(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
sum(...[1, 2, 3]) == 6;

// x = 1
// y = 2
// z = 3

var abc = ["a", "b", "c"];
var def = ["d", "e", "f"];
var alpha = [...abc, ...def];
console.log(alpha);

// alpha == ['a', 'b', 'c', 'd', 'e', 'f'];

// Rest
// ------------------------------------------------------------------------------------
