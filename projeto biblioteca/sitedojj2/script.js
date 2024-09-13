window.scrollTo(0, 0);
document.getElementById("carrosselLivros").scrollLeft = 0;
document.getElementById("carrosselPoemas").scrollLeft = 0;
document.getElementById("carrosselFrases").scrollLeft = 0;

function prevBtn(div) {
  div.scrollLeft -= 200;
}

function nextBtn(div) {
  div.scrollLeft += 200;
}