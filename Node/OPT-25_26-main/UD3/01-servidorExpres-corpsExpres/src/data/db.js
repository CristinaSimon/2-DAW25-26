//conexion a la bbdd
import mysql from 'mysql2/promise';

export const pool=mysql.createPool({
host: 'localhost',
user: 'root',
password:'',
database: 'ciclostrassierra',
waitForConnections: true, // espera conexiones si todas estan ocupadas
connectionLimit: 10, // numero max de conexiones simultaneas en el pool
queueLimit: 0, // no tiene limite para la cola de solicitudes
connectTimeout: 10000 //limite de 10s de espera

});

const testConnection=async()=>{
    try {
        connection= await pool.getConnection();//estableciendo conexion con la bbdd
    console.log('Conexion  con  MYSQL establecida correctamente');
    //liberar la conexion para que pueda ser utilizada por otra peticion
    connection.release();
    } catch (error) {
        console.log(`Error con la conecion MYSQL ${error.message}`);
    }
    
}

testConnection();