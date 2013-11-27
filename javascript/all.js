/**
 * @file all.js
 * @date 2013-11-25
 * @author William Moraes <william.moraes@locaweb.com.br>
 */
(function(document){
    "use strict";


    document.addEventListener("DOMContentLoaded", function() {

        Carousel.init({
            $obj: document.getElementById("carousel"),
            $prev: document.getElementById("prev"),
            $bullets: document.getElementsByClassName("bullet"),
            $next: document.getElementById("next"),
            NUMBER_SLIDES: 3
        });

    });
}(document));
