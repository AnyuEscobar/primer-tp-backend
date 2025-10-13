import { readDb, writeDb } from "./db/connection";
import crypto from "node:crypto";
import { encontrarTarea } from "./utils/encontrarTarea";
import { editarTarea } from "./utils/editarTarea";
import { agregarTarea } from "./utils/agregarTarea";


const argumentos = process.argv;
const accion = argumentos[2];
const titulo: any = argumentos[3];

interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  completada: boolean;
}
let lista: Tarea[] = readDb() as Tarea[];


switch (accion) {
  case "info":
    console.log("---- Comandos válidos ----");
    console.table([
      { comando: "lista", descripcion: "Muestra la lista de tareas" },
      { comando: "buscar", descripcion: "Busca una tarea por título" },
      { comando: "agregarTarea", descripcion: "Agrega una nueva tarea" },
      { comando: "editarTarea", descripcion: "Edita una tarea existente" },
      { comando: "borrarTarea", descripcion: "Borra una tarea" }
    ]);
    break;

  case "lista":
    console.log(lista);
    break;

  case "buscar":
    if (!titulo) {
      console.log("Debes ingresar el título de la tarea que quieres buscar.");
      break;
    }

    const tareaEncontrada = encontrarTarea(lista, titulo);

    if (!tareaEncontrada) {
      console.log("No se encuentra la tarea solicitada.");
    } else {
      console.log(tareaEncontrada);
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
    const descripcion = argumentos[4]
    agregarTarea(lista, titulo, descripcion)
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
