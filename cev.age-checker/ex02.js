function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./img/bebe-menino.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./img/jovem-menino.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./img/homem.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else {
        //idoso
        img.setAttribute("src", "./img/velho.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./img/bebe-menina.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "./img/jovem-menina.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./img/mulher.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      } else {
        //idoso
        img.setAttribute("src", "./img/velha.jpg");
        img.style.width = "300px";
        img.style.borderRadius = "50%";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img); //com isso a foto aparece.
  }
}
