/*boton up*/
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}
