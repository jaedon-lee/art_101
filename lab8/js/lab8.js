/**
* Author: Jaedon Lee
* Created: 2.7.2021
*
*
**/

function firstThing(test) { //calls function and prints
  console.log(test + ": This is the first thing. <br>")
}
function secondThing(test) {
  console.log(test + ": This is the second thing. <br>")
}
function thirdThing(test) {
  console.log(test + ": This is the third thing. <br>")
}

firstThing("Test 1"); // calls the first thing and print test 1 plus text
secondThing("Test 1");
thirdThing("Test 1");

setTimeout(function() { // calls test 2 with time at zero. no delay
  firstThing("Test 2");
}, 0);
setTimeout(function() {
  secondThing("Test 2");
}, 0);
setTimeout(function() {
  thirdThing("Test 2");
}, 0);

setTimeout(function(){ // calls test 3 and waits for the timer.
  firstThing("Test 3");
}, 3000); // wait 3 seconds
setTimeout(function(){
  secondThing("Test 3");
}, 1000); // wait 1 second to print
setTimeout(function(){
  thirdThing("Test 3");
}, 2000); // wait 2 seconds to print
