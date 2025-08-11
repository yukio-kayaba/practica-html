import { useEffect, useState } from "react";
import { api } from "../config/axiosConnect";
import Circulo from "../components/Circulo";
import BtnOpc from "../components/BtnOpc";

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
                console.log(datos);
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
                        <th> Opciones </th>
                    </tr>
                </thead>
                <tbody>
                    { productos.map((producto)=>(
                        <tr key={producto.id} >
                            <td> { producto.nombre } </td>
                            <td> {producto.descripcion} </td>
                            <td> 
                                <Circulo color={producto.color} ></Circulo>
                            </td>
                            <td> {producto.precio} </td>
                            <td style={{display:"flex",flexDirection:"row",gap:"10px"}} > 
                                <BtnOpc class="btn-save" texto=" ✒️ " mensaje=" Add producto"  />
                                <BtnOpc class="btn-error" texto=" 🗑️ " mensaje=" Delete Producto "/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListProductView;