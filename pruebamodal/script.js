// Obtener los modales
var modal1 = document.getElementById("miModal");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

// Obtener los botones
var btnAbrirModal = document.getElementById("abrirModal");
var btnConfirmaEncuesta = document.getElementById("confirmaEncuesta");
var btnConfirmaRespuesta = document.getElementById("confirmaRespuesta");
var btnConfirmaModal3 = document.getElementById("confirmamodal3"); // Corregido el nombre de la variable

// Obtener los elementos de cierre
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// Obtener los campos de entrada
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var lenguaje = document.getElementById("lenguaje");
var respuesta = document.getElementById("respuesta");

// Abrir el primer modal
btnAbrirModal.onclick = function() {
    modal1.style.display = "block";
};

// Cerrar el primer modal
span1.onclick = function() {
    modal1.style.display = "none";
};

// Confirmar la encuesta
btnConfirmaEncuesta.onclick = function() {
    if (nombre.value === "" || edad.value === "" || lenguaje.value === "") {
        alert("Por favor, complete todos los campos");
    } else {
        modal1.style.display = "none";
        // Mostrar el segundo modal
        document.getElementById("modal2.1").textContent = `Hola ${nombre.value}, tienes ${edad.value} años y ya estás aprendiendo ${lenguaje.value}!`;
        document.getElementById("pregunta").textContent = `¿Te gusta estudiar ${lenguaje.value}? Responde con el número 1 para SÍ o 2 para NO.`;
        modal2.style.display = "block";
    }
};

// Confirmar la respuesta
btnConfirmaRespuesta.onclick = function() {
    if (respuesta.value === "") {
        alert("Por favor, selecciona una respuesta");
    } else if (respuesta.value > 2 || respuesta.value < 1) {
        alert("Por favor, selecciona una respuesta válida (1 para SÍ o 2 para NO)");
    } else if (respuesta.value == "1") {
        limpiarCaja();
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        modal2.style.display = "none"; // Cerrar el segundo modal
    } else if (respuesta.value == "2") {
        limpiarCaja();
        modal2.style.display = "none"; // Cerrar el segundo modal
        // Mostrar el tercer modal
        document.getElementById("modal3.1").textContent = `Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?`;
        modal3.style.display = "block";
    }
};
// Obtener el elemento <select>
var selectOpcion = document.getElementById("opcion");

// Escuchar cambios en la selección
selectOpcion.addEventListener("change", function() {
    // Obtener el valor seleccionado
    var valorSeleccionado = selectOpcion.value;

    // Realizar acciones en función de la opción seleccionada
    if (valorSeleccionado === "si") {
        alert("¡Genial! Sigue programando.");
        modal3.style.display = "none";
    } else if (valorSeleccionado === "no") {
        alert("Perfecto, suerte en tu camino");
        modal3.style.display = "none";
    } else {
        alert("Por favor, selecciona una opción.");
    }
});

// Cerrar el segundo modal
span2.onclick = function() {
    modal2.style.display = "none";
};

// Cerrar el tercer modal
span3.onclick = function() {
    modal3.style.display = "none";
};

// Cerrar los modales al hacer clic fuera de ellos
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};
function limpiarCaja(){
    nombre.value = "";
    edad.value = "";
    lenguaje.value = "";
    respuesta.value = "";
}