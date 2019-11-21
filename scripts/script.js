// keeps the color change for the active li //

$(document).ready(function() {
    $(".navbar-nav > li").click(function() {
        $(".navbar-nav > li").removeClass('active');
        $(this).addClass('active');
    });
});


// scrollto animation //


$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top -60
      }, 1000);
    }
  });
});


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar-nav") {
    x.className += "responsive";
  } else {
    x.className = "navbar";
  }
}
