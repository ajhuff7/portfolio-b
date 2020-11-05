$(document).ready(function () {

    // variables for modals
    var bioModal = $("#bio");
    var contactModal = $("#contact");

  
      // hide modals
  bioModal.attr("style", "display: none");
  contactModal.attr("style", "display: none");


  $(".portfolio").on("click", function (event) {
    event.preventDefault();
    $.get("/portfolio", {
    })
      .then(function () {
        window.location.replace("/portfolio");
        // If there's an error, log the error
      });
  });