/*La forma de ordenar tareas por prioridad no está alcanzando para
 saber qué hacer a continuación. Ahora queremos que las tareas se
 muestren de nuevo como en el punto 1, donde las de Alta prioridad
 aparecen siempre primero. Pero las demás van a, además, tener una
 fecha límite (deadline) que marca que debe completarse antes de cierto día.
 Ordenarlas por la fecha límite que tenga cargada esa tarea.*/

interface Tarea {
    nombre: string,
    prioridad: 1 | 2 | 3,
    status: boolean
    deadline: Date;
}

//prioridad alta=1, baja=3
const tareasDePersona: Tarea[] = [
    { nombre: "limpiar", prioridad: 2, status: true, deadline: new Date("2030-04-18") },
    { nombre: "hacer progra", prioridad: 1, status: true, deadline: new Date("2024-04-17") },
    { nombre: "leer", prioridad: 2, status: false, deadline: new Date("2024-04-07") },
    { nombre: "cocinar", prioridad: 3, status: true, deadline: new Date("2024-04-08") },
    { nombre: "coser", prioridad: 3, status: true, deadline: new Date("2025-02-08") }
];

function mostrarTareasPendientes(user: Tarea[]) {
    const tareasPendientes: Tarea[] = [];
    for (let i = 0; i < user.length; i++) {
        const tareas = user[i];
        if (tareas.status) {
            tareasPendientes.push(tareas);
        }
    }
    tareasPendientes.sort((a, b) => {
        const diferenciarPrioridad = a.prioridad - b.prioridad
        if (diferenciarPrioridad !== 0) {
            return diferenciarPrioridad;
        }
        return a.deadline.getTime() - b.deadline.getTime();
    });


    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        console.log(`Tarea: ${tarea.nombre}, Prioridad: ${tarea.prioridad}, Deadline: ${tarea.deadline}`);
    }
}

mostrarTareasPendientes(tareasDePersona);