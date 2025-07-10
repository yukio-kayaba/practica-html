

/**
 * @typedef {{
 * id:number,
 * nombre:string,
 * precio:number
 * }} ProductoTipo
 */

class Productos{
    /**
     * @type {Array<ProductoTipo>}
     */
    #datos;
    #storageId;

    constructor(){

        this.#datos = [];
        this.#storageId = "DatosProducto";
    }

    
    AddProducto(nombreProducto,precioProducto){

        /**
         * @type {ProductoTipo}
         */
        const defProducto = {
            id:this.#datos.length(),
            nombre:nombreProducto,
            precio:precioProducto
        }

        this.#datos.push(defProducto);
        
    }

}
