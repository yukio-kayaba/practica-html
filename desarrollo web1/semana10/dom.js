
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
        caja.id = producto.id;
        caja.innerHTML = `
            <h2> ${producto.nombre} </h2>
            <p> ${producto.precio} </p>
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

const controlDOM = new Productos("MuestraTareas");
const botonAgregar = document.getElementById("btnAgregar");
controlDOM.dibujarProductos();
botonAgregar.addEventListener("click",()=>{
    let nombrePro = AddId("idProducto");
    let precioProd = AddId("idPrecio");
    controlDOM.AddProducto(nombrePro.value,precioProd.value);
    nombrePro.value="";
    precioProd.value = "";
});


