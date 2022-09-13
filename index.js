const moment = require("moment");
const lodash = require("lodash");

// Print Date or Time in the following format:

// February 12th 2021, 12:54:12 pm
// Friday
// Feb 12th 21

let format1 = moment().format("MMMM Do YYYY, h:mm:ss a");
let format2 = moment().format("dddd");
let format3 = moment().format("MMM Do YY");

console.log(format1);
console.log(format2);
console.log(format3);

//Check if the following date is valid or not:
// 2020-01-01
// 2020-14-01
console.log(moment.isDate("2020-01-01"));
console.log(moment.isDate("2020-14-01"));

// Manipulating Dates

// adds 7 days to current date
let sevenDaysAhead = moment().add(7, "d");
console.log(sevenDaysAhead._d);

// adds 7 months to current date
let sevenMonthsAhead = moment().add(7, "M");
console.log(sevenMonthsAhead._d);

// adds 7 years to current date
let sevenYearsAhead = moment().add(7, "Y");
console.log(sevenYearsAhead._d);

// subtracts 7 days to current date
let sevenDaysBack = moment().subtract(7, "d");
console.log(sevenDaysBack._d);

// subtracts 7 months to current date
let sevenMonthsBack = moment().subtract(7, "M");
console.log(sevenMonthsBack._d);

// subtracts 7 years to current date
let sevenYearsBack = moment().subtract(7, "Y");
console.log(sevenYearsBack._d);

// Find the difference between the following 2 dates:

// 1.

// date1: 2014-11-11
// date2: 2015-09-11

var a = moment([2014, 11, 11]);
var b = moment([2015, 09, 11]);
console.log(a.diff(b, "days")); // 1

// 2.

// date1: 2014-11-27
// date2: 2015-09-16

var x = moment([2014, 11, 27]);
var y = moment([2015, 09, 16]);
console.log(x.diff(y, "days")); // 1

// Check is 2020-01-01 date after 2018-01-01
console.log(moment("2020-01-01").isAfter("2018-01-01"));

// Check is 2010-01-01 date after 2018-01-01
console.log(moment("2010-01-01").isAfter("2018-01-01"));

// Check if the year 2019 is a leap year
console.log(moment([2019]).isLeapYear());
// Check if the year 2020 is a leap year
console.log(moment([2020]).isLeapYear());

// Use lodash to do the following things:
// Use five methods form the list of Array methods and five from Collection methods

let array = [1, 53, 65, 654, 24, 2, 0, 42, 23];
let obj = { name: "John", age: 25, house: "Stark" };
console.log(lodash.chunk(array, 3));
console.log(lodash.difference(array, [53, 0, 4, 2]));
console.log(lodash.drop(array, 3));
console.log(lodash.zip(array, array));
console.log(lodash.union(array, [21, 525, 654, 1, 2, 0]));

console.log(lodash.size(array));
console.log(lodash.shuffle(array));
console.log(lodash.includes(obj, 25));
console.log(lodash.sample(obj));
console.log(lodash.sampleSize(obj, 2));
