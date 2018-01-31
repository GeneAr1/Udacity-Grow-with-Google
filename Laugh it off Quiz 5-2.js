/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

var numOfLaughs = 10; // initialize the number of laughts
const HA_Ha = "ha";



function laugh(num) {

var laughs = ""; // variable used to build the string of laughs

    if (num > 0) {
     while (num >= 1) {
         laughs = laughs + HA_Ha;
         num--;
        }
    laughs = laughs + "!"; // add the exclamation point on the end
    } 
return laughs;
}

console.log(laugh(numOfLaughs));
