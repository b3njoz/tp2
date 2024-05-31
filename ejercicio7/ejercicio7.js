async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    const divContenedor = obtenerElemento('divContenedor');

    usuarios.forEach(usuario => {
        const divUsuario = document.createElement('div');
        divUsuario.id = usuario.id;
        divUsuario.classList.add('usuario');

        const botonMostrar = document.createElement('button');
        const botonOcultar = document.createElement('button');
        botonMostrar.innerText = "Mostrar tareas";
        botonOcultar.innerText = "Ocultar tareas";
        botonOcultar.disabled = true;

        botonMostrar.addEventListener("click", async () => {
            const respuestaTareas = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${usuario.id}`);
            const tareas = await respuestaTareas.json();

            tareas.forEach(tarea => {
                const parrafoTarea = document.createElement('p');
                parrafoTarea.innerText = `Tarea ${tarea.id} : ${tarea.title}`;
                parrafoTarea.style.color = tarea.completed ? "green" : "red";
                parrafoTarea.classList.add('tarea');
                divUsuario.appendChild(parrafoTarea);
            });

            botonMostrar.disabled = true;
            botonOcultar.disabled = false;
        });

        botonOcultar.addEventListener("click", () => {
            const listaTareas = divUsuario.querySelectorAll('.tarea');
            listaTareas.forEach(tarea => tarea.remove());
            botonOcultar.disabled = true;
            botonMostrar.disabled = false;
        });

        divUsuario.innerHTML = `
            <p class="id">Id: ${usuario.id}</p>
            <p class="nombre">Nombre: ${usuario.name}</p>
            <p class="usuario">Usuario: ${usuario.username}</p>
            <p class="email">Email: ${usuario.email}</p>
            <p class="sitio">Sitio: ${usuario.website}</p>
        `;

        divUsuario.appendChild(botonMostrar);
        divUsuario.appendChild(botonOcultar);
        divContenedor.appendChild(divUsuario);
    });
}

function obtenerElemento(id) {
    return document.getElementById(id);
}

obtenerUsuarios();
