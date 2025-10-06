
const argumentos = process.argv
const accion = argumentos[2]
const lista = "lista de tareas"

const main = () => {
  switch (accion) {
    case "info":
      console.log("Info")
      console.log("listaDeTareas")
      console.log("agregarTarea")
      console.log("editarTarea")
      console.log("borrarTarea")
      break;
    case "lista de tareas":
      console.log(lista)
  }
}

export { main }