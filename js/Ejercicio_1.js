"use strict"
/* Ejercicio 1 */
console.log("Hola mundo")
/* Ejercicio 2 */
let nombreAprendiz = "Juan"
console.log("Bienvenido, sr(a)  " + nombreAprendiz)
/* Ejercicio 3 */

let precioProducto = 20000;
let impuesto = 0.10;
let domicilio = 3000;

let precioInicial = precioProducto;
    console.log("El precio inicial es de:" + precioInicial);

    let subPrecio = precioProducto +  (precioProducto * impuesto);
    console.log("El sub precio tomando en cuenta el impuesto es de: " + subPrecio);

    let precioTotal = subPrecio +  domicilio;
    console.log("El precio total del servicio incluido el impuesto y el domicilio  es de:" + precioTotal)

 

