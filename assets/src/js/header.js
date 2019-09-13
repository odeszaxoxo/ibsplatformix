$(document).ready( function() {                

    $(".dropdown-toggle.header").on("mouseenter", function () {
        // make sure it is not shown:
        if (!$(this).parent().hasClass("show")) {
            $(this).click();
        }
    });

});