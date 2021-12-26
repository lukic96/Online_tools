// Button for text editor page

// $("#redirect").click(function() {
//   window.location.href = "index2.html";
// });

// Reset button for all inputs and results

$("#resetBtnAll").click(function() {
  $("input").val("");
  $("span").html("");
});

// Button for scroll on top

var scrollArrowTop = $("#scrollTopBtn");

window.onscroll = function() {
  scrollingFunction();
}

function scrollingFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollArrowTop.css("display", "block");
  } else {
    scrollArrowTop.css("display", "none");
  }
}

scrollArrowTop.click(function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Button for previous page

// $("#backBtn").click(function() {
//   window.location.href = "index.html";
// });

// "Smoke Screen" when clicked on dropdown menu


// First letter Capitalized

$("#capBtn1").click(function() {
  var word1 = $("#cap1").val();
  var firstLetterCap = word1.substr(0,1).toUpperCase() + word1.substr(1).toLowerCase();
  $("#capPar1").html(firstLetterCap);
});

$("#resetBtn1").click(function() {
  $("#cap1").val("");
  $("#capPar1").html("");
});

// Every second word Capitalized

$("#capBtn2").click(function() {
  var word2 = $("#cap2").val();
  var everySecondWord = word2.toLowerCase().split(' ');
  for(var i = 0; i < everySecondWord.length; i++) {
    everySecondWord[i] = everySecondWord[i].charAt(0).toUpperCase() + everySecondWord[i].substring(1) + " ";
  }
  everySecondWord.join(' ');
  $("#capPar2").html(everySecondWord);
});

$("#resetBtn2").click(function() {
  $("#cap2").val("");
  $("#capPar2").html("");
});

// All Capitalized

$("#capBtn3").click(function() {
  var word3 = $("#cap3").val();
  var allCaps = word3.toUpperCase();
  $("#capPar3").html(allCaps);
});

$("#resetBtn3").click(function() {
  $("#cap3").val("");
  $("#capPar3").html("");
});

// All LowerCase

$("#capBtn4").click(function() {
  var word4 = $("#cap4").val();
  var allCaps = word4.toLowerCase();
  $("#capPar4").html(allCaps);
});

$("#resetBtn4").click(function() {
  $("#cap4").val("");
  $("#capPar4").html("");
});

// Subscript - not working properly

$("#capBtn5").click(function() {
  var word5 = $("#cap5").val().sub();
  // var sub = document.createElement("SUB");
  // var newText = document.createTextNode($("#cap5").val());
  // sub.appendChild(newText);
  // var word5 = document.body.appendChild(sub);
  $("#capPar5").html(word5);
});

$("#resetBtn5").click(function() {
  $("#cap5").val("");
  $("#capPar5").html("");
});

// Superscript - not working properly

$("#capBtn6").click(function() {
  var word6 = $("#cap6").val().sup();
  // var sup = document.createElement("SUP");
  // var newText = document.createTextNode($("#cap6").val());
  // sup.appendChild(newText);
  // var word6 = document.body.appendChild(sup);
  $("#capPar6").html(word6);
});

$("#resetBtn6").click(function() {
  $("#cap6").val("");
  $("#capPar6").html("");
});

// Removing all white space between words

$("#capBtn7").click(function() {
  var word7 = $("#cap7").val();
  var allWhiteSpace = word7.split(' ').join('');
  $("#capPar7").html(allWhiteSpace);
});

$("#resetBtn7").click(function() {
  $("#cap7").val("");
  $("#capPar7").html("");
});

// Removing additional white space between words to make sentance normal

$("#capBtn8").click(function() {
  var word8 = $("#cap8").val();
  var whiteSpace = word8.trim();
  $("#capPar8").html(whiteSpace);
});

$("#resetBtn8").click(function() {
  $("#cap8").val("");
  $("#capPar8").html("");
});

// Removing Email Specs (@gmail.com)

$("#capBtn9").click(function() {
  var word9 = $("#cap9").val();
  var position = word9.indexOf("@");
  var sliced = word9.slice(0, position);
  $("#capPar9").html(sliced);
});

$("#resetBtn9").click(function() {
  $("#cap9").val("");
  $("#capPar9").html("");
});
