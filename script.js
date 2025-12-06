var countDownDate = new Date("Dec 7, 2025 17:00:00").getTime();
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
vid.playbackRate = 0.6;

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
    "./Sponsors/Sponsor8.png",
    "./Sponsors/Sponsor9.png",
    "./Sponsors/Sponsor10.png",
    "./Sponsors/Sponsor11.png",
  ];

  let currentImageIndex = 10;
  const carouselImage = document.getElementById("carousel-image");
  const AUTO_INTERVAL_MS = 45000;
  let autoTimer = null;

  function showImage(index) {
    const imagePath = sponsorImages[index];
    carouselImage.src = imagePath;

    carouselImage.onerror = () => {
      console.error(`Failed to load image: ${imagePath}`);
      carouselImage.src = "./Sponsors/placeholder.png";
    };
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % sponsorImages.length;
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + sponsorImages.length) % sponsorImages.length;
    showImage(currentImageIndex);
  }

  function startAutoAdvance() {
    stopAutoAdvance();
    autoTimer = setInterval(nextImage, AUTO_INTERVAL_MS);
  }

  function stopAutoAdvance() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resetAutoAdvance() {
    startAutoAdvance();
  }

  showImage(currentImageIndex);
  startAutoAdvance();

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextImage();
      resetAutoAdvance();
    } else if (e.key === "ArrowLeft") {
      prevImage();
      resetAutoAdvance();
    }
  });

  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevImage();
      resetAutoAdvance();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextImage();
      resetAutoAdvance();
    });
  }

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
