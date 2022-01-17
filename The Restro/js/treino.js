// let movex =
// let menushow = document.getElementById(`m-mobile`);

// function showMenu() {
//   document
//     .getElementById(`wrap-mobile`)
//     .setAttribute("style", "display: block;");
//   document
//     .getElementById("m-mobile")
//     .setAttribute(
//       "style",
//       "position: absolute; background-image: url('../img/sinal-da-cruz.png')"
//     );

//   menushow.innerHTML = `
//     <div class="menu-mobile" id="m-mobile" onclick="closeMenu()"></div>
//     `;
// }

// function closeMenu() {
//   menushow.innerHTML = `
//     <div class="menu-mobile" id="m-mobile" onclick="showMenu()"></div>
//     `;
// }

/*-------------------JQUERY----------------------- */

$(function () {
  $(".menu-mobile").click(function () {
    $(".wrap-mobile").find("ul").slideToggle();
  });
});

/*--------------Menu-mobile------------------------ */

let position = 0;

function swipeRight() {
  if (position >= -45) {
    position -= 10;
  }
  document
    .getElementById("dep-content")
    .setAttribute("style", `position:relative;left:${position}%;`);
}

function swiperLeft() {
  document
    .getElementById("dep-content")
    .setAttribute("style", "position:relative;left:0;");
}
