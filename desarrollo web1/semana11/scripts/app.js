
const servicio = new Services();
const DOM = new DOMcontroller("root");

const main = async () =>{
    await servicio.obtenerUsuario().then((datos)=>{
        console.log(datos);
    }).catch((error)=>{
        console.log(error);
    }) ;
}

main();

