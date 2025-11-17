"use strict"
import { usuarios } from "../data/usuarios.js"

export const getUsuarios=(req,res)=>{
    res.status(200).json({
        data: usuarios,
        total: usuarios.length
    })
}
export const getUsuario=(req,res)=>{
    console.log(req.params);
    const {id}=req.params
    if(isNaN(id)){
        res.status(400).json({
            message: 'el id debe ser numerico'
        })
    }
    const indice =usuarios.findIndex(usuario=>usuario.id==id);
    if(indice==-1){
        res.status(400).json({
            message: `el id ${id} no encontrado`
        })
    }
    //si todo es correcto
    res.status(200).json({
        data: usuarios.at(indice)
    })
}
export const addUsuarios=(req,res)=>{

}
export const updateUsuarios=(req,res)=>{

}
export const patchUsuarios=(req,res)=>{

}
export const detUsuarios=(req,res)=>{

}