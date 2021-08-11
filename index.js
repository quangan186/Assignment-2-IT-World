const scroll_up = document.querySelector("#btn_scrollUp");
scroll_up.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
