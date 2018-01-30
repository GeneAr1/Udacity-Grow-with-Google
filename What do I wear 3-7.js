/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Add boolean variable to keep track if shirt found used to output shirt NA

//var shirtFound = false; // initialize to false assume shirt not found.

// your code goes here
// Use nested if..else statements checking for ranges of dimensions in each if and falling through to last else
// to pring NA if none match.

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) &&
    (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
    //shirtFound = true;

} else {
    if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) &&
        (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
        console.log("M");
        //shirtFound = true;

    } else {
        if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) &&
            (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
            console.log("L");
            //shirtFound = true;

        } else {

            if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) &&
                (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
                console.log("XL");
                //shirtFound = true;

            } else {

                if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) &&
                (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
                console.log("2XL");
                //shirtFound = true;

                } else {
                    if ((shirtWidth >= 28) && (shirtLength >= 34) &&
                    (shirtSleeve >= 10.13)) {
                    console.log("3XL");
                    //shirtFound = true;

                    } else {
                        //if (shirtFound = false) {
                        console.log("N/A");
                        //}    
                    }   
                }   
            }
        }
    }
}