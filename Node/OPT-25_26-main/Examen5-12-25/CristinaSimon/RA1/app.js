import inquirer from "inquirer";


const solDatos = async () => {
  const combus = await inquirer.prompt([
    { 
        type: "input",
        name: "conbustible",
        message: "Ingrese el nivel de combustible (%) del cohete: ",
        validate: (dato)=>{

            // if(dato==""){
            //     return "ingrese  un % de combustible"
            // }else{
                const comb = Number(dato)
            // }
            
            if (comb<0 ||comb>100){
                return "El % de combustible es incorrecto"
            }else{
                return true
            }

        }
    }
    ]); 
    const pil = await inquirer.prompt([
    {
        type: "input",
        name: "piloto",
        message: "Introduce el nombre del comandante: ",
        validate: (dato)=>{
            if (dato.length<3 || dato.length>30){
                return "El nombre del comandante es incorrecto."
            }else{
                return true;
            }
        }

    }
])
   
return comb, dato
};

const comComb= async(combustible, piloto)=>{
    const comNec= Math.floor((Math.random()*20)+1)
    console.log("Verificacion de combustible");
    setTimeout(() => {
        if(comNec>combustible){
            console.log("Fallo: Combustible Insuficiente");
            console.log(`Noficacion de aborto enviada al ${piloto}`);
        }
    }, 1500);

}
const init= async()=>{
   try {
    await solDatos();
    await comComb(combustible, piloto);
    
   } catch (error) {
    
   }
}

init();
