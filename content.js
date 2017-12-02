// content.js


// var firstHref = $("a[href^='http']").eq(0).attr("href");
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

$.get(chrome.extension.getURL('/content.html'), function(data){
  $($.parseHTML(data)).appendTo('body')
})
