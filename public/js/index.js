$(document).ready(function () {

    // variables for modals
    var bioModal = $("#bio");
    var contactModal = $("#contact");

    // hide modals
    bioModal.attr("style", "display: none");
    contactModal.attr("style", "display: none");


    $("#portfolio").on("click", function (event) {
        event.preventDefault();
        $.get("/portfolio", {
        })
            .then(function () {
                window.location.replace("/portfolio");
                // If there's an error, log the error
            });
    });

    $("#about").on("click", function (event) {
        event.preventDefault();
        bioModal.attr("style", "display: block");
        $("#aboutMe").text(
            "Ambitious Front End Developer with an interest in UX/UI design who hopes to bring a creative problem solving approach to desiging products and experiences. Innovative self-starter with experience building and updating responsive websites. Proficient in HTML, CSS, jQuery, JavaScript and Node.js; plus modern libraries and frameworks. Creative thinker who believes adaptability is key. Passionate about collaborating closely with a team to support projects during all phases of delivery.");
    });

    $("#contact").on("click", function (event) {
        event.preventDefault();
        contactModal.attr("style", "display: block");
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();

    });

    // close modals
    $("#closeBio").on("click", function (event) {
        bioModal.attr("style", "display: none");
    });

    $("#closeContact").on("click", function (event) {
        profile.attr("style", "display: none");
    });

    // close modals on screen click
    $(".body").on("click", function () {
        bioModal.attr("style", "display: none");
        contactModal.attr("style", "display: block");

    });


});