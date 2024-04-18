/* Ahora los inversores nos piden ver las tareas que tiene asignada
 cada persona. Así que necesitamos que, dado una persona, se muestren solo
sus tareas de igual manera que en el punto 1. 
¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!.*/
interface Cliente {
    nombre: string,
    tareas: TareaCliente[];
}
interface TareaCliente {
    titulo: string,
    prioridad: 1 | 2 | 3,
    status: boolean
}

const clientes: Cliente[] = [
    {
        nombre: "Pepe",
        tareas: [
            { titulo: "limpiar", prioridad: 1, status: false },
            { titulo: "hacer progra", prioridad: 3, status: false },
            { titulo: "leer", prioridad: 2, status: true }
        ]
    },
    {
        nombre: "Ana",
        tareas: [
            { titulo: "comprar víveres", prioridad: 2, status: true },
            { titulo: "preparar presentación", prioridad: 1, status: false },
            { titulo: "llamar a cliente", prioridad: 2, status: true }
        ]
    },
    {
        nombre: "Lolo",
        tareas: [
            { titulo: "hacer ejercicio", prioridad: 2, status: false },
            { titulo: "estudiar", prioridad: 3, status: true },
            { titulo: "cocinar", prioridad: 1, status: true },
            { titulo: "limpiar", prioridad: 3, status: false }
        ]
    }
];

function mostrarTareasPendientes(user: TareaCliente[]) {
    const tareasPendientes: TareaCliente[] = [];
    for (let i = 0; i < user.length; i++) {
        const tareas = user[i];//tarea actual
        if (tareas.status) {
            tareasPendientes.push(tareas);
        }
    }
    tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        console.log(`Tarea: ${tarea.titulo}, Prioridad: ${tarea.prioridad}`);
    }
}

function buscarTareaPorCliente(users: Cliente[]): Map<string, Cliente> {
    const mapaUsuarios: Map<string, Cliente> = new Map();
    users.forEach(usuario => {
        mapaUsuarios.set(usuario.nombre, usuario);//set pisa lo que estaba
    });
    return mapaUsuarios;
}
const usuariosMapa = buscarTareaPorCliente(clientes);
const clienteBuscado = usuariosMapa.get("Lolo");

if (clienteBuscado) {
    console.log(`Tareas pendientes de ${clienteBuscado.nombre}:`);
    mostrarTareasPendientes(clienteBuscado.tareas);
}
/*function mostrarTareaPorCliente(nombre: string): TareaCliente[] {
    const encontrarTarea: TareaCliente[] = [];
    console.log(`Encontrando tareas de: ${nombre}`);
    clientes.map(cliente => {
        if (nombre === cliente.nombre) {
            encontrarTarea.push(...cliente.tareas);
        }
    })
    return encontrarTarea;
}

console.log(mostrarTareaPorCliente("Lolo"));*/