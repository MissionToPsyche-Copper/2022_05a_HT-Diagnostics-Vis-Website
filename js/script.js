$(() => {
    // dynamic navbar
    $(".nav-wrapper").load("/layouts/navbar.html", () => {
        $("#navbar-list > li a").each(function() { $(this).toggleClass("active", $(this).attr('href') == window.location.pathname) })
    })

    $(".foot-wrapper").load("/layouts/footer.html")

})