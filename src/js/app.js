// Banner Slider
window.$ = window.jQuery = require('jquery');
require('slick-carousel');

$('#banner-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   dots: false,
   arrows: false,
   centerMode: true,
   variableWidth: true,
   focusOnSelect: true,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
     {
         breakpoint: 960,
         settings: {
           centerMode: false,
           variableWidth: false
         }
     }
   ]
 });

//  Akhir Slider