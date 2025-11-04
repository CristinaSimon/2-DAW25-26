"use strict"
import inquirer from 'inquirer';
let carrito= []
const agregarProducto = async () => {
    const producto = await inquirer.prompt([
        {
            type: 'inputs',
            name: 'nombre',
            message: '¿Cual es el nombre del producto? (fin)',
            validate(value) {
             
                if (value == "") {
                    return `Introduce un producto. Campo vacio`
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'precio',
            message: 'Cual es el precio del producto?',
            validate(value) {
                if (value < 1) {
                    return 'Precio invalido'
                }
                return true
            },
            when(pregunta) {
                return pregunta.nombre !== "fin";
            }
        },
        {
            type: 'input',
            name: 'cantidad',
            message: 'Cual es la cantidad del producto?',
            validate(value) {
                if (value < 1) {
                    return 'Cantidad invalido'
                }
                return true
            },
            when(pregunta) {
                return pregunta.nombre !== "fin";
            }
        },
        {
            type: 'list',
            name: 'categoria',
            message: '¿Cual es la categoria?',
            choices: [
                { name: 'Alimentos', value: 'alimentos' },
                { name: 'Electrónica', value: 'electronica' },
                { name: 'Ropa', value: 'ropa' },
                { name: 'Hogar', value: 'hogar' },
                { name: 'Otros', value: 'otros' },
            ],
            when(pregunta) {
                return pregunta.nombre !== "fin";
            }
        },
        {
            type: 'rawlist',
            name: 'iva',
            message: '¿cual es el IVA?',
            choices: [
                { name: 'General', value: '21%' },
                { name: 'Reducido', value: '10%' },
                { name: 'Superreducido', value: '4%' },
            ],
            when(pregunta) {
                return pregunta.nombre !== "fin";
            }

        }


    ]);
    return producto;
}
const main = async () => {
    console.log(`______Menu_____`);
    let product =  await agregarProducto()
    console.log(product);
    while (product.nombre !== 'fin') {

        carrito.push(product);
       product =  await agregarProducto()
    }

}
main();