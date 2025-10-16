"use strict"
const gestionSensores=(function(){

    class Monitor{
        #sensors=[];
        constructor(sensors){
            if(Monitor.instance){
                return Monitor.instance
            }

            Monitor.instance=this;
        }
        addSensor(sensor){}
        delSensor(sensor){}
        update(data){}
    }

    class Sensor{
        #observadores=[];
        #id;
        constructor(id, obsevadores){
            this.#observadores=obsevadores;
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
        get observadores(){
            this.#observadores.forEach(element => {
                document.writeln+=(`${element} <br>`);
            });
        }
        set observadores(value){
            this.#observadores.push(`${value}`);
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
    class DigitalSensor extends Sensor{
        #tipo='Digital'
        constructor(tipo){
            super.observadores
            super.id
            this.#tipo=tipo
        }
        lectura(){
            const min=20, max=30;
            tempAle=Math.floor(Math.random() * (max - min + 1)) + min;//Crear una temperatura entre el min y el max
            observadores.forEach
            return `Monitor recibio datos: Sensor ${id}, Tipo: ${tipo}, Valor: ${tempAle}`
        }
    }
    class AnalogSensor extends Sensor{
        #tipo='Analogico'
        constructor(tipo){
            super.observadores
            super.id
            this.#tipo=tipo
        }
        lectura(){
            const min=20, max=30;
            tempAle=Math.floor(Math.random() * (max - min + 1)) + min;//Crear una temperatura entre el min y el max
            return `Monitor recibio datos: Sensor ${id}, Tipo: ${tipo}, Valor: ${tempAle}`
        }

    }
    class SensorFactory {
        static crearSensor(tipo,id){
            tipo=tipo.toUpperCase();
            if(tipo==='DIGITAL'||tipo==='ANALOGICO'){
                return Sensor.instance(tipo, id)
            }else{
                return `el tipo no es correcto, prueba con 'digital' o 'analogico'`
            }
            
        }
    }
})();