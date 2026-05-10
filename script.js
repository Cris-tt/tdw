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