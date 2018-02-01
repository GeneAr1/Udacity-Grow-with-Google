/*
 * Programming Quiz: Laugh (5-4)
 */

/* finish the function expression */

var laugh = function (num) {

var laughs = ""; // variable used to build the string of laughs


if (num > 0) {
    while (num >= 1) {
        laughs += "ha";
        num--;
    }
    laughs += "!"; // add the exclamation point on the end
}
return laughs;
};

console.log(laugh(10));
