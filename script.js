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

let vid = document.getElementById("background-video");
vid.playbackRate = 0.5;

setInterval(() => {
  const logo = document.getElementById("logo");
  logo.classList.add("logo-animate");
  setTimeout(() => logo.classList.remove("logo-animate"), 5000);
}, 30000);

document.addEventListener("DOMContentLoaded", () => {
  const sponsorImages = [
    "./Sponsors/Sponsor1.png",
    "./Sponsors/Sponsor2.png",
    "./Sponsors/Sponsor3.png",
    "./Sponsors/Sponsor4.png",
    "./Sponsors/Sponsor5.png",
    "./Sponsors/Sponsor6.png",
    "./Sponsors/Sponsor7.png",
  ];

  let currentImageIndex = 0;
  const carouselImage = document.getElementById("carousel-image");

  function updateCarouselImage() {
    const imagePath = sponsorImages[currentImageIndex];
    carouselImage.src = imagePath;

    carouselImage.onerror = () => {
      console.error(`Failed to load image: ${imagePath}`);
      carouselImage.src = "./Sponsors/placeholder.png"; 
    };

    currentImageIndex = (currentImageIndex + 1) % sponsorImages.length;
  }

  updateCarouselImage(); 
  setInterval(updateCarouselImage, 90000); 

  const topLogos = document.querySelectorAll(".top-logo");

  function animateTopLogos() {
    topLogos.forEach((logo, index) => {
      setTimeout(() => {
        logo.classList.add("logo-animate");
        setTimeout(() => logo.classList.remove("logo-animate"), 5000);
      }, index * 600);
    });
  }

  setInterval(animateTopLogos, 600000);
  animateTopLogos();
});
