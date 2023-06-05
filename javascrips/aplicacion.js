
function encriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  
    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("texto-h3").style.display = "none";
    document.getElementById("input-2").value = textoCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  
    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("texto-h3").style.display = "none";
    document.getElementById("input-2").value = textoCifrado;
    document.getElementById("Copiar").style.display = "show";
    document.getElementById("Copiar").style.display = "inherit";
  }
  
  function copy() {
    var Cont = document.querySelector("#input-2");
    Cont.select();
    document.execCommand("copy");
    alert("¡Se copió el contenido!");
  }

  var btn =document.querySelector("#btn-Encriptar");
  btn.onclick=encriptar;
  var btn2 =document.querySelector("#btn-Desencriptar");
  btn2.onclick=desencriptar;
  var btn3 =document.querySelector("#Copiar");
  btn3.onclick=copy;
  
  