import { useEffect, useState } from "react";
import { api } from "../config/axiosConnect";

interface Productos{
    id:number,
    nombre:string,
    descripcion:string,
    marca:string,
    precio:number,
    foto:string,
    color:string

}

const ListProductView  = ()=>{
    const [productos,setproductos] = useState<Productos[]>([]);
    useEffect(()=>{
        const obtenerProductos = async()=>{
            await api.get("/productos").then(datos=>{
                console.log(datos.data);
                setproductos(datos.data.data);
            }).catch((error)=>{
                console.log(error)
            })
        }

        obtenerProductos();
    },[])

    return (
        <div>
            productos
            <tbody>
                { productos.map((producto)=>(
                    <tr key={producto.id} >
                        <td> { producto.nombre } </td>
                        <td> {producto.descripcion} </td>
                        <td> {producto.color } </td>
                        <td> {producto.precio} </td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default ListProductView;