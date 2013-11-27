/**
 * @file Carousel
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2013-11-27
 */

var Carousel = {};
Carousel.move = function(step) {
    Carousel.step = step;

    Carousel.$obj.classList.remove("step0");
    Carousel.$obj.classList.remove("step1");
    Carousel.$obj.classList.remove("step2");

    Carousel.$obj.classList.add("step" + step);
};
Carousel.next = function() {
    var step = Carousel.step < Carousel.NUMBER_SLIDES - 1 ? parseInt(Carousel.step) + 1 : 2;

    Carousel.move(step);
    Carousel.activeBullet(Carousel.$bullets[step]);
};
Carousel.prev = function() {
    var step = Carousel.step > 0 ? Carousel.step - 1 : 0;

    Carousel.move(step);
    Carousel.activeBullet(Carousel.$bullets[step]);
};
Carousel.bullet = function() {

    Carousel.move(this.getAttribute("data-step"));

    Carousel.activeBullet(this);
};
Carousel.activeBullet = function($bullet) {
    var i = Carousel.NUMBER_SLIDES;

    while (i--) {
        Carousel.$bullets[i].classList.remove("is-active");
    }

    $bullet.classList.add("is-active");
};
Carousel.events = function() {
    var i = Carousel.NUMBER_SLIDES;

    Carousel.$next.addEventListener("click", Carousel.next);
    Carousel.$prev.addEventListener("click", Carousel.prev);

    while (i--) {
        var $bullet = Carousel.$bullets[i];

        $bullet.addEventListener("click", Carousel.bullet);
    }
};

Carousel.init = function(config) {
    Carousel.$obj = config.$obj || document.createElement("xpto");
    Carousel.$prev = config.$prev || document.createElement("xpto");
    Carousel.$next = config.$next || document.createElement("xpto");
    Carousel.$bullets = config.$bullets || document.getElementsByClassName("xpto");

    Carousel.NUMBER_SLIDES = config.NUMBER_SLIDES;

    Carousel.step = 0;

    Carousel.events();
};