import { commands } from "../utils/commands"
import mongoose, { Schema } from "mongoose"

const URI_DB = "mongodb://localhost:27017/primer_tp_backend"

const connectDB = async (URI: string) => {
  try {
    await mongoose.connect(URI)
    console.log("✅ Conectado a mongo DB")
  } catch (error) {
    const e = error as Error
    console.log("❌ Error al conectarse a la base de datos:", e.name)
    process.exit(1)
  }
}

const argumentos = process.argv
const accion = argumentos[2]
const lista = "lista de tareas"
const titulo = argumentos[3]

interface ITarea {
  titulo: string,
  descripcion: string
}

const TareaSchema = new Schema<ITarea>({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true }
}, {
  versionKey: false

})

const Tarea = mongoose.model<ITarea>("Tarea", TareaSchema)

const main = async (argumentos: string[], accion: string, usuarios: any[]) => {
  await connectDB(URI_DB)

  switch (accion) {
    case "info":
      console.log("--- Comándos válidos---")
      console.table(commands)
      break;
    case "lista":
      const tareas = await Tarea.find()
      console.log(tareas)
      break;
    case "buscar":
      if (!argumentos[3]) {
        console.log("Debes ingresar el título de la tarea que quieres buscar.");
        break;
      }

      const tareaEncontrada = await Tarea.findOne({ titulo });

      if (!tareaEncontrada) {
        console.log("No se encuentra la tarea solicitada.");
      } else {
        console.log(tareaEncontrada);
      }
      break;

    case "editarTarea":
      const nuevoTitulo = argumentos[4];
      const nuevaDescripcion = argumentos[5];

      if (!argumentos[3]) {
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

      if (!argumentos[3]) {
        console.log("Debes ingresar un titulo válido para borrar el registro")
        break
      }

      const indice = lista.findIndex((t) => t.titulo.toLowerCase() === titulo.toLowerCase())


      if (indice === -1) {
        console.log("La tarea no se encuentra en nuestra base de datos")
        break
      }

      const tareaBorrada = await Tarea.findOneAndDelete({ titulo })
      console.log(tareaBorrada)
      break;

  }
}

export { main }
//export const Tarea = mongoose.model<ITarea>("Tarea", TareaSchema);