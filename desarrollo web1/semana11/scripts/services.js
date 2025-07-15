class Services{
    obtenerUsuario = async ()=>{
        const respuesta = await fetch("https://reqres.in/api/users",{
            "Content-Type":"application/json",
            "x-api-key":'regres-free-v1'
        });
        const datos = await respuesta.json();
        return datos;
    };
}

export default Services;
