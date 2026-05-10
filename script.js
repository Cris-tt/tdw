console.log("Hola Mundo!");

var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_mensaje = document.getElementById("mensaje");
var input_submit = document.getElementById("submit");


input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;
    var valor_mensaje = input_mensaje.value;


    var placeholder_nombre = document.getElementById("nombre-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");
    var placeholder_mensaje = document.getElementById("mensaje-placeholder");

    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_email.innerHTML = valor_email;
    placeholder_mensaje.innerHTML = valor_mensaje;

    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add("oculto");
}



//Funcion de contador
function actualizarContador() {
    const fechaActual = new Date();
    const fechaEvento = new Date(2026, 4, 16, 12, 30, 30);

    const diferencia = fechaEvento - fechaActual;  //a miiliseundos
    // Calcular días, horas, minutos y segundos a partir de la diferencia
    if (diferencia <= 0) {
        document.querySelector(".contador").textContent = "¡El evento ha comenzado!";
        clearInterval(intervalo); // Detener el intervalo si el evento ha comenzado
        return;
    }
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    // Actualizar el contenido de los elementos HTML con los valores calculados
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}
const intervalo = setInterval(actualizarContador, 1000);  //actualiza el contador cada segundo 