import { main } from "./controllers/controllers";
const argumentos = process.argv
const accion = argumentos[2]
const lista = "probando la lista..."
const agregarTarea = "probando el addtasks..."
const editarTarea = "probando el edit..."
const borrarTarea = "probando el delete..."

switch (accion) {
  case "info":
    console.log("Cómandos válidos")
    console.log("Lista de tareas <--- Muestra la lista de tareas")
    console.log("agregarTarea <--- Agregar tarea")
    console.log("editarTarea <--- Editar una tarea")
    console.log("borrarTarea <--- Borrar una tarea")
    break;
  case "listaDeTareas":
    console.log(lista)
    break;
  case "agregarTarea":
    console.log(agregarTarea)
    break;
  case "editarTarea":
    console.log(editarTarea)
    break;
  case "deleteTask":
    console.log(borrarTarea)
    break;

}
