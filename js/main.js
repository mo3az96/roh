$(document).ready(function () {
    new WOW().init();
    $('.filter-link').click(function () {
        var category = $(this).attr("data-filter-link");
        var thisBlocks = $(".work-block[data-filter='" + category + "']")
        $('.filter-link').removeClass("active")
        $(this).addClass("active")
        if (category == "all") {
            $(".work-block").show();
        } else {
            $(thisBlocks).show();
            $(".work-block").not(thisBlocks).hide();
        }
    });

    //////////** blog slider **//////////
    var blogwiper = new Swiper('.blog-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.blog-slider .swiper-pagination',
            clickable: true,
        },
    });
    //////////** blog slider **//////////
    var blogwiper = new Swiper('.testmonials-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        pagination: {
            el: '.testmonials-slider .swiper-pagination',
            clickable: true,
        },
    });

    //////////** parteners slider **//////////
    var partenerswiper = new Swiper('.parteners-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1199: {
                slidesPerView: 6,
            },
        },
        navigation: {
            nextEl: '.parteners-slider .swiper-btn-next',
            prevEl: '.parteners-slider .swiper-btn-prev',
        },
    });

    $('.menu-btn').click(function () {
        $(this).toggleClass("active");
        $(".left-div").slideToggle("400")
        $("body").toggleClass("overflow")
    });
});