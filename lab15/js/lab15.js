/**
* Author: Jaedon Lee
* Created: 2.24.2021
*
*
**/
$('#submit').click(function() {
  var topic = $('#topic').val();
    console.log(topic)
  var apiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/
  "+topic.replace(" ", "_")+ "?redirect=true";
    console.log(apiUrl);
    debugger;
    $.ajax({
      url: apiUrl,
      data: { },
      type: "GET",
      dataType : "json",
  })
  .done(function( data ){
    $('#output').html(data.extract_html);
  })
  .fail(function( xhr, status, errorThrown ){
    $('#output').html('<p>I could not find anything with that name!');
  });
})
