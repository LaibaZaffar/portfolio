$(document).ready(function() {
    // Smooth scroll to the skills section when the button(b1) is clicked
    $(".b1").click(function() {
        $("html, body").animate({
            scrollTop: $(".pg1").offset().top
        }, 10); // 10 milliseconds for the animation
    });

        // Smooth scroll to the skills section when the button(b2) is clicked
    $(".b2").click(function() {
        $("html, body").animate({
            scrollTop: $(".pg2").offset().top
        }, 10); // 10 milliseconds for the animation
    });

});