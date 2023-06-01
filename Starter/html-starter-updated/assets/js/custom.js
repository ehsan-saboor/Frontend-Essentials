// RESPONSIVE NAVIGATION
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



$(function () {
  let url = window.location.href.split('/')
  $.each($('.main-menu a'), function () {
    if (url[url.length - 1] === $(this).attr('href')) {
      $('.main-menu a').removeClass("active");
      $(this).addClass("active");
    }
  });
});


$(function () {
  let url = window.location.href.split('/')
  $.each($('.nav_link'), function () {
    if (url[url.length - 1] === $(this).attr('href')) {
      $('.nav_link').removeClass("active");
      $(this).addClass("active");
    }
  });
});
  // RESPONSIVE NAVIGATION


// Animations call 

// AOS.init({
//     duration: 1200,
//     once: true,
// })

// new WOW().init();


// end Animation 






// counter start at six-wrap class 
// JS 

// $(window).on('scroll', function () {
//     if ($(window).scrollTop() >= $('.six-wrap').offset().top + $('.six-wrap').outerHeight() - window.innerHeight){
//         counterrr();
//     }
// });


// function counterrr() {
//     $('.counter').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//     $('.counter1').removeClass('counter');
// }

// close 











// scroll behavior 
// window.scroll({
//     behavior: 'smooth'
// });



