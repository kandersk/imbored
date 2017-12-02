
function hello(){
  $("#gameStatisticsDisplay").append('<p>Button Clicked</p>')
};

$('#clickButton').click(hello)
$("#gameStatisticsDisplay").html("Hello, World!");
