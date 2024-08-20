function validarCorreo() {
    const correo = document.getElementById("correo").value;
    const contenido = document.getElementById("contenido");
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexCorreo.test(correo)) {
        contenido.innerHTML = "Gracias por tu interes, te contactaré pronto";
    } else {
        ;
        contenido.innerHTML = "Ingrese un Email válido";
    };
}
function mostrarMensaje() {
    document.getElementById('parrafo1').style.display = "block";
}
function ocultarMensaje() {
    document.getElementById('parrafo1').style.display = "none";
}
function mostrarMensaje2() {
    document.getElementById('parrafo2').style.display = "block";
}
function ocultarMensaje2() {
    document.getElementById('parrafo2').style.display = "none";
}
function mostrarMensaje3() {
    document.getElementById('parrafo3').style.display = "block";
}
function ocultarMensaje3() {
    document.getElementById('parrafo3').style.display = "none";
}
function mostrarMensaje4() {
    document.getElementById('parrafo4').style.display = "block";
}
function ocultarMensaje4() {
    document.getElementById('parrafo4').style.display = "none";
}
window.onload = function () {
    document.getElementById("validaButton").addEventListener("click", validarCorreo);
    document.getElementById("boton1").addEventListener("click", mostrarMensaje);
    document.getElementById("boton1").addEventListener("dblclick", ocultarMensaje);
    document.getElementById("boton2").addEventListener("click", mostrarMensaje2);
    document.getElementById("boton2").addEventListener("dblclick", ocultarMensaje2);
    document.getElementById("boton3").addEventListener("click", mostrarMensaje3);
    document.getElementById("boton3").addEventListener("dblclick", ocultarMensaje3);
    document.getElementById("boton4").addEventListener("click", mostrarMensaje4);
    document.getElementById("boton4").addEventListener("dblclick", ocultarMensaje4);
}




