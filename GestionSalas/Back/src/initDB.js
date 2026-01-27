import fs from "fs";
import sqlite3 from "sqlite3";
sqlite3.verbose();

const db = new sqlite3.Database("./local.db");

// Leer el archivo schema.sql
const schema = fs.readFileSync('src/bbdd/schema.sql', 'utf8');

// Ejecutar todas las sentencias SQL
db.exec(schema, (err) => {
    if (err) {
        console.error("❌ Error ejecutando schema.sql:", err);
    } else {
        console.log("✔️ Tablas creadas o ya existentes.");
    }
});
