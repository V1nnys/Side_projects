"use strict";

const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]"); //Obs 1
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true;
let operador; //global
let numeroAnterior; //armazenar valor

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto; //limpar
    novoNumero = false;
  } else {
    display.textContent += texto; //Obs 2
  }
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener("click", inserirNumero));

//operadores
const selecionarOperador = (evento) => {
  novoNumero = true;
  operador = evento.target.textContent;
  numeroAnterior = display.textContent;
};
operadores.forEach((operador) =>
  operador.addEventListener("click", selecionarOperador)
);

/*
Obs 1: querySelectorAll("[id*=tecla]"); É criado uma array com os dez valores e a busca é pelo que eles tem em comum,
a palavra TECLA, usando o * depois do id.

Obs 2: += pra concatenação

*/
