$(document).ready(function() {

  // This initializes the stellar bgs with responsive true
  // Don't initialize on ios
  if (!navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    $.stellar({
      responsive: true
    });
  }

  // Initialize the mobile slicknav menu
  $('#menu').slicknav();


  // Always have nav start at the bottom of the screen on load if it fits
  if ($(window).innerHeight() >= 625) {
    $('#unsticky-nav').css('bottom', 0);
    $('.resize-wrapper').css('height', $(window).innerHeight() - 50);
  }

  // Wrap videos and apply CSS for fluid width
  $('.video').fitVids();

  // For stats counters
  $('.counter').counterUp({
    delay: 50,
    time: 3000
  });

  // For animation to anchor links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});


// For sticky header
$('#unsticky-nav').waypoint(function() {
  $('#sticky-nav').toggleClass('hide');
  $('.cta-button-fixed').toggleClass('hide');
}, {offset: 1});


// For arrow transition between sections
$('.section-arrow').waypoint(function() {
  $(this).addClass('bg-size-appear');
}, {offset: '40%'});

$('.section-arrow-community').waypoint(function() {
  $(this).addClass('bg-size-appear');
}, {offset: '60%'});


// animates in 'Trib' and 'Talk'
$('.animate-from-left').waypoint(function() {
  $(this).addClass('appear');
  $(this).addClass('side-animate');
  $(this).addClass('left');
}, {offset: "50%"});

$('.animate-from-right').waypoint(function() {
  $(this).addClass('appear');
  $(this).addClass('side-animate');
  $(this).addClass('right');
}, {offset: "50%"});


// Using waypoints to change active nav class
$('#story').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#story]').closest('li').addClass('active');
}, {offset: 20});

$('#innovation').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#innovation]').closest('li').addClass('active');
}, {offset: 20});

$('#accountability').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#accountability]').closest('li').addClass('active');
}, {offset: 20});

$('#transparency').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#transparency]').closest('li').addClass('active');
}, {offset: 20});

$('#engagement').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#engagement]').closest('li').addClass('active');
}, {offset: 20});

$('#donate').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#donate]').closest('li').addClass('active');
}, {offset: 20});

$('#donate').waypoint(function() {
  $(this).addClass('yellow-bg');
}, {offset: "30%"});
