// ===========================
// AUTO HERO SLIDER
// ===========================

let slideIndex = 0;

function showSlide() {
  let slides = document.getElementsByClassName("slides");
  if (slides.length === 0) return;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 5000);
}

showSlide();



// ===========================
// NEW SLIDER
// ===========================

let newSlideIndex = 0;
let controler = document.getElementById("controler");
let newSlides = document.getElementsByClassName("new-slide");

function newshowSlide(index) {
  if (newSlides.length === 0) return;
  for (let i = 0; i < newSlides.length; i++) {
    newSlides[i].style.display = "none";
  }
  newSlides[index].style.display = "block";
}

newshowSlide(newSlideIndex);

if (controler) {
  controler.addEventListener("click", () => {
    newSlideIndex++;
    if (newSlideIndex >= newSlides.length) newSlideIndex = 0;
    if (newSlideIndex === 0) {
      controler.classList.remove("fa-angle-left");
      controler.classList.add("fa-angle-right");
    } else {
      controler.classList.remove("fa-angle-right");
      controler.classList.add("fa-angle-left");
    }
    newshowSlide(newSlideIndex);
  });
}



// ===========================
// MEMORIES SLIDER
// ===========================

let controller = document.getElementById("hello");
let sliderContainer = document.getElementById("sliderContainer");
let currentIndex = 0;

if (controller && sliderContainer) {
  controller.addEventListener("click", function () {
    currentIndex++;
    let totalCard = document.querySelectorAll(".slider-card").length;
    if (currentIndex >= totalCard) currentIndex = 0;
    let sliderWidth = 400;
    sliderContainer.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
  });
}



// ===========================
// STUNNING SLIDER
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  let slides = document.querySelectorAll(".stunning-slide");
  let left = document.getElementById("left");
  let right = document.getElementById("right");

  if (slides.length === 0) return;

  function showStunningSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  showStunningSlide(index);

  if (right) {
    right.addEventListener("click", function () {
      index++;
      if (index >= slides.length) index = 0;
      showStunningSlide(index);
    });
  }

  if (left) {
    left.addEventListener("click", function () {
      index--;
      if (index < 0) index = slides.length - 1;
      showStunningSlide(index);
    });
  }
});



// ===========================
// NAVIGATION DROPDOWNS
// ===========================

let where = document.getElementById("where");
let whereShow = document.getElementById("where-to");
let close = document.getElementById("close");

let exper = document.getElementById("exp");
let expShow = document.getElementById("exp-show");
let expClose = document.getElementById("exp-close");

let plan = document.getElementById("plan");
let planShow = document.getElementById("plan-show");
let planClose = document.getElementById("plan-close");

let hero = document.getElementById("hero");

function resetUI() {
  if (whereShow) whereShow.style.display = "none";
  if (expShow)   expShow.style.display   = "none";
  if (planShow)  planShow.style.display  = "none";
  if (where) where.style.color = "black";
  if (exper) exper.style.color = "black";
  if (plan)  plan.style.color  = "black";
}

// WHERE TO GO
if (where && whereShow) {
  where.addEventListener("click", function (e) {
    e.preventDefault();
    resetUI();
    whereShow.style.display = "block";
    if (hero) hero.style.display = "none";
  });
}

if (close) {
  close.addEventListener("click", function () {
    if (whereShow) whereShow.style.display = "none";
    if (hero) hero.style.display = "block";
  });
}

// EXPERIENCES
if (exper && expShow) {
  exper.addEventListener("click", function (e) {
    e.preventDefault();
    resetUI();
    expShow.style.display = "block";
    if (hero) hero.style.display = "none";
  });
}

if (expClose) {
  expClose.addEventListener("click", function () {
    if (expShow) expShow.style.display = "none";
    if (hero) hero.style.display = "block";
  });
}

// PLAN YOUR TRIP
if (plan && planShow) {
  plan.addEventListener("click", function (e) {
    e.preventDefault();
    resetUI();
    planShow.style.display = "block";
    if (hero) hero.style.display = "none";
  });
}

if (planClose) {
  planClose.addEventListener("click", function () {
    if (planShow) planShow.style.display = "none";
    if (hero) hero.style.display = "block";
  });
}



// ===========================
// SIDEBAR MENU  ← FIXED
// ===========================

let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");
let sideNav = document.getElementById("side-nav");

// Open sidebar — add the .open class (CSS handles the slide-in via transform)
if (menu && sideNav) {
  menu.addEventListener("click", function () {
    sideNav.classList.add("open");
  });
}

// Close sidebar — remove the .open class
if (closeMenu && sideNav) {
  closeMenu.addEventListener("click", function () {
    sideNav.classList.remove("open");
  });
}



// ===========================
// ARROW HOVER EFFECT
// ===========================

let arrows = document.querySelectorAll(".right-arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("mouseenter", () => {
    arrow.classList.remove("fa-angle-right");
    arrow.classList.add("fa-arrow-right");
  });
  arrow.addEventListener("mouseleave", () => {
    arrow.classList.remove("fa-arrow-right");
    arrow.classList.add("fa-angle-right");
  });
});



// ===========================
// VIDEO VOLUME CONTROL
// ===========================

let videos = document.querySelectorAll(".video");
let volumeBtn = document.querySelector(".volume");

if (volumeBtn) {
  volumeBtn.addEventListener("click", () => {
    videos.forEach((video) => {
      video.muted = !video.muted;
    });
  });
}



// ===========================
// VIDEO PLAY / PAUSE
// ===========================

let pauseBtn = document.getElementById("pause");

if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    videos.forEach((video) => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
}



// ===========================
// BACK TO TOP / SCROLL FEATURE
// ===========================

(function () {
  let btn = document.getElementById("back-to-top");

  if (!btn) {
    btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// Smooth-scroll for on-page anchor links (e.g. href="#section")
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const targetId = link.getAttribute("href");
  if (targetId.length > 1) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});



// ===========================
// TEST FUNCTION
// ===========================

function working() {
  console.log("I am working!");
  alert("I am working!");
}