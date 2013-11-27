/**
 * @file Carousel
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2013-11-27
 */

var Carousel = {};
Carousel.move = function(step) {
    Carousel.step = step;

    Carousel.activeSlide(step);
    Carousel.activeBullet(step);
    Carousel.activeArrow(step);

    Carousel.onMove(step);
};
Carousel.activeSlide = function(step) {
    var i = Carousel.NUMBER_SLIDES;

    while (i--) {
        Carousel.$obj.classList.remove("step" + i);
    }
    Carousel.$obj.classList.add("step" + step);
};
Carousel.activeArrow = function(step) {

    if (step + 1 < Carousel.NUMBER_SLIDES) {
        Carousel.$prev.classList.add("is-active");
        Carousel.$next.classList.add("is-active");
    }
    if (step === Carousel.NUMBER_SLIDES - 1) {
        Carousel.$prev.classList.add("is-active");
        Carousel.$next.classList.remove("is-active");
    }
    if (step === 0) {
        Carousel.$next.classList.add("is-active");
        Carousel.$prev.classList.remove("is-active");
    }
};
Carousel.activeBullet = function(step) {
    Carousel.removeClass(Carousel.$bullets);
    Carousel.$bullets[step].classList.add("is-active");
};
Carousel.next = function() {
    var step = parseInt(Carousel.step, 10) + 1;

    if (step < Carousel.NUMBER_SLIDES) {
        Carousel.move(step);
    }
};
Carousel.prev = function() {
    var step = parseInt(Carousel.step, 10) - 1;

    if (step >= 0) {
        Carousel.move(step);
    }
};
Carousel.bullet = function(e) {
    var $bullet = e.target,
        er = new RegExp(Carousel.bulletsClass),
        step;

    if ($bullet.className.match(er)) {
        step = parseInt($bullet.getAttribute("data-step"), 10);
        Carousel.move(step);
    }
};
Carousel.removeClass = function($els) {
    var i = Carousel.NUMBER_SLIDES;

    while (i--) {
        $els[i].classList.remove("is-active");
    }
};
Carousel.createBullets = function(){
    var max = Carousel.NUMBER_SLIDES,
        i = 0;

    while (i < max) {
        var $bullet = document.createElement("span");
        $bullet.setAttribute("data-step", i);
        $bullet.setAttribute("class", "bullet fleft");

        Carousel.$pager.appendChild($bullet);

        i++;
    }

    Carousel.$pager.getElementsByClassName("bullet")[0].classList.add("is-active");

};
Carousel.events = function() {
    Carousel.$next.addEventListener("click", Carousel.next);
    Carousel.$prev.addEventListener("click", Carousel.prev);
    Carousel.$pager.addEventListener("click", Carousel.bullet);
};

Carousel.init = function(config) {
    var classCarousel = "carousel-" + config.NUMBER_SLIDES + "-items";

    Carousel.$obj = config.$obj || document.createElement("xpto");
    Carousel.$prev = config.$prev || document.createElement("xpto");
    Carousel.$next = config.$next || document.createElement("xpto");
    Carousel.$pager = config.$pager || document.createElement("xpto");

    Carousel.bulletsClass = config.bulletsClass || "bullet";
    Carousel.$bullets = Carousel.$pager.getElementsByClassName(Carousel.bulletsClass);
    Carousel.onMove = config.onMove || function(){}
    Carousel.NUMBER_SLIDES = config.NUMBER_SLIDES;

    Carousel.$pager.classList.add(classCarousel);
    Carousel.$obj.classList.add(classCarousel);
    Carousel.createBullets();

    Carousel.step = 0;

    Carousel.events();
};
