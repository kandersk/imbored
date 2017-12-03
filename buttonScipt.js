//
// element.addEventListener("click",function(){
//   alert("Hello")
//   $("#inserted").hide()
// })
// $("#quitButton").click(function(){
//   $("#inserted").append("<p> Hello Hello Hello </p>")
// })

// document.addEventListener('DOMContentLoaded', function(){
//   document.getElementById("quitButton").addEventListener("click", handler);
// });
$(document).ready(function(){
  $("#quitButton").click(handler)
})

function handler(){
  console.log("this is a test please work")
}
