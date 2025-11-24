"use strict"
import { tareas } from "../data/tareas.js"

export const obtenerTareas =(req, res)=>{
    return res.status(200).json({
        data: tareas
    });
}
export const obtenerTareasPorId=(req,res)=>{
    const { id }=req.params;
    if(isNaN (id)){
        return res.status(400).json({
            message: `El id debe ser numerico`
        })
    }
    const indice=tareas.findIndex((tarea)=>tarea.id ==id);
    if(indice== -1){
        return res.status(404).json({
            message: `el id ${id} no encontrado`
        })
    }

    return res.status(200).json({
        data: tareas.at(indice)
    })
}
export const crearTarea=(req,res)=>{
    const { id, titulo, descripcion, completada} = req.body
    if (id.lenght==0 ||titulo.lenght==0){
        return res.status(400).json({
            message: 'Los camppos no pueden estar vacios'
        })
    }
    if(isNaN (id)){
        return res.status(400).json({
            message: `El id debe ser numerico`
        })
    }else{
        tareas.push(req.body)
        return res.status(201).json({
            message: 'Tarea creada con exito'
        })
    }

}
export const actualizarTarea=(req,res)=>{
        const { id, titulo, descripcion, completada} = req.body
    if (id.lenght==0 ||titulo.lenght==0){
        return res.status(400).json({
            message: 'Los camppos no pueden estar vacios'
        })
    }
    if(isNaN (id)){
        return res.status(400).json({
            message: `El id debe ser numerico`
        })
    }
    const idExist=tareas.findIndex((tarea)=>tarea.id==id)
    if (idExist){
        tareas[idExist]={
            id, titulo, descripcion, completada
        }
        return res.status(200).json({
            message: `Actualizacion de la tarea con id ${id} actualizada`
        })
    }else{
        return res.status(404).json({
            message: `la Tarea con el id ${id} no existe`
        })
    }
}
export const completarTarea=(req,res)=>{
    const { id } = req.body
    if (id.lenght==0 ){
        return res.status(400).json({
            message: 'Los campos no pueden estar vacios'
        })
    }
    if(isNaN (id)){
        return res.status(400).json({
            message: `El id debe ser numerico`
        })
    }
    const idExist=tareas.findIndex((tarea)=>tarea.id==id)
    if (idExist){
        tareas[idExist].completada=true;
        return res.status(200).json({
            message: `Actualizacion de la tarea con id ${id} actualizada`,
            data: tareas[idExist]
        })
    }else{
        return res.status(404).json({
            message: `la Tarea con el id ${id} no existe`
        })
    }

}
export const eliminarTarea=(req,res)=>{
    const { id } = req.body
    if (id.lenght==0 ){
        return res.status(400).json({
            message: 'El id no puede estar vacio'
        })
    }
    if(isNaN (id)){
        return res.status(400).json({
            message: `El id debe ser numerico`
        })
    }
    const idExist=tareas.findIndex((tarea)=>tarea.id==id)
    if (idExist){
        tareas.splice(idExist, 1)        
        return res.status(200).json({
            message: `Borrado de la tarea con id ${id} realizado con exito`,
        })
    }else{
        return res.status(404).json({
            message: `la Tarea con el id ${id} no existe`
        })
    }

}