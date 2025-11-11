"use strict"
export const FormularioModule = (() => {
    let form, btnResatablecer, radios, check, condiciones, btnEnviar;
    const init = () => {
        document.addEventListener("DOMContentLoaded", () => {
            establecerObjetos();
            establecerEventos();
        })
    }
    const establecerObjetos = () => {
        form = document.querySelector("#registro");
        btnResatablecer = document.querySelector("#restablcer");
        radios = document.querySelectorAll(".radio");
        btnEnviar = document.querySelector("#enviar");
        check = document.querySelectorAll(".check");
        condiciones = querySelectorAll(".condi");
        visor=document.querySelectorAll(".visor");
        pass=document.querySelector("#pass");
        rpass=document.querySelector("#rpass");
    }
    const establecerEventos = () => {
        form.addEventListener("submit", validarFormulario)
        btnResatablecer.addEventListener("click", resetFormulario);
        document.querySelectorAll(".input").forEach(objeto => {
            objeto.addEventListener("input", comprobar)
        });
        radios.forEach(radio => {
            radio.addEventListener("change", (e) => {
                validarRadios(e);
                habilitarSubmit()
            });

        });
        check.forEach(check=>{
            const contador=0;
            check.addEventListener("change", ()=>{
                contador++;
            })
        });
        visor.addEventListener("mousedown", mostrar);
        visor.addEventListener("mousedown", ocultar);
    }
    const mostrar=()=>{
        pass.addEventListener("input", ()=>{
            pass.type='text';
        });
        rpass.addEventListener("input", ()=>{
            rpass.type='text';
        });
        
    }
    const ocultar=()=>{
        pass.addEventListener("input", ()=>{
            pass.type='password';
        });
        rpass.addEventListener("input", ()=>{
            rpass.type='password';
        });
    }
    const resetFormulario = () => {
        document.querySelectorAll(".input").forEach(objeto => {
            objeto.textContent="";
        });
        radios.forEach(radio=>{
            radio.checked=false;
        })
        check.forEach(check=>{
            check.checked=false;
            contador=0;
           
        })

    }
    const comprobar = (e) => {
        // console.log('comprobar Input');
        const objeto = e.target; //establecer el objeto que produce el evento
        //establecer el span donde se mostrará o limpiará el error
        const error = document.querySelector(`#error${objeto.id}`);

        //evaluar si hay error
        switch (true) {
            case objeto.validity.valid: //si cumple todas las condiciones
                error.textContent = "";
                break;
            case objeto.validity.valueMissing: //Está vacío
                error.textContent = "El campo es requerido";
                break;
            case objeto.validity.rangeUnderflow: //Si no cumple la condición min
                error.textContent = `Debe ser mayor o igual que ${objeto.min}`;
                break;
            case objeto.validity.rangeOverflow: //Si no cumple la condición max
                error.textContent = `Debe ser mayor o igual que ${objeto.max}`;
                break;
            default:
                error.textContent = "Valor no válido"
                break;
        }
        habilitarSubmit()
    }

    const validarRadios = (e) => {
        //verificar si dentro del grupo de radios hay alguno que está chequeado
        const seleccionado = [...radios].some(radio => radio.checked);
        const errorTipo = document.querySelector("#errortipo");
        errorTipo.textContent = seleccionado ? "" : "Seleccione una opción";
        return seleccionado;
    }
    const validarchecks = (e) => {
        //verificar si dentro del grupo de radios hay alguno que está chequeado
        const seleccionCheck = [...check].some(check => check.checked);
        const errortipocheck = document.querySelector("#errortipocheck");
        errortipocheck.textContent = seleccionCheck ? "" : "Seleccione una opción";
        return seleccionCheck;
    }
    const habilitarSubmit = () => {
        console.log(form.checkValidity());
        const valido = form.checkValidity() && validarRadios() && validarchecks;
        //habilita o deshabilita el botón
        btnEnviar.disabled = !valido
    }

    return {
        init
    }

})();

FormularioModule.init();
