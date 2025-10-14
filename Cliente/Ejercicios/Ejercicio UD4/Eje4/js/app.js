"use strict"
const gestionSensores=(function(){

    class Monitor{
        constructor(){}
    }
    class Sensor{
        #sensors=[];
        #id;
        constructor(id, obsevadores){
            this.#sensors=obsevadores;
            this.#id=id
        }
        /**Getter y Setter */
        get id(){
            return this.#id
        }
        set id(value){
            if(value===id){
                throw new Error (`Esa id ya esta en uso`)
            }
            this.#id=value;
        }
        get sensors(){
            this.#sensors.forEach(element => {
                document.writeln+=(`${element} <br>`);
            });
        }
        set sensors(value){
            this.#sensors.push(`${value}`);
        }
        /**Metodos */

        /**
         * 
         * @param {*} observer 
         */
        addObserver=(observer)=>{
            
        }
        /**
         * 
         * @param {*} observer 
         */
        removeObserver=(observer)=>{

        }
        /**
         * 
         * @param {*} data 
         */
        notificar=(data)=>{

        }


    }
})();