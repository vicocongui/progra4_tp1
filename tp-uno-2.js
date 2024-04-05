"use strict";
const personas = [
    { tarea: "limpiar", prioridad: "baja", status: "done" },
    { tarea: "hacer progra", prioridad: "alta", status: "doing" },
    { tarea: "leer", prioridad: "media", status: "to-do" },
    { tarea: "cocinar", prioridad: "alta", status: "doing" },
    { tarea: "coser", prioridad: "baja", status: "to-do" }
];
function mostrarUsuario(user) {
    const prioridadAlta = [];
    const prioridadMedia = [];
    const prioridadBaja = [];
    for (let i = 0; i < user.length; i++) {
        const usuario = user[i];
        if (usuario.status !== "done") {
            if (usuario.prioridad === "alta") {
                prioridadAlta.push(usuario);
            }
            else if (usuario.prioridad === "media") {
                prioridadMedia.push(usuario);
            }
            else {
                prioridadBaja.push(usuario);
            }
        }
    }
    tareaOrdenada(prioridadAlta);
    tareaOrdenada(prioridadMedia);
    tareaOrdenada(prioridadBaja);
}
function tareaOrdenada(tareas) {
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        console.log(`Tarea: ${tarea.tarea} Prioridad: ${tarea.prioridad} Status: ${tarea.status}`);
    }
}
mostrarUsuario(personas);
