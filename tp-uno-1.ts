/*Lo primero que queremos es que se muestren en consola 
todas las tareas que tiene pendientes el usuario.
O sea, que aún no están terminadas. 
Ordenarlas por prioridad (Alta, Media, Baja).*/
interface Tarea {
    nombre: string,
    prioridad: 1 | 2 | 3 ,
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
mostrarTareasPendientes(tareasDePersona);


/*1)

interface Persona {
    tarea: string,
    prioridad: string,
    status: string
}

const personas: Persona[] = [
    { tarea: "limpiar", prioridad: 1, status:true },
    { tarea: "hacer progra", prioridad: 1, status: true },
    { tarea: "leer", prioridad: 2, status: false },
    { tarea: "cocinar", prioridad: 1, status: true },
    { tarea: "coser", prioridad: 3, status: false }
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

2)

interface Persona {
    tarea: string,
    prioridad: number,
    status: boolean
}
interface Prioridades {
    alta: number;
    media: number;
    baja: number;
}

const prioridades: Prioridades = {
    alta: 1,
    media: 2,
    baja: 3
};

const tareasDePersona: Persona[] = [
    { tarea: "limpiar", prioridad: prioridades.media, status: true },
    { tarea: "hacer progra", prioridad: prioridades.alta, status: true },
    { tarea: "leer", prioridad: prioridades.media, status: false },
    { tarea: "cocinar", prioridad: prioridades.baja, status: true },
    { tarea: "coser", prioridad: prioridades.baja, status: false }
];

function mostrarTareasPendientes(user: Persona[]) {
    const tareasPendientes: Persona[] = [];
    for (let i = 0; i < user.length; i++) {
        const tarea = user[i];
        if (tarea.status) {
            tareasPendientes.push(tarea);
        }
    }
    tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        console.log(`Tarea: ${tarea.tarea}, Prioridad: ${tarea.prioridad}`);
    }
}
mostrarTareasPendientes(tareasDePersona);
*/
