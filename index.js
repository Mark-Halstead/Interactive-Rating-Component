

//Listen for click and select the number of button clicked

//Simultaneously change the href of the anchor tag

//Click anchor tag sends to an html file


var numberOfButtons = document.querySelectorAll(".but").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".but")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    document.querySelectorAll(".but2").href="submitted" + buttonInnerHTML + ".html";
});
};
