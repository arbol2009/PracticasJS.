
const colores = [
    "#A8DADC",
    "#FFD6A5",
    "#CAFFBF",
    "#BDB2FF",
    "#FFC8DD",
    "#FDFFB6"
];

const botonColor = document.getElementById("cambiarColor");
const textoColor = document.getElementById("color");

botonColor.addEventListener("click", function() {
    let aleatorio = Math.floor(Math.random() * colores.length);

    let colorElegido = colores[aleatorio];

    document.body.style.backgroundColor = colorElegido;

    textoColor.textContent = colorElegido;
});

let contador = 0;

const numero = document.getElementById("numero");

document.getElementById("sumar").addEventListener("click", function() {
    contador++;
    actualizarContador();
});

document.getElementById("restar").addEventListener("click", function() {
    contador--;
    actualizarContador();
});

document.getElementById("reiniciar").addEventListener("click", function() {
    contador = 0;
    actualizarContador();
});

function actualizarContador() {
    numero.textContent = contador;

    if (contador > 0) {
        numero.style.color = "green";
    } 
    else if (contador < 0) {
        numero.style.color = "red";
    } 
    else {
        numero.style.color = "black";
    }
}
