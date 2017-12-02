// content.js


 var url = $("a[href^='http']").eq(0).attr("href");
//
// var template = require('content.html');
// var images = document.getElementsByTagName('img');

// $("html").html('<body>Play a game</body>')
// // $("html").load("content.html")
//
// var contentString = " "
// contentString = '/content.html'.outerHTML;
// $("html").html(contentString)

// var div = document.createElement('div');
//
// div.textContent = 'Injected!';
// document.body.appendChild(div);

// $( "*" ).load("content.html")


// window.open("https://www.formget.com/mailget/" , '_blank');
// This
// location.replace(chrome.extension.getURL('/content.html'))
// $.get(chrome.extension.getURL('/content.html'), function(data){
//   $(data).appendTo('body')
// })

// var iframe = document.createElement('iframe')
// iframe.src = chrome.extension.getURL('content.html')
// document.body.appendChild(iframe)
//
// location.replace(chrome.extension.getURL('content.html'))
// alert(chrome.extension.getURL('content.html'))
var filename = url.split('/').pop().split('#')[0].split('?')[0];
if(filename.length % 2 == 0){
  $.get(chrome.extension.getURL('/content.html'), function(data){
    $($.parseHTML(data)).appendTo('body')
  })

<<<<<<< HEAD
=======
$.get(chrome.extension.getURL('/content.html'), function(data){
  $($.parseHTML(data)).appendTo('body')
})


function getFileName() {
//this gets the full url
var url = document.location.href;
//this removes the anchor at the end, if there is one
url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
//this removes the query after the file name, if there is one
url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
//this removes everything before the last slash in the path
url = url.substring(url.lastIndexOf("/") + 1, url.length);
//return
return url;
>>>>>>> db7cc24d26917db899d099c9adb6200864daeeb4
}




//if(url.length % 2 == 0){
  //alert("this is an alert");

//}
