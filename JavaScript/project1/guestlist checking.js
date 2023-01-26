var guestList = ["angela","jack","pam","lara","jason"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
  alert("Welcome!");
} else{
  alert("Sorry, maybe next time.");
}