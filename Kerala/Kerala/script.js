
let slideIndex = 1;

showSlide();

function showSlide() {

  let i = 1;
  let slides = document.getElementsByClassName("slides");
  console.log(slides);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 20000);

}

// what new slider 
let newSlideIndex = 0;
let controler = document.getElementById("controler");
let newSlides = document.getElementsByClassName("new-slide");

// show first slide initially
function newshowSlide(index) {
  for (let i = 0; i < newSlides.length; i++) {
    newSlides[i].style.display = "none";
  }

  newSlides[index].style.display = "block";
}

// initial load
newshowSlide(newSlideIndex);

// click event
controler.addEventListener("click", () => {
  newSlideIndex++;

  if (newSlideIndex >= newSlides.length) {
    newSlideIndex = 0;
  }

  newshowSlide(newSlideIndex);
});


//  Memories for a Lifetime   slider

let controller = document.getElementById("hello");
let sliderContainer = document.getElementById("sliderContainer");

let currentIndex = 0;

console.log(controller);

controller.addEventListener("click", function () {
  currentIndex++;

  // Number card
  let totalCard = document.querySelectorAll(".slider-card").length;

  // reset when end reached

  if (currentIndex >= totalCard) {
    currentIndex = 0;
  }

  let sliderWidth = 400;

  sliderContainer.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
});




document.addEventListener("DOMContentLoaded", function () {

  let index = 0;

  let slides = document.querySelectorAll(".stunning-slide");
  let left = document.getElementById("left");
  let right = document.getElementById("right");

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  // initial
  showSlide(index);

  // RIGHT
  right.addEventListener("click", function () {
    index++;

    if (index >= slides.length) {
      index = 0;
    }

    showSlide(index);
  });

  // LEFT
  left.addEventListener("click", function () {
    index--;

    if (index < 0) {
      index = slides.length - 1;
    }

    showSlide(index);
  });

});



// where to go button  

let where = document.getElementById("where");
let whereShow = document.getElementById("where-to");
let hero = document.getElementById("hero");
let close = document.getElementById("close");

where.addEventListener("click", function(e){
  e.preventDefault(); // stop page jump
  whereShow.style.display = "block";
  hero.style.display = "none";
  where.style.color = "black";
  exper.style.color = "black";
  plan.style.color = "black";
});

close.addEventListener("click" , function(e){
  e.preventDefault();
   whereShow.style.display = "none";
  hero.style.display = "block";
})

// experience button

let exper = document.getElementById("exp");
let expShow = document.getElementById("exp-show");

let ExpClose = document.getElementById("exp-close");

exper.addEventListener("click", function(e){
expShow.style.display = "block";
  hero.style.display = "none";
    where.style.color = "black";
  exper.style.color = "black";
  plan.style.color = "black";
})

ExpClose.addEventListener("click" , function(e){
  e.preventDefault();
   expShow.style.display = "none";
  hero.style.display = "block";
})


// plan button 

let plan = document.getElementById("plan");
let planShow = document.getElementById("plan-show");

let planClose = document.getElementById("plan-close");

plan.addEventListener("click", function(e){
planShow.style.display = "block";
  hero.style.display = "none";
    where.style.color = "black";
  exper.style.color = "black";
  plan.style.color = "black";
})

planShow.addEventListener("click" , function(e){
  e.preventDefault();
   planShow.style.display = "none";
  hero.style.display = "block";
})


let colseMenu = document.getElementById("close-menu");

let menu= document.getElementById("menu");

let sideNav = document.getElementById("side-nav")

menu.addEventListener("click", function(e){
  e.preventDefault();
  sideNav.style.display="block";
})


colseMenu.addEventListener("click", function(e){
  e.preventDefault();
  sideNav.style.display = "none";
})





















function working() {
  console.log("i am working!");
  alert("i am working");
} 