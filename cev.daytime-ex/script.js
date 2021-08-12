function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  //var hora = 12;
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = "manha.jpg";
    document.body.style.bachground = "#a6e5ed";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = "tarde.jpg";
    document.body.style.background = "#eba865";
  } else {
    //Boa noite!
    img.src = "noite.jpg";
    document.body.style.background = "#3a4466";
  }
}
