import Express from "express"
import {config} from "env"

const server = Express();
config();

const PORT= env.config.PORT|| 4000 ;

server.get ("/", (res,req)=>{
    res.send ('Todo va bien')
})

server.listen(PORT, ()=>{
console.log(`Escuchando el puerto ${PORT}`);
}) 
