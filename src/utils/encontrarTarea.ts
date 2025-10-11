const encontrarTarea = (lista: any[], argumentos: string) => {
  const tareaEncontrada = lista.find((lista) =>
    lista.titulo.toLowerCase() === argumentos[3].toLowerCase())
  return tareaEncontrada
}

export { encontrarTarea }