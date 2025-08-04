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
            <p>Lista productos</p>
            <table>
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Descripcion </th>
                        <th> Color </th>
                        <th> Precio </th>
                    </tr>
                </thead>
                <tbody>
                    { productos.map((producto)=>(
                        <tr key={producto.id} >
                            <td> { producto.nombre } </td>
                            <td> {producto.descripcion} </td>
                            <td> <p style={{background:producto.color}} > Cl </p> </td>
                            <td> {producto.precio} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListProductView;