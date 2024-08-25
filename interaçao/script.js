var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

var btnCriptografar = document.querySelector(".btn-criptografar");
var btnDescriptografar = document.querySelector(".btn-descriptografar");

btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);

function criptografar(){
    var texto = textInput.value;

    var result1 = texto.replace(/e/g, "esc");
    var result2 = result1.replace(/i/g, "inh");
    var result3 = result2.replace(/a/g, "anh");
    var result4 = result3.replace(/o/g, "oxt");
    var result5 = result4.replace(/u/g, "uqq");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + result5 + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    var texto = textInput.value;
    var result1 = texto.replace(/esc/g, "e");
    var result2 = result1.replace(/inh/g, "i");
    var result3 = result2.replace(/anh/g, "a");
    var result4 = result3.replace(/oxt/g, "o");
    var result5 = result4.replace(/uqq/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + result5 + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('output-texto');

    textoCop.select();
    document.execCommand('copy');

    alert("Texto copiado para área de transferência.");
}