/**
* Author: Jaedon Lee
* Created: 3.8.2021
*
*
**/
var comicObj = {}; // core ajax method
function getAndPutData(apiUrl) { $.ajax({
  url: apiUrl,
   //calls url later
  data: { },
  // empty array
  type: "GET",

  dataType : "json", //
  
  success: function(data) {
    comicObj = data;
    $('#output-image').html("<h2>" + comicObj.title);
    $('#output-image').html("<img src='" + comicObj.img + "' title = '" +
    comicObj.alt + "'>");
    //$('#output-image').html("<img src="\" + comicObj.image +"">”);
    console.log(comicObj);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    // error function just in case
    console.log("Error:", textStatus, errorThrown);

  }
});
}

getAndPutData("http://xkcd.com/614/info.0.json"); //calls the original link
$('#backward').click(function() {
  var comicNum = comicObj.num - 1;
  var newUrl = "http://xkcd.com/"+comicNum+"/info.0.json"; // uses num to scroll through img list
  getAndPutData(newUrl);
  // function to get new img

})
$('#forward').click(function() {
  var comicNum = comicObj.num + 1;
  var newUrl = "http://xkcd.com/"+comicNum+"/info.0.json";
  getAndPutData(newUrl);
// same function but goes forward
})
