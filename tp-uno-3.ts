/* Ahora los inversores nos piden ver las tareas que tiene asignada
 cada persona. Así que necesitamos que, dado una persona, se muestren solo
sus tareas de igual manera que en el punto 1. 
¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!.*/

interface Cliente {
    nombre: string,
    tareas: TareaCliente[]
}

interface TareaCliente {
    tarea: string,
    prioridad: string,
    status: string
}

const clientes: Cliente[] = [
    {
        nombre: "Pepe",
        tareas: [
            { tarea: "limpiar", prioridad: "baja", status: "done" },
            { tarea: "hacer progra", prioridad: "alta", status: "doing" },
            { tarea: "leer", prioridad: "media", status: "to-do" }
        ]
    },
    {
        nombre: "Ana",
        tareas: [
            { tarea: "comprar víveres", prioridad: "media", status: "to-do" },
            { tarea: "preparar presentación", prioridad: "alta", status: "doing" },
            { tarea: "llamar a cliente", prioridad: "baja", status: "done" }
        ]
    },
    {
        nombre: "Lolo",
        tareas: [
            { tarea: "hacer ejercicio", prioridad: "alta", status: "to-do" },
            { tarea: "estudiar", prioridad: "baja", status: "doing" },
            { tarea: "cocinar", prioridad: "media", status: "to-do" },
            { tarea: "limpiar", prioridad: "alta", status: "to-do" }
        ]
    }
];

function mostrarTareaPorCliente(nombre: string): TareaCliente[] {
    const encontrarTarea: TareaCliente[] = [];
    console.log(`Encontrando tareas de: ${nombre}`);
    clientes.map(cliente => {
        if (nombre === cliente.nombre) {
            encontrarTarea.push(...cliente.tareas);
        }
    })
    return encontrarTarea;
}

console.log(mostrarTareaPorCliente("Lolo"));

function ordenarTareasPorPrioridad() {

}
