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

  // To be used by colorbox
  window.colorbox_count = 0;

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


// For arrow transition between sections
$('.section-arrow').waypoint(function() {
  $(this).addClass('bg-size-appear');
}, {offset: '40%'});

$('.section-arrow-community').waypoint(function() {
  $(this).addClass('bg-size-appear');
}, {offset: '60%'});


// For colorbox popping up for joining/donating
$('#transparency').waypoint(function() {
    // check that colorbox hasn't opened before
    if (window.colorbox_count === 0) {
      $.colorbox(
      {html:"<i class='fa fa-times right'></i><p class='modal-text'>Ready to become a member<br>for a more informed Texas?</p><div class='cta-button-modal-yellow'><a class='cta-link' href='http://www.texastribune.org/join/'><p>YES! I'M READY TO BECOME A MEMBER.</p></a></div><div class='cta-button-modal-teal'><a class='cta-link'><p>ALMOST! I'M STILL READING.</p></a></div>",
      closeButton: false,
      onComplete: function() {
        $('.cta-button-modal-teal').on('click', function(e) {
          $.colorbox.close();
        });
        $('.fa-times').on('click', function(e) {
          $.colorbox.close();
        });
      },
      opacity: 0.7,
      onClosed: function() {
        window.colorbox_count += 1;
        }
      });
    }
}, {offset: 1});


// Using waypoints to change active nav class
$('#story').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#story]').closest('li').addClass('active');
  // Show/hide the Join Us cta
  $('.cta-button-fixed').toggleClass('hide');
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

$('#community').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#community]').closest('li').addClass('active');
}, {offset: 20});

$('#donate').waypoint(function() {
  $('.header li').removeClass('active');
  $('.header-link[href=#donate]').closest('li').addClass('active');
}, {offset: 20});
