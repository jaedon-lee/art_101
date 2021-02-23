/**
* Author: Jaedon Lee
* Created: 2.15.2021
*
*
**/
var node = document.getElementById("output");
document.getElementById("duh").addEventListener("click", sortUserName);
var nodeEl = document.createElement("P");

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it."); // window prompt opens up for user to put in name
  console.log("userName =", + userName);

  var nameArray = userName.split(''); //splits into an array
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort(); // sorts the array
  console.log("nameArraySort =", + nameArraySort);
  var nameSorted = document.createTextNode("text");
  nameSorted = nameArraySort.join(''); // joins array into one string again
  console.log("nameSorted =", + nameSorted);
  console.log("nameSorted =", nameSorted);
  nodeEl.innerText = nameSorted;
  return nameSorted;
}

//document.writeln("Is this your name? ",
    //sortUserName(), "</br>");

document.getElementById("output").addEventListener("click", printline);
function printline() {
    node.appendChild(nodeEl);
    return node;
}
