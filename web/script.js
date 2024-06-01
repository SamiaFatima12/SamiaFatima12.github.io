$(document).ready(function() {
    var heroCycle = $('span[id^="content-"]').hide(),
        i = 0;

    (function cycle() {
        heroCycle
            .eq(i)
            .fadeIn(400)
            .delay(1700)
            .fadeOut(400, cycle);

        i = ++i % heroCycle.length;
    })();

    var footerCycle = $('span[id^="cycle-"]').hide(),
        c = 0;

    (function cycle() {
        footerCycle
            .eq(c)
            .fadeIn(400)
            .delay(1700)
            .fadeOut(400, cycle);

        c = ++c % footerCycle.length;
    })();

    // Set field sizing classes on parent elements
    $("input.small")
        .parent()
        .addClass("field-sm");
    $("input.medium")
        .parent()
        .addClass("field-md");
    $("input.large")
        .parent()
        .addClass("field-lg");

    // Associate checkbox labels with inputs to allow them to be checked by clicking labels
    $(".checkboxDiv")
        .parent()
        .addClass("field-checkbox");
    $(".field-checkbox").each(function(i) {
        $(this)
            .find("input")
            .attr("id", "checkbox-" + i);
        $(this)
            .find("label")
            .attr("for", "checkbox-" + i);
    });

    // Add required class to list item
    $("li > .required")
        .parent()
        .addClass("required-field");
    $("li > .checkboxDiv > .required")
        .parent()
        .parent()
        .addClass("required-field");
});
