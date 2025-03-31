var countDownDate = new Date("April 6, 2025 17:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "STOP HACKATHON!";
  }
}, 1000);

setInterval(() => {
  const logo = document.getElementById("logo");
  logo.classList.add("logo-animate");
  setTimeout(() => logo.classList.remove("logo-animate"), 5000);
}, 30000); 
