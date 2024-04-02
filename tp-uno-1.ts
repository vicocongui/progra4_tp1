/*Lo primero que queremos es que se muestren en consola 
todas las tareas que tiene pendientes el usuario.
O sea, que aún no están terminadas. 
Ordenarlas por prioridad (Alta, Media, Baja).*/
interface Persona {
    tarea: string,
    prioridad: string,
    status: string
}

const personas: Persona[] = [
    { tarea: "limpiar", prioridad: "baja", status: "done" },
    { tarea: "hacer progra", prioridad: "alta", status: "doing" },
    { tarea: "leer", prioridad: "media", status: "to-do" },
    { tarea: "cocinar", prioridad: "alta", status: "doing" },
    { tarea: "coser", prioridad: "baja", status: "to-do" }
];

function mostrarUsuario(user: Persona[]) {
    const prioridadAlta: Persona[] = [];
    const prioridadMedia: Persona[] = [];
    const prioridadBaja: Persona[] = [];

    for (let i = 0; i < user.length; i++) {
        const usuario = user[i];
        if (usuario.status !== "done") {
            if (usuario.prioridad === "alta") {
                prioridadAlta.push(usuario);
            } else if (usuario.prioridad === "media") {
                prioridadMedia.push(usuario);
            } else {
                prioridadBaja.push(usuario);
            }
        }
    }
    tareaOrdenada(prioridadAlta);
    tareaOrdenada(prioridadMedia);
    tareaOrdenada(prioridadBaja);
}

function tareaOrdenada(tareas: Persona[]) {
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        console.log(`Tarea: ${tarea.tarea} Prioridad: ${tarea.prioridad} Status: ${tarea.status}`);
    }
}
mostrarUsuario(personas);
