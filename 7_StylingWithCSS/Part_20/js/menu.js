$(document).ready(function() {
    $(".menubutton").click(function() { // trigger
        $(this).next(".ul-list").slideToggle("fast"); // shows the next "dd" when you click on "dt"
        $(this).children("a").toggleClass("closed open"); // changes the class of the contained a-tag from "closed" to "open" when clicking on "dt
    });
});