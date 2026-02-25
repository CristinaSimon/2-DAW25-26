import mongoose from "mongoose";
import { URI } from "../config.js"

let conexion =null;

export const conexionBD =async ()=>{
    try{
        if (conexion && mongoose.connection.readyState===1){
            console.log("Ya existe una conexion activa a MongoDB");
            return conexion
        }
        conexion = await mongoose.connect(URI, {
            dbName:"hotel",
            serverSelectionTimeoutMS: 30000
        });
        console.log("Conecion exitosa a MongoDB con Mongoose");
        return conexion.connection;

    }catch{
        console.error(`Error al conextarse a MongoDB: ${error.message}`);
        if( mongoose.connection){
            await mongoose.connection.close();
        }
        throw new Error ("No se pudo conectar a la base de datos");
    }
}