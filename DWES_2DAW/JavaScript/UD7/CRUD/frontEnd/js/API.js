"use strict";
const url = "http://localhost:3000/api/users";

export const addUser = async (usario) => {
    const param={
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body:usario
    }
    try {
    const response =await fetch(`${url}`,param)
    if(!response.ok){
        throw new Error ("Error en la operacion de lectura del usuario");
    }
    const data =await response.json();
    return data.data
  } catch (error) {
    return error
    
  }

};

export const getUser = async (id) => {
  try {
    const response =await fetch(`${url}/${id}`)
    if(!response.ok){
        throw new Error ("Error en la operacion de lectura del usuario");
    }
    const data =await response.json();
    return data.data
  } catch (error) {
    return error
    
  }
};

/**
 * @function deleteCliente
 * @description Elimina un usuario por su ID
 * @param {number} id - ID del usuario a eliminar
 * @returns {Promise<Object>} Objeto con el resultado de la operación
 */
export const deleteUser = async (id) => {
 
};

export const updateUser = async (cliente) => {
  
};
