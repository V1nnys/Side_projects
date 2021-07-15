"use strict";

const images = [
  { id: "6", url: "./images/ffxv.jpg" },
  { id: "1", url: "./images/chrono-trigger.jpg" },
  { id: "2", url: "./images/ffix.jpg" },
  { id: "3", url: "./images/shenmue.jpg" },
  { id: "4", url: "./images/the-witcher-3.jpg" },
  { id: "5", url: "./images/ffvii.jpg" },
]; /* Lembrar que o slide começa da segunda imagem (margin-left: -100%) */

const containerItems = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
        <div class="item">
        <img src='${image.url}'
        </div>
        <style>
        img{width: 60vw; height: 60vh; border-radius: 10px;}
        </style>
        `;
  });
};

loadImages(images, containerItems);

let items = document.querySelectorAll(".item");

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#previous").addEventListener("click", next);
document.querySelector("#next").addEventListener("click", previous);
/* Nessa última parte  eu inverti o next e o previous, deixando um efeito
 melhor de rolagem. Clicando no botão direito, a imagem rola da direita
 para esquerda. */
