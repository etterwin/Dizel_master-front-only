//Плавный скролл вниз страницы, к якорю
$(document).ready(function () {
    $("#start").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({
            scrollTop: destination }
            , 400);
        return false;
    });
});

//Плавный скролл к первой форме "Запись"
$(document).ready(function () {
    $("#register").click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({
                scrollTop: destination }
            , 400);
        return false;
    });
});
