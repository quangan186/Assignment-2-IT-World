const scroll_up = document.querySelector("#btn_scrollUp");
scroll_up.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

const readMoreBtns = document.querySelectorAll(".read-more-btn");
const texts = document.querySelectorAll(".content");

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    texts[index].classList.toggle("show-more");

    if (btn.innerText === "Read More") {
      btn.innerText = "Read Less";
    } else {
      btn.innerText = "Read More";
    }
  });
});

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  var i;

  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

showSlides();
