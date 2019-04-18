document.getElementById("overlay").style.display = "none";
// Set the date we're counting down to
var countDownDate = new Date("April 22, 2019 06:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours " +
    minutes + " Minutes " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

 //////////////////////////////////////////////////////////////
 function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

////////////////////////////////////////////////////////////
ScrollReveal().reveal('.scroll-head',{delay:300});
ScrollReveal().reveal('.scroll-body',{delay:500});
ScrollReveal().reveal('.card1',{delay:400});
ScrollReveal().reveal('.card2',{delay:600});
ScrollReveal().reveal('.card3',{delay:800});
ScrollReveal().reveal('.cpyright',{delay:1000});
ScrollReveal().reveal('.border1',{delay:1500});
