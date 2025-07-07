
let productos = [
    {
        nombre:"iphone 15",
        precio:4500
    },
    {
        nombre:"televisor",
        precio:2300
    },
    {
        nombre:"Laptop Mac",
        precio:5600
    },
    {
        nombre:"Antena wifi Portatil",
        precio:1500
    },
    {
        nombre:"Samsung A56",
        precio:3850
    },
    {
        nombre:"Laptop Lenovo",
        precio:4550
    },
    {
        nombre:"Disco SDD",
        precio:2800
    },
    {
        nombre:"Mouse Inalambrico",
        precio:50
    },
    {
        nombre:"Placa Madre",
        precio:1800
    },
    {
        nombre:"Procesador Intel",
        precio:1800
    },
    {
        nombre:"Placa Madre Lenovo",
        precio:1800
    },
];

/**
 * @param { object<string,number> } dato
 */
let precioProducto = productos.map((dato)=> dato.precio = dato.precio * 1.20 );

let filtrador = productos.filter((dato)=> dato.precio > 4000);


/**
 * @param {number} suma
 * @param { object<string,number> } datos
 */
let reductor = productos.reduce((suma,datos)=> suma + datos.precio,0);

console.log(reductor);


