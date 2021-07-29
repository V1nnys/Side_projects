"use strict";

const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]"); //Obs 1
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true;
let operador; //global
let numeroAnterior; //armazenar valor

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`); //forma resumida
    atualizarDisplay(resultado);

    /*
    if (operador == "+") {
      atualizarDisplay(numeroAnterior + numeroAtual);
    } else if (operador == "-") {
      atualizarDisplay(numeroAnterior - numeroAtual);
    } else if (operador == "*") {
      atualizarDisplay(numeroAnterior * numeroAtual);
    } else if (operador == "/") {
      atualizarDisplay(numeroAnterior / numeroAtual);
    }
    */
  }
};

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
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
    console.log(operador);
  }
};
operadores.forEach((operador) =>
  operador.addEventListener("click", selecionarOperador)
);

const ativarIgual = () => {
  calcular();
  operador = undefined;
};

const limparDisplay = () => (display.textContent = "");
document
  .getElementById("limparDisplay")
  .addEventListener("click", limparDisplay);

document.getElementById("igual").addEventListener("click", ativarIgual);

const limparCalculo = () => {
  limparDisplay();
  operador = undefined;
  numeroNovo = true;
  numeroAnterior = undefined;
};

document
  .getElementById("limparCalculo")
  .addEventListener("click", limparCalculo);

const removerUltimonumero = () =>
  (display.textContent = display.textContent.slice(0, -1)); //Obs 3
document
  .getElementById("backspace")
  .addEventListener("click", removerUltimonumero);

const inverterSinal = () => {
  novoNumero = true;
  atualizarDisplay(display.textContent * -1);
};
document.getElementById("inverter").addEventListener("click", inverterSinal);

const existeDecimal = () => display.textContent.indexOf(",") !== -1;
const existeValor = () => display.textContent.lenght > 0;
const inserirDecimal = () => {
  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay(",");
    } else {
      atualizarDisplay("0,");
    }
  }
};
document.getElementById("decimal").addEventListener("click", inserirDecimal);

/*
Obs 1: querySelectorAll("[id*=tecla]"); É criado uma array com os dez valores e a busca é pelo que eles tem em comum,
a palavra TECLA, usando o * depois do id.

Obs 2: += pra concatenação

Obs 3: Slice() É um método usado em arrays. O textContent retorna uma string e uma string é um array de caracteres.
Então Slice inicia no 0 e remove o último número/caractere.

*/
