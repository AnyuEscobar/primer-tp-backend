import { readDb, writeDb } from "./db/connection";
import crypto from "node:crypto";
import { main } from "./controllers/controllers";

const argumentos = process.argv;
const accion = argumentos[2];
const titulo: string = argumentos[3];

main(argumentos, accion, titulo)
