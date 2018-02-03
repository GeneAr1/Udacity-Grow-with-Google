/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here 
    // print account function
    // Welcome!
    // Your balance is $1000 and you interest rate is 1%.
    //
    printAccountSummary() {
        return ("Welcome!\nYour balance is currently $" +
            savingsAccount.balance + " and your interest rate is " +
            savingsAccount.interestRatePercent + "%.");
    }
};
