"Use strict";

/* Obs: nesse projeto a fim de diferenciar o que é nativo do javascript
   e o que criamos nas variáveis, estas serão criadas em PT-BR. */

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "snare.wav",
  K: "tink.wav",
  L: "tom.wav",
}; /* JSON(1) */

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

/*
criarDiv("A");
criarDiv("S");
Obs: Dessa forma é criada a div A,S,etc. Mas será criado um JSON(1).
*/

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

exibir(sons);
