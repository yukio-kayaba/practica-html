import { useEffect } from "react";
import { api } from "../config/axiosConnect";


const ListProductView  = ()=>{

    useEffect(()=>{
        const obtenerProductos = async()=>{
            await api.get("/productos").then(datos=>{
                console.log(datos.data);
            }).catch((error)=>{
                console.log(error)
            })
        }

        obtenerProductos();
    },[])

    return (
        <div>
            productm os
        </div>
    );
}

export default ListProductView;