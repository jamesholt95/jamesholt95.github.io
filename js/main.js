
setTimeout(function() {
    $('.gif').fadeOut('fast');
    
}, 2000); 


setTimeout(function() {
    $('.in, .insta, .fb, .tw').fadeIn('fast');
    
}, 4000); 

var typed = new Typed('.message', {
  strings: ["Website Coming Soon..."],
  typeSpeed: 30,
  loop: false,
  fadeOut: true,
  cursorChar: ' ',
  startDelay: 2500,

});


//$('.gif').css('background-image', 'url(' + ../img/Untitled-4.gif + ')');

//$('.gif').css("background-image", "url(img/Untitled-4.gif)")+'?'+Math.random()*Math.random();  
$(".gif").css("background-image", "url(img/Untitled-4.gif)");