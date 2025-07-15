/**
 * 
 * @param {string} valor 
 */
function AddId(valor){
    return document.getElementById(valor);
}

/**
 * @typedef {{
 * id:number,
 * email:string,
 * first_name:string,
 * last_name:string,
 * avatar:string
 * }} ProductoTipo
 */

class DOMcontroller{
    /**
     * @type {Array<ProductoTipo>}
     */
    #datos;
    #storageId;
    /**
     * @type {HTMLElement}
     */
    #objeto
    /**
     * 
     * @param {string} variable -idObjetc
     * @example
     * let id = document.getElementById("id") //NodoPadre
     */
    constructor(variable,storageValor = "DatosProducto" ){
        this.#objeto = document.getElementById(variable); 
        this.#datos = [];
        this.#storageId = storageValor;
    }

    /**
     * 
     * @param {ProductoTipo} producto 
     */
    #productoPrincipal(producto){
        let caja = document.createElement("div");
        caja.innerHTML = `
            <img src="${producto.avatar}" alt="" heigth="150px" >            
            <p> <strong>Nombre: </strong> ${producto.first_name } </p>
            <p> <strong>Nombre: </strong> ${producto.last_name } </p>
            <p> <strong>Nombre: </strong> ${producto.email } </p>
        `; 
        return caja;
    }
    
    AddProducto(nombreProducto,precioProducto){

        /**
         * @type {ProductoTipo}
         */
        const defProducto = {
            id:this.#datos.length,
            nombre:nombreProducto,
            precio:precioProducto
        }

        this.#datos.push(defProducto);        
        let caja = this.#productoPrincipal(defProducto);
        this.#objeto.appendChild(caja);
        localStorage.setItem(this.#storageId,JSON.stringify(this.#datos));
    }
    
    
    dibujarProductos(){
        try {
            let valores = localStorage.getItem(this.#storageId);
            if(valores){
                valores = JSON.parse(valores);
                this.#datos = valores;
            }
        } catch (error) {
            console.log(" Error de agregado ");
        }
        this.#objeto.innerHTML = "";
        this.#datos.forEach((elemento)=>{
            let caja = this.#productoPrincipal(elemento) ;
            this.#objeto.appendChild(caja);
        });
    }
};

export default DOMcontroller