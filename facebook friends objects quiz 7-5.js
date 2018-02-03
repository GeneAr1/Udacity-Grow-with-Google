/*
 * Programming Quiz: Facebook Friends (7-5)
 Directions:
Create an object called facebookProfile. The object should have 3 properties:
your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:
postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
    name : "Gene",
    friends: 45,
    messeages: ["hi", "by"],

// can also us this.message.pus or this.friends and so on below

   postMessage : function (message) {
       facebookProfile.messages.push(message); 
       return facebookProfile.messeages;
   },
   deleteMessage : function(index){
       facebookProfile.messages.splice(index,1);
       facebookProfile.messeages;
   },
   addFriend : function () {
        facebookProfile.friends = facebookProfile.friends + 1;
        return facebookProfile.friends;
   },
   removeFriend: function() {
       facebookProfile.friends = facebookProfile.friends  - 1;
       return facebookProfile.friends;
   }
}
