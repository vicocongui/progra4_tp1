/*Lo primero que queremos es que se muestren en consola 
todas las tareas que tiene pendientes el usuario.
O sea, que aún no están terminadas. 
Ordenarlas por prioridad (Alta, Media, Baja).*/
interface Persona{
    tarea: string,
    prioridad: string,
    status: string
}

const personas: Persona[] = [
    { tarea: "limpiar", prioridad: "baja", status: "done" },
    { tarea: "hacer progra", prioridad: "alta", status: "doing" },
    { tarea: "leer", prioridad: "media", status: "to-do" },
    { tarea: "cocinar", prioridad: "media", status: "done" },
    { tarea: "coser", prioridad: "baja", status: "to-do" }
];

function mostrarUsuario(user: Persona[]) {
    for(let i=0; i < user.length; i++) {
        const usuario = user[i];
        if(usuario.status !== "done") {
            console.log(`Tarea: ${usuario.tarea} Prioridad: ${usuario.prioridad} Status: ${usuario.status}`);
        }
    }
}

mostrarUsuario(personas);