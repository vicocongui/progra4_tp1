/* Los inversores se quejan que las tareas tardan mucho en cargarse. 
Necesitamos adaptar el código anterior para que la carga se muestre 
de forma asíncrona.
Asumí que existe una función que devuelve el listado de tareas 
después de 3 segundos. Podés usar el ejemplo que hicimos en clase.*/
/*funcion en clase
async function delay(): Promise<delayTarea<Tarea>>  {
    await new Promise(resolve => setTimeout(resolve, 3000));
    mostrarTareas(tareas)
    return {tipo: "exito"};
}*/
interface Tarea {
    nombre: string,
    prioridad: 1 | 2 | 3,
    status: boolean
}

//prioridad alta=1, baja=3
const tareasDePersona: Tarea[] = [
    { nombre: "limpiar", prioridad: 2, status: true },
    { nombre: "hacer progra", prioridad: 1, status: true },
    { nombre: "leer", prioridad: 2, status: false },
    { nombre: "cocinar", prioridad: 3, status: true },
    { nombre: "coser", prioridad: 3, status: false }
];

function mostrarTareasPendientes(user: Tarea[]) {
    const tareasPendientes: Tarea[] = [];
    for (let i = 0; i < user.length; i++) {
        const tareas = user[i];//tarea actual
        if (tareas.status) {
            tareasPendientes.push(tareas);
        }
    }
    tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        console.log(`Tarea: ${tarea.nombre}, Prioridad: ${tarea.prioridad}`);
    }
}
//mostrarTareasPendientes(tareasDePersona);

async function esperoTiempo() {
    console.log("Cargando tareas...");
    const promesa = await new Promise<string>(resolve => {
        setTimeout(() => {
            mostrarTareasPendientes(tareasDePersona);
            resolve("aca terminan las tareas");
        }, 3000)
    });
    console.log(promesa);
}


esperoTiempo();
/*
prueba 1 async
async function delay(): Promise<delayTarea<Tarea>> {
    await new Promise(resolve => setTimeout(resolve, 3000));
    mostrarTareas(tareas)
    return { tipo: "exito" };
}*/

/*
prueba 2 async
async function esperoTiempo() {
    console.log("Cargando tareas...");
    const promesa = await new Promise<string>(resolve => {
        setTimeout(resolve, 3000)
        mostrarTareasPendientes(tareasDePersona)
    })
}*/
//promesa.then(valor => console.log(valor))
/*
1) PRIMER INTENTO
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
})();*/

