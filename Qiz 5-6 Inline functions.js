/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function (num) {
var laughs = ""; // variable used to build the string of laughs
if (num > 0) {
    while (num >= 1) {
        laughs += "ha";
        num--;
    }
    laughs += "!"; // add the exclamation point on the end"
    }
return laughs;
})