"use strict"
//patron del modulo
const SensorModule=(()=>{
    class Sensor{ //clase Sensor(sujeto). Emisor de notificaciones guarda una lista de observadores y les notifica cuando hay nuevos datos
        #id;
        #observers;
        constructor(id){
            this.#id=id
            this.#observers=[]
        }
        get id(){
            return this.#id;
        }
        addObserver(observer){
            if(!this.#observers.includes(observer)){
                this.#observers.push(observer)
            }
        }
        delObserver(observer){
            this.#observers=this.#observers.filter(observador=> observador!=observer);
        }
        notificar(data){
            this.#observers.forEach(observador=>{
                observador.update(data);
            })
        }
    }
    class DigitalSensor extends Sensor{
        #tipo;
        constructor(id){
        super(id)
        this.#tipo='digital'
        }
        lectura(){
            //simular la temperatura
            const temp=(Math.random()*(30-20+1))+20;
            //llamar al metodo notificar de la clase base Sensor
            this.notificar({id: this.id, tipo: this.#tipo, value:temp.toFixed(2)})
        }
    }
        class AnalogicoSensor extends Sensor{
        #tipo;
        constructor(id){
        super(id)
        this.#tipo='analog'
        }
        lectura(){
            //simular la temperatura
            const temp=(Math.random()*(30-15+1))+15;
            //llamar al metodo notificar de la clase base Sensor
            this.notificar({id: this.id, tipo: this.#tipo, value:temp.toFixed(2)})
        }
    }
    //clae sensor factory
    class SensorFactory{
        static crearSensor(tipo,id){
            switch(tipo.toLocaleLowerCase()){
                case 'digital':
                    return new DigitalSensor(id)
                case 'analog':
                    return new AnalogicoSensor(id)
            }
        }
    }
    //clase Observador Monitor, receptor de las notificaciones
    class Monitor{
        #sensors;
        constructor(){
            if(Monitor.instance){
                return Monitor.instance
            }
            this.#sensors=[]
            Monitor.instance=this;
        }
        addSensors(sensor){
            this.#sensors.push(sensor);
            sensor.addObserver(this);
        }
        delSensor(sensor){
            this.#sensors=this.#sensors.filter(sen=>!sen !==sensor);
            sensor.removeObserver(this);
        }
        update(data){
            console.log(`Monitor recibio datos: Sensor ${data.id}, tipo: ${data.tipo}, temperatura ${data.value}`);
        }
    }

    return{
        Monitor, SensorFactory
    }
})();

//app principal
const monitor=new SensorModule.Monitor()//Crear el objeto monitor(observador)
//Crear sensores
const sensor1=SensorModule.SensorFactory.crearSensor('digital',1)
const sensor2=SensorModule.SensorFactory.crearSensor('analog',2)
const sensor3=SensorModule.SensorFactory.crearSensor('digital',3)

//subcribir los sensores al Monitor
monitor.addSensors(sensor1);
monitor.addSensors(sensor2);
monitor.addSensors(sensor3);

//Simular las lecturas de los lectores
setInterval(()=>{
    sensor1.lectura();
    sensor2.lectura();
    sensor3.lectura();

})