import crypto from "crypto";

const agregarTarea = (lista: any[], titulo: string, descripcion: string) => {
  if (!titulo || !descripcion) {
    console.log("Debes ingresar un título y una descripción para la nueva tarea.");
    return;
  }

  const nuevoId = crypto.randomUUID();

  const nuevaTarea = {
    id: nuevoId,
    titulo,
    descripcion,
    completada: false
  };

  lista.push(nuevaTarea);

  console.log("Tarea agregada correctamente:");
  console.log(nuevaTarea);
};

export { agregarTarea }
