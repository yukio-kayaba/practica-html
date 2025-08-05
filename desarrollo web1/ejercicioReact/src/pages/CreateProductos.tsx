import React, { useState } from "react"
import Input from "../components/Input";
import { api } from "../config/axiosConnect";
import Swal from "sweetalert2";

export function CreateProducView(){
    const [nombre,setNombre] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const [marca,setMarca] = useState("");
    const [precio,setPrecio]=useState("");
    const [foto,setFoto] = useState("");
    const [color,setColor] = useState("");

    const enviarForm = async (e:React.FormEvent )=>{
        e.preventDefault();
        console.log(` ${nombre} - ${descripcion} - ${marca} -  ${precio} - ${foto}  -  ${color} `);
        const datos = {
            nombre,
            descripcion,
            marca,
            precio,
            color,
            foto
        }
        await api.post("/productos",[datos]).then((respuesta)=>{
            console.log(respuesta.data);
            Swal.fire("Se envio correctamente");
        }).catch((error)=>{
            console.log(`error : ${error} `);
        })
    }

    return(
        <div className="mb-3" >
            Crear producto
            <form onSubmit={enviarForm} >
                <Input nombre="nombre" tipo="text"  setDatos={setNombre} />
                <br />
                <Input nombre="descripcion" textArea={true} tipo="text" setDatos={setDescripcion} />
                <br />
                <Input nombre="marca" tipo="text" setDatos={setMarca} />
                <br />
                <Input nombre="precio" tipo="number" setDatos={setPrecio} />
                <br />
                <Input nombre="foto" tipo="text" setDatos={setFoto} />
                <br />
                <Input nombre="color" tipo="color" setDatos={setColor} />
                <input type="submit" value="Enviar"/>               
            </form>
        </div>
    )
}