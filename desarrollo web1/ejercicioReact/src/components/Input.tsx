
type data="text" |  "number" | "color" ;

interface Props{
    nombre:string,
    tipo:data,
    textArea?:boolean,
    setDatos: (texto:string)=>void
}

export default function Input(props:Props){
    return (
        <div>
            <label htmlFor={props.nombre} > {props.nombre} </label>
            {
                !props.textArea ? 
                <input className="form-control" type={props.tipo} placeholder={`Ingrese : ${props.nombre}`} onChange={valor => props.setDatos(valor.target.value)}  />
                :
                <textarea  id={props.nombre} onChange={e=>props.setDatos(e.target.value)}></textarea>
            }
            
        </div>
        
    )
}