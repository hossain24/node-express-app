// this function finds out the number of objects in an array
var counter = function (arr) {

    return "This array contains " + arr.length + " elements"
}

// this function calculates the addition between twe numbers
var adder = function (a, b) {
    return `The sum of a and b is ${a + b}`;
}

// exporting modules
module.exports = counter;
module.exports = adder;