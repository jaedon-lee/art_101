/**
* Author: Jaedon Lee
* Created: 2.15.2021
*
*
**/
var challengesEl = $("#challenges");
var problemsEl = $("#problems");
var resultsEl = $("#results");
var myButton = "<button> Click Me </button>";

challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);

$(document).ready(function() {
  $(":button").click(function() {
    $("#content").toggleClass("special");
  });
});
