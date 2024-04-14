/* Los inversores se quejan que las tareas tardan mucho en cargarse. 
Necesitamos adaptar el código anterior para que la carga se muestre 
de forma asíncrona.
Asumí que existe una función que devuelve el listado de tareas 
después de 3 segundos. Podés usar el ejemplo que hicimos en clase.*/
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

async function mostrarUsuario(user: Persona[]) {
    const prioridadAlta: Persona[] = [];
    const prioridadMedia: Persona[] = [];
    const prioridadBaja: Persona[] = [];
    try {
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
    catch (error) {
        console.error("error de carga", error);
    }
}

async function buscarTareas(): Promise<Persona[]> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const tareasPendientes: Persona[] = [];
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        if (persona.status !== "done") {
            tareasPendientes.push(persona);
        }
    }

    return tareasPendientes;
}

function tareaOrdenada(tareas: Persona[]) {
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        console.log(`Tarea: ${tarea.tarea} Prioridad: ${tarea.prioridad} Status: ${tarea.status}`);
    }
}

(async () => {
    try {
        console.log("Cargando tareas...");
        const tareas = await buscarTareas();
        console.log("Tareas cargadas:");
        mostrarUsuario(tareas);
    } catch (error) {
        console.error("Error al cargar las tareas:", error);
    }
})();

