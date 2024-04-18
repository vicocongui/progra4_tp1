/*Los usuarios de nuestra beta necesitan más información para terminar cada tarea. 
Están pidiendo poder agregar o un campo de información o que puedan adjuntar un archivo. 
Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.

Mostrar de vuelta las tareas como en el punto 1. 
Si una tarea tiene la descripción en forma de campo de texto, mostrar esa descripción. 
Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.*/
export interface Tarea {
    nombre: string,
    prioridad: 1 | 2 | 3,
    status: boolean,
    descripcion: descripcionTarea // va a ser una imagen o un texto, pero la imagen la puedo hacer con regrex, tonces uso uniontype
}

type descripcionTarea = string | { tipo: "archivo", ruta: string };

//prioridad alta=1, baja=3
const tareasDePersona: Tarea[] = [
    { nombre: "limpiar", prioridad: 2, status: true, descripcion: "vico.jpg" },
    { nombre: "hacer progra", prioridad: 1, status: true, descripcion: "hay que hacer progra para aprender a hackear el campus" },
    { nombre: "leer", prioridad: 2, status: false, descripcion: "blbla" },
    { nombre: "cocinar", prioridad: 3, status: true, descripcion: "pepe.png" },
    { nombre: "coser", prioridad: 3, status: false, descripcion: "blbla" }
];

function mostrarTareasPendientes(user: Tarea[]) {
    const tareasPendientes: Tarea[] = [];
    for (let i = 0; i < user.length; i++) {
        const tareas = user[i];
        if (tareas.status) {
            tareasPendientes.push(tareas);
        }
    }
    tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        let descripcion: string;
        if (typeof tarea.descripcion === "string") {
            descripcion = tarea.descripcion;
        } else {
            descripcion = `Archivo adjunto: ${tarea.descripcion.ruta}`;
        }

        console.log(`Tarea: ${tarea.nombre}, Prioridad: ${tarea.prioridad}, PDescripción: ${descripcion}`);
    }
}
mostrarTareasPendientes(tareasDePersona);