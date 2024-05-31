const formulario = $("formulario");
const mensaje = $("mensaje");

formulario.onsubmit = (e) => {
    e.preventDefault();
    if (formulario["nombre"].value === ""){
        mensaje.textContent = "Nombre vacio";
        mensaje.style.color = 'red';
    } else if (formulario["apellido"].value === "") {
        mensaje.textContent = "Apellido vacio";
        mensaje.style.color = 'red';
    } else if (formulario["edad"].value === "") {
        mensaje.textContent = "Edad vacia";
        mensaje.style.color = 'red';
    } else if (formulario["edad"].value <= 0) {
        mensaje.textContent = "Verifique que la edad sea mayor a 0";
        mensaje.style.color = 'red';
    } else if (formulario["edad"].value < 18) {
        mensaje.textContent = "Solo +18";
        mensaje.style.color = 'red';
    } else if (formulario["altura"].value <= 0){
        mensaje.textContent = "La altura tiene que ser mayor a 0";
        mensaje.style.color = 'red';
    } else if (formulario["email"].value === "") {
        mensaje.textContent = "Mail vacio"
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = "Datos ingresados correctamente"
        mensaje.style.color = "green"
    }
}

function $(elemento) {
    return document.getElementById(elemento);
}