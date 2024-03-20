# TP1 de Programacion Multimedial 4

## Metodologia

Integrantes por equipo: 1
Se aprueba con:         6

### Objetivos

- Refrescar lo que saben de JavaScript, y verificar que todos hallan llegado con un nivel minimo de manejo del lenguaje
- Que aprendan a modelar problemas basicos usando tipos de datos en TypeScript
- Que se aclaren las dudas de los requerimientos que puedan sonarles ambiguos

### Comentarios Adicionales

Estos ejercicios son "teoricos", por lo que estan un poco alejados de un problema "de la vida real". Para ese tipo de ejercicios vamos a tener el TP2.

Quiero darles la mayor libertad posible para que los resuelvan como quieran. Incluso pueden no usar lo que vimos en clase si saben otra forma. Lo unico que les pido es que:

- Esten hechos en TypeScript
- Todos los tipos de datos sean estaticos (o sea, que no haya ningun `any`)
- Me justifiquen en el oral por que les parecio mejor opcion que lo que vimos en clase

Cada ejercicio esta relacionado a esta misma aplicacion. Pero no hace falta que creen una aplicacion entera que cumpla con todos los puntos. En cambio, cada ejercicio se considera aislado a los demas, a menos que el enunciado diga lo opuesto. Es parecido a lo que hicimos en clase con `Persona`, `Usuario`, etc.

Todos los ejercicios van a ser ejecutables en consola nada mas. Usando, por ejemplo, `ts-node`. No vamos a agregar ningun HTML o estilo a nada de esto. De nuevo, como lo que hicimos en clase.

Pueden asumir cosas que no estan aclaradas explicitamente. De hecho, espero que lo hagan. Hice a proposito los enunciados un poco ambiguos. Si igualmente tienen dudas, pregunten.

----

## Entrega

### Codigo

Todo lo van a resolver en un repositorio de GitHub. Pueden forkear este mismo o crear uno nuevo.

La fecha limite es el Jueves 4 de Abril de 2024 a las 23:59 hs. Antes de ese horario me tienen que mandar el link del repo por mail a <me@diegofreijo.com>.

Tiene que haber una `tag` que sea `tp1` en el ultimo commit.

Si crearon branches por feature o por ejercicio, no los borren. Asi puedo ver como estuvieron trabajando. Pero para este TP no es necesario que se vuelvan locos con GitFlow. Igual les recomiendo que lo practiquen si pueden porque para los demas TPs va a ser necesario.

### Reporte

En principio no es necesario un reporte para este TP. Pero si asumieron cosas que creen que no son obvias de entrada, les pido que creen un `README.md` en el repositorio (parecido a este que estan leyendo) aclarando lo que haga falta. Aplica para decisiones que haya tomado, formas de ejecutar los ejercicios, etc.

### Defensa

Les voy a estar mandando horarios para que cada uno se conecte y tengamos la devolucion por Google Meet o Teams. Asi no usamos la hora de clase para eso y aburrimos a los que se quedan esperando afuera.

----

## Ejercicios

Vamos a desarrollar una aplicacion para gestionar tareas. Va a ser el futuro Trello. Pero por ahora vamos a hacer una version minima (un MVP) hasta conseguir el primer millon de dolares de nuestros inversores. Despues le agregaremos web 3, AI y metaverso 😄

### 1. Mostrar tareas (3 puntos)

Lo primero que queremos es que se muestren en consola todas las tareas que tiene pendientes el usuario. O sea, que aun no estan terminadas. Ordenarlas por prioridad (Alta, Media, Baja).

### 2. Consulta a la API (1 punto)

Los inversores se quejan que las tareas tardan mucho en cargarse. Necesitamos adaptar el codigo anterior para que la carga se muestre de forma asincrona.

Asumi que existe una funcion que devuelve el listado de tareas despues de 3 segundos. Podes usar el ejemplo que hicimos en clase.

### 3. Asignaciones (2 puntos)

Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. Asi que necesitamos que, dado una persona, se muestren solo sus tareas de igual manera que en el punto 1. OJO: apuntamos a tener millones de tareas en nuestra base de datos!

### 4. Validando personas (1 punto)

Los inversores rompieron la base de datos metiendo cualquier texto en el campo de nombre de persona. Necesitamos una funcion que valide si un texto es un nombre de persona valido o no. Por ahora solo aceptemos que se escriba el nombre o el nombre y apellido.

### 5. Fecha limite (1 punto)

La forma de ordenar tareas por prioridad no esta alcanzando para saber que hacer a continuacion. Ahora queremos que las tareas se muestren de nuevo como en el punto 1, donde las de Alta prioridad aparecen siempre primero. Pero las demas van a, ademas, tener una fecha limite (deadline) que marca que debe completarse antes de cierto dia. Ordenarlas por la fecha limite que tenga cargada esa tarea.

### 6. Descripcion (2 puntos)

Los usuarios de nuestra beta necesitan mas informacion para terminar cada tarea. Estan pidiendo poder agregar o un campo de informacion o que puedan adjuntar un archivo. Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.

Mostrar de vuelta las tareas como en el punto 1. Si una tarea tiene la descripcion en forma de campo de texto, mostrar esa descripcion. Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.
