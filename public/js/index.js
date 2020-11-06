$(document).ready(function () {

    // variables for modals
    var bioModal = $("#bio");
    var contactModal = $("#contactMe");

    // hide modals
    bioModal.attr("style", "display: none");
    contactModal.attr("style", "display: none");



    // open modals 
    $("#about").on("click", function (event) {
        event.preventDefault();
        contactModal.attr("style", "display: none");
        bioModal.attr("style", "display: block");
        console.log("success!")
   });

    $("#contact").on("click", function (event) {
        event.preventDefault();
        bioModal.attr("style", "display: none");
        contactModal.attr("style", "display: block");
        console.log("success!")
    });


    // close modals
    $("#closeBio").on("click", function (event) {
        bioModal.attr("style", "display: none");
    });

    $("#closeContact").on("click", function (event) {
        contactModal.attr("style", "display: none");
    });


});