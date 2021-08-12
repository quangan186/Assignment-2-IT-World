const scroll_up = document.querySelector("#btn_scrollUp");
scroll_up.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.content');

readMoreBtn.addEventListener("click", (e)=>{
  text.classList.toggle('show-more');
  if (readMoreBtn.innerText === 'Read More') {
    readMoreBtn.innerText = 'Read Less';
  } else {
    readMoreBtn.innerText = 'Read More';
  }
})
