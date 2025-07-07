
const persona = {
    nombre:"maicol",
    color:"colorado",
    edad:4,
    Amigable:false,

    ladrar(){
        return "au au ua";
    },
    comer(){
        return "ñam ñam ñam";
    }
}

class Clubes{
    #nombre;#pais;
    /**
     * @param 
     */
    constructor(){

    }
}


/**
 * @param {object<string,string,string,string,object<string,string>,array> >}
 */
let albumMusical = {
    agrupacion:"grupo5",
    nombreAlbum:"El ritmo de mi corazon",
    fecha:"30/06/2012",
    genero:["cumbia","Salsa"],
    canciones:[
        {
            titulo:"El ritmo de mi corazon ",
            duracion:3.43,
            autores:["Cristian yeipen","Eva Ayllon","Dantes Cardenas"]
        },
        {
            titulo:"Motoro y motivo",
            duracion:4.50,
            autores:["Elmer yeipen","Gian marco zinago","Gloria Stefani"]
        },
        {
            titulo:"Amor Vuelve",
            duracion:2.43,
            autores:["Mario Hard","Chayam","Dantes Cardenas"]
        },
    ],
    produccion:{
        arreglos:["elmer yaipen","Andy Yaipen " ],
        direccionGeneral:"Elmer yaipen"
    },

};

/**
 * @param {Array<object<string,number>>} productos
 */
let productos = [
    {
        nombre:"chocolate",
        precio:30
    },
    {
        nombre:"Arros de 5kg",
        precio:18
    },
    {
        nombre:"Pasta dental",
        precio:12
    },
    {
        nombre:"Frutos secos",
        precio:16
    },
    {
        nombre:"Crema de Habas ",
        precio:25
    },
    {
        nombre:"Azucar 5kg",
        precio:21
    },
    {
        nombre:"Caja de galletas",
        precio:17
    },
]

/**
 * @param {Array< Object<string,Array<number>> >} alumnos
 */
let alumnos = [
    {
        nombre:"joel",
        notas:[18,16,17]
    },
    {
        nombre:"Aleja",
        notas:[13,12,9]
    },
    {
        nombre:"Juan",
        notas:[13,12,9]
    },
    {
        nombre:"Maicol",
        notas:[11,12,10]
    },
    {
        nombre:"DIna",
        notas:[8,5,4]
    },
    {
        nombre:"Poldy",
        notas:[16,15,20]
    },

]
/**
 * @param {Object<string,notas>} element
 */
alumnos.forEach(element => {
    let promedio = 0;
    /**
     * @param {number} element
     */
    element.notas.forEach(element2 => {
        promedio += element2;
    });

    //console.log(`${element.nombre} :  ${ promedio/element.notas.length}`);    
});



