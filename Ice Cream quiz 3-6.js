/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
// 
/*1/30/2018 changed all " to ' in order to pass the test.  Not sure why it had to be single ' 
            JavaScript allows for either double or single quotes on strings.
*/

var flavor = 'strawberry';
var vessel = 'cone';
var toppings = 'cookies';

// Add your code here

if ((flavor === 'chocolate' || flavor === 'vanilla') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
    console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
} else {
    console.log('try again, cannot make that combo');
}