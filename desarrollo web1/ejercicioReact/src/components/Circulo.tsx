

interface Props{
    color:string
}

export default function Circulo(props:Props){

    return (
        <div style={{background: props.color,borderRadius:"50px"}} >
            <p> CL </p>
        </div>
    )
}
