/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here



var row = 0;
var seat = 0;
for (var i = 0; i <= 25; i++) {
    row = i;
    for (var j = 0; j <= 99; j++) {
        seat = j;
        console.log(row + "-" + seat);
    }
}