$(() => {
    // dynamic navbar
    $(".nav-wrapper").load("layouts/navbar.html", () => {
        $("#navbar-list > li a").each(function () { 
            let link = $(this).attr('href').replace('.', '')
            $(this).toggleClass("active", link == window.location.pathname) })
    })

    // footer
    $(".foot-wrapper").load("layouts/footer.html")
})