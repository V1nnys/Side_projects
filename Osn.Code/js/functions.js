$('nav.menu-mobile > i').click(function(){
   $(this).parent().find('ul').slideToggle();
})

// ===========Menu Scroll to==========

const menuLinks = document.querySelectorAll('.menu-desktop a[href^="#"]');
const menuMobile = document.querySelectorAll('.menu-mobile a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -140;
    nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
})

menuMobile.forEach((link) => {
    link.addEventListener("click", scrollToSection);
})

//=========Head Slide==========

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')

        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }
   
        items.forEach(item => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: 'center'
        });

        items[currentItem].classList.add('current-item');
    });
});

// ===========Swiper Testimonials============

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });