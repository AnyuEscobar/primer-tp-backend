import { main } from "./controllers/controllers";
import { encontrarTarea } from "./utils/encontrarTarea";
import { editarTarea } from "./utils/editarTarea";
import { agregarTarea } from "./utils/agregarTarea";
const argumentos = process.argv
const accion = argumentos[2]
let titulo = argumentos[3]

let lista = [
  {
    "id": 1,
    "titulo": "Comprar víveres",
    "descripcion": "Leche, huevos, pan y frutas",
    "completada": false
  },
  {
    "id": 2,
    "titulo": "Terminar informe del proyecto",
    "descripcion": "Completar la sección final y revisar el formato",
    "completada": false
  },
  {
    "id": 3,
    "titulo": "Llamar a mamá",
    "descripcion": "Preguntar cómo está y planear la visita del fin de semana",
    "completada": true
  },
  {
    "id": 4,
    "titulo": "Limpiar la cocina",
    "descripcion": "Lavar los platos y limpiar las mesadas",
    "completada": false
  },
  {
    "id": 5,
    "titulo": "Salir a caminar",
    "descripcion": "Dar una caminata de 30 minutos después de cenar",
    "completada": true
  }
]

switch (accion) {
  case "info":
    console.log("Cómandos válidos")
    console.log("lista <--- Muestra la lista de tareas")
    console.log("buscar <--- Busca una tarea")
    console.log("agregarTarea <--- Agregar tarea")
    console.log("editarTarea <--- Editar una tarea")
    console.log("borrarTarea <--- Borrar una tarea")
    break;
  case "lista":
    console.log(lista)
    break;
  case "buscar":
    if (!argumentos[3]) {
      console.log("Debes ingresar el nombre de la tarea que quieres buscar")
      break;
    }
    const tareaEncontrada = encontrarTarea(lista, argumentos)

    if (!tareaEncontrada) {
      console.log("No se encuentra la tarea solicitada")
    } else {
      console.log(tareaEncontrada)
    }
    break;
  case "editarTarea":
    const nuevoTitulo = argumentos[4];
    const nuevaDescripcion = argumentos[5];

    if (!titulo) {
      console.log("Debes ingresar el título de la tarea que querés editar.");
      break;
    }

    editarTarea(lista, titulo, nuevoTitulo, nuevaDescripcion);
    break;
  case "agregarTarea":
    console.log(agregarTarea)
    break;
  case "borrarTarea":

    if (!titulo) {
      console.log("Debes ingresar un titulo válido para borrar el registro")
      break
    }

    const indice = lista.findIndex((t) => t.titulo.toLowerCase() === titulo.toLowerCase())


    if (indice === -1) {
      console.log("La tarea no se encuentra en nuestra base de datos")
      break
    }

    const tareaBorrada = lista.splice(indice, 1)
    console.log(tareaBorrada[0])
    break;

}
