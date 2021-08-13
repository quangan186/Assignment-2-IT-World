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

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 5000);
