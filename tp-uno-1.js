"use strict";
const personas = [
    { tarea: "limpiar", prioridad: "baja", status: "done" },
    { tarea: "hacer progra", prioridad: "alta", status: "doing" },
    { tarea: "leer", prioridad: "media", status: "to-do" },
    { tarea: "cocinar", prioridad: "media", status: "done" },
    { tarea: "coser", prioridad: "baja", status: "to-do" }
];
function mostrarUsuario(user) {
    for (let i = 0; i < user.length; i++) {
        const usuario = user[i];
        if (usuario.status !== "done") {
            console.log(`Tarea: ${usuario.tarea} Prioridad: ${usuario.prioridad} Status: ${usuario.status}`);
        }
    }
}
mostrarUsuario(personas);
