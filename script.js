var lineas = [
    "... et aliquam nisi",
    "... Eveniet eos laudantium hic dolorem",
    "... Vestibulum lacus dolor, porta ac lacus eget, commodo"
];

var indice = 0;
var textoAleatorio = document.getElementById("text");

function cambiarTextoAleatorio() {
    textoAleatorio.style.opacity = 0;
    setTimeout(function () {
        textoAleatorio.textContent = lineas[indice];
        indice = (indice + 1) % lineas.length;
        textoAleatorio.style.opacity = 1;
    }, 1000);
}

setInterval(cambiarTextoAleatorio, 3000);

document.addEventListener("DOMContentLoaded", function() {
    const btnOpciones = document.getElementById("btnOpciones");
    const opcionesSection = document.querySelector(".col-lg-3.col-12.d-none.d-lg-block");
    btnOpciones.addEventListener("click", function() {
      if (opcionesSection.classList.contains("d-none")) {
        opcionesSection.classList.remove("d-none");
        opcionesSection.classList.add("d-lg-block");
      } else {
        opcionesSection.classList.remove("d-lg-block");
        opcionesSection.classList.add("d-none");
      }
    });
  });