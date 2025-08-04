
/**
 * 
 * @typedef {[
 *   totalPaginas:number,
 *   mensaje:string,
 *   setPagina:Function
 * ]}Props
 */

/**
 * 
 * @param {Props} props 
 * @returns 
 */
const Select = (props)=>{
    const [pagina,setPagina,totalPaginas] = props;
    const options = (num)=>{
        let opts = [];
        for (let i=1; i<=num; i++){
            opts.push(<option value={i} key={i}>Pagina {i}</option>)
        }
        console.log("OPTS: ", opts);
        console.log( props.mensaje);
        return opts;
    }

    return (
        <>
            <h2> Pagina :  </h2>
            <select
                value={pagina}
                onChange={(evento)=>{
                console.log(evento.target.value);
                setPagina(evento.target.value)
                }}
                >
                {options(totalPaginas)}
            </select>
        </>
    );
}

export default Select;