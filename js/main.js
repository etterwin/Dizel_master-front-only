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

//Это объект Vue, благодаря ему работает карусель
new Vue({
    el: '#app', //это область, для которой предначено действо; в элементе указан id контейнера
    data: {
        currentView: 'first' //элемент, который будет рендериться по дефолту
    },
    components: { //компоненты для шаблонов карусели
        first: {
            template: '#first-template'
        },
        second: {
            template: '#second-template'
        },
        third: {
            template: '#third-template'
        },
        fourth: {
            template: '#fourth-template'
        },
        fifth: {
            template: '#fifth-template'
        },
        sixth: {
            template: '#sixth-template'
        },
        seventh: {
            template: '#seventh-template'
        },
        eighth: {
            template: '#eighth-template'
        },
        ninth: {
            template: '#ninth-template'
        }
    },
    methods: { //функция рендеринга
        switchView: function (view) {
            this.currentView = view
        }
    }
});

