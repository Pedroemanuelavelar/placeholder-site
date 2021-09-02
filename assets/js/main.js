var nav = $(".navbar");
    customNavbar = "custom-navbar";
    navbar = $('.navbar').height();
var navbarBrand = $(".navbar-brand");
    navBrand = "navBrand-custom";

$(document).scroll(function() {
    $('.navbar-brand img').css({width: $(this).scrollTop() > 100? "160px":"215px"});
});

$(window).scroll(function() { 
    if ($(this).scrollTop() > navbar) {  
        nav.addClass(customNavbar);
        navbarBrand.addClass(navBrand);
    } 
    else {  
        nav.removeClass(customNavbar);
        navbarBrand.removeClass(navBrand);
    } 
});

$(".custom-btn").click(function(event) {
    event.preventDefault();
    $("#search-input").toggle('id');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
});










