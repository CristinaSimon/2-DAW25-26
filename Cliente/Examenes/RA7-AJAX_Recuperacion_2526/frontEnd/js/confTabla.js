"use strict";
const columns = [
  // COLUMNA DE SELECCIÓN
  {
    formatter: "rowSelection",
    titleFormatter: "rowSelection",
    hozAlign: "center",
    headerSort: false,
    width: 40,
  },

  //Columna Marca
  {
    title: "Marca", // Título que se muestra en el encabezado
    field: "marca", // Campo del objeto de datos (data.id)
  },

  // COLUMNA Modelo
  {
    title: "Modelo",
    field: "modelo",
  },
  //columna FechaInicio
  {
    title: "Fecha de Inicio",
    field: "fecha_inicio",
    shorter: "date",
  },
  //columna Fecha Fin
  {
    title: "Fecha de Fin",
    field: "fecha_fin",
  },
  //columna Total
  {
    title: "Total",
    field: "total",
  },
];

export const confTabulator = (cliente) => {
  const tabla = new Tabulator("#tablaReservas", {
    layout: "fitColumns",
    AjaxURL: `http://localhost:4000/api/reservas/cliente/${cliente}`,
    ajaxResponse: (url, params, response) => {
      return response.data;
    },
    placeholder: "No hay datos disponibles.",
    locale: "es-es",
  });
  return tabla;
};
