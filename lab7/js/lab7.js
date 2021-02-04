/**
* Author: Jaedon Lee
* Created: 2.3.2021
*
*
**/
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it."); // window prompt opens up for user to put in name
  console.log("userName =", + userName);

  var nameArray = userName.split(''); //splits into an array
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort(); // sorts the array
  console.log("nameArraySort =", + nameArraySort);

  var nameSorted = nameArraySort.join(''); // joins array into one string again
  console.log("nameSorted =", + nameSorted);
  console.log("nameSorted =", nameSorted);
  return nameSorted;

}
document.writeln("Is this your name? ",
    sortUserName(), "</br>");
