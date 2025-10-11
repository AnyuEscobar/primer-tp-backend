import fs from "node:fs"

const DB_PATH = "./src/utils/listaDeTareas.json"

const readDb = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))

const writeDb = (lista: any) => fs.writeFileSync(DB_PATH, JSON.stringify(lista))

export { readDb, writeDb }