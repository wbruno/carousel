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
            $next: document.getElementById("next"),
            $pager: document.getElementById("pager"),
            NUMBER_SLIDES: document.getElementsByClassName("carousel-item").length,
            onMove: function(step) {
                console.log(step);
            }
        });

    });
}(document));
