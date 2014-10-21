$(document).ready(function() {

  // to use to resize landing so nav always visible on load
  // uncomment after top image updated, but adding now to be ready
  // $('.resize-wrapper').css('height', ($(window).innerHeight() - 50).toString());
  if ($(window).innerHeight() < 535) {
    $('#sticky-nav').toggle('nav-hide');
    $('.resize-wrapper').css('padding-top', 50);
    $('#unsticky-nav').hide();
  }

  // Wrap videos and apply CSS for fluid width
  $('.video').fitVids();

  // For Texas Weekly counter
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


  // Initialize the mobile slicknav menu
  $('#menu').slicknav();
});


// For sticky header
$('#unsticky-nav').waypoint(function() {
  $('#sticky-nav').toggleClass('nav-hide');
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
  $(this).addClass('side-animate');
}, {offset: "50%"});

$('.animate-from-left').waypoint(function() {
  $(this).addClass('appear');
}, {offset: "30%"});

$('.animate-from-right').waypoint(function() {
  $(this).addClass('side-animate');
}, {offset: "50%"});

$('.animate-from-right').waypoint(function() {
  $(this).addClass('appear');
}, {offset: "30%"});


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
