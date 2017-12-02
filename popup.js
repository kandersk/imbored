
function hello(){
  chrome.tabs.executeScript({
    file: 'app.js'
  });
}
$('#clickButton').click(hello())
// $('#gameStatisticsDisplay').innerHTML= "Test"
$("#gameStatisticsDisplay").html("Hello, World!");
