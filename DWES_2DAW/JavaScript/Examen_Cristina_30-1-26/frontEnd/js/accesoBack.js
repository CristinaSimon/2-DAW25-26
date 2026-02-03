"use strict";

const urlPaciente = "http://localhost:3000/api/pacientes";

export const consulTarjeta = async (tarjeta) => {
  try {
    const response = await fetch(`${urlPaciente}/${tarjeta}`);
    if (!response.ok) {
      throw new Error(
        `Error del servidor: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data.apellidos_nombre;
    
  } catch (error) {
    return { error };
  }
};

const urlMedico = "http://localhost:3000/api/medicos";

export const consulMedico = async (especialidad) => {
  try {
    const response = await fetch(`${urlMedico}/${especialidad}`);
    if (!response.ok) {
      throw new Error(
        `Error del servidor: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
};

const urlEspecialidad = "http://localhost:3000/api/especialidades";

export const consulEspecialidades = async () => {
  try {
    const response = await fetch(`${urlEspecialidad}`);
    if (!response.ok) {
      throw new Error(
        `Error del servidor: ${response.status} ${response.statusText}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
};
