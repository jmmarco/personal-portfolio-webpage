// Custom animation using Animate.css and jQuery + JavaScript

// Animate the random arrows in the navbar header
setInterval(function() {
    var el = $('.navbar-brand span');
    el.addClass('animated rotateOut');

    setTimeout(function() {
        el.removeClass('animated rotateOut');
        el.addClass('animated rotateIn');
    }, 1000);
}, 4200);

// Animate the the about section once
$('#about').addClass('animated slideInDown');

// Animate the first header
$('h1').addClass('animated flipInY');

// Animate the projects section when scrolling
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var el1 = $('#project1, #project2, #project3');
    var el2 = $('#fcc, #twitter, #linkedin, #github');

    if (scroll >= 400) {
        el1.addClass('animated slideInDown');
        el2.addClass('animated slideInLeft');
    } else {
        el1.removeClass('animated slideInDown');
        el2.removeClass('animated slideInLeft');
    }
});

// Animate the images on each project on hover
var projectImages = $('#project1 img, #project2 img, #project3 img');
projectImages.hover(function() {
    projectImages.addClass('animated rotateIn');
    setTimeout(function() {
        projectImages.removeClass('animated rotateIn');
    }, 700);
});

// Animate the Contact section
var el = $('#fcc, #twitter, #linkedin, #github');
el.hover(function() {
    el.addClass('animated pulse');
    setTimeout(function() {
        el.removeClass('animated pulse');
    }, 700);
});

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Scrollspy
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh');
});
