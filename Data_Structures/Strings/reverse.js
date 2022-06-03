/*The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"
Notes
There will be no punctuation in any of the test cases. */

//i: str - string 
//o: reverseStr - string 
//c: none
//e: "" => ""

/*Approach 

1. convert input str to array of letters
  //iterate over the strArray, swap first and last elements while swaping the lower and upper case senstivity */

function reverse(str) {

    var strArr = str.split("");

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        } else if (strArr[i] === strArr[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase();
        }
    }

    for (var j = 0; j < strArr.length/ 2; j ++) {
        var temp = strArr[j];
        strArr[j] = strArr[strArr.length-1 - j];
        strArr[strArr.length-1 - j] = temp;
        }
        return strArr.join("");
}


function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`Failed Expected "${expected}", but got "${actual}"`);
    }
}

var actualOne = reverse("Hello World");// "DLROw OLLEh")
var expectedOne = "DLROw OLLEh";
assertEqual(actualOne, expectedOne, "should reverse string with case sentsitivty");

var actualTwo = reverse("ReVeRsE");
var expectedTwo =  "eSrEvEr";
assertEqual(actualTwo, expectedTwo, "should reverse string with case sentsitivty");

var actualThree = reverse("");
var expectedThree = "";
assertEqual(actualThree, expectedThree, "should reverse string with case sentsitivty");

var actualFour = reverse("Radar");
var expectedFour = "RADAr";
assertEqual(actualFour, expectedFour, "should reverse string with case sentsitivty");