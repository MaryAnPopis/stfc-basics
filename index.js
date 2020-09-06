var selector = "nav a";
$(window).scroll(function () {
    onScrollt(selector);
});

function onScrollt(selector) {
    var scrollPos = $(document).scrollTop();
    $(selector).each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
            parseInt(refElement.position().top) <= scrollPos &&
            parseInt(refElement.position().top) + parseInt(refElement.height()) >
            scrollPos
        ) {
            $(selector).removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
