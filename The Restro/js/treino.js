function showMenu() {
  let menushow = document.getElementById(`m-mobile`);
  window.alert("Menu funcionando");
}

// function swipeRight() {
//   document.getElementById(`dep-content`).classList.remove("dep-content");
//   document.getElementById(`dep-content`).classList.add(`swipe`);
// }

// function swiperLeft() {
//   document.getElementById(`dep-content`).classList.remove("swipe");
//   document.getElementById(`dep-content`).classList.add(`dep-content`);
// }

function swipeRight() {
  document
    .getElementById("dep-content")
    .setAttribute("style", "position:relative;left:-45%;");
  if (scrollX < 1) {
    //window.alert("Funciona!");
  }
}

function swiperLeft() {
  document
    .getElementById("dep-content")
    .setAttribute("style", "position:relative;left:0;");
}
