$(function() {

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        hide_min_max: true,
        hide_from_to: true,
        onStart: updateInputs,
        onChange: updateInputs
    });
    var instance = $(".js-range-slider").data("ionRangeSlider");

    function updateInputs(data) {
        var from = $(".js-range-slider").data('from');
        var to = $(".js-range-slider").data('to');

        $(".js-input-from").prop("value", from);
        $(".js-input-to").prop("value", to);
    }

    $(".js-input-from").on("input", function() {
        var val = $(this).prop("value");
        var min = $(".js-range-slider").data('min');
        var to = $(".js-input-to").prop("value", to);

        // validate
        if (val < min) {
            val = min;
        } else
        if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $(".js-input-to").on("input", function() {
        var val = $(this).prop("value");
        var max = $(".js-range-slider").data('max');
        var from = $(".js-input-from").prop("value", from);

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });

    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

});