import "../styles/BtnOpc.css";

type Datos = "btn-save" | "btn-error" | "btn-info";
interface Props{
    texto:string,
    class?:Datos,
    mensaje:string
}

export default function BtnOpc(props:Props){
    return(
        <button className={`${props.class} botonZ`} >
            {props.texto}
            <span className="textoOculto" > {props.mensaje} </span>
        </button>
    )
}