$(document).ready(function () {

    // variables for modals
    var sumModal = $("#summary");
    var contactModal = $("#contact");

  
      // hide modals
  sumModal.attr("style", "display: none");
  contactModal.attr("style", "display: none");

    // show portfolio
    $(".index").on("click", function (event) {
        event.preventDefault();
        $.get("/index", {
        })
          .then(function () {
            window.location.replace("/index");
            // If there's an error, log the error
          });
      });


