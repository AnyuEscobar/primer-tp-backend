const editarTarea = (lista: any[], titulo: string, nuevoTitulo: string, nuevaDescripcion: string) => {
  const tarea = lista.find((t) => t.titulo.toLowerCase() === titulo.toLowerCase())

  if (!tarea) {
    console.log("No se encontró la tarea a editar.");
    return;
  }

  if (nuevoTitulo) tarea.titulo = nuevoTitulo;
  if (nuevaDescripcion) tarea.descripcion = nuevaDescripcion;

  console.log("✅ Tarea editada correctamente:");
  console.log(tarea);
}




export { editarTarea }