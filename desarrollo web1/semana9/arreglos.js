

class Practicas{
    #arreglo = ["shopping","pan","leche","queso"];
    #ingredientes = ["papa seca","chancho","cebolla","aji","sal"];

    /**
     * 
     * @param {Number} indice 
     * @returns 
     */
    indexArreglo(indice){
        return this.#arreglo[indice];
    }

    /**
     * 
     * @param {Number} indice 
     * @returns 
     */
    indexIngredientes(indice){
        return this.#ingredientes[indice];
    }

    getIngredientes(){
        return this.#ingredientes;
    }

    getArreglo(){
        return this.#arreglo;
    }

    ejercicio1(numero){
        numero = Number.parseInt(numero);

        for(let i = 0;i < 13;i++ ){
            let multiplicado = i * numero;
            if( multiplicado  % 2 === 0){
                console.log(`el multiplicado : ${multiplicado} es par`);
            }
        }
    }
    ejercicio2(numero){
        let resultado = 0;
        do {
            resultado += numero;
            numero --;
            if(numero == 0)break;
        } while (true);
        console.log(resultado);
    }

    ejercicio3(presupuesto){
        presupuesto = Number.parseInt(presupuesto);
        let catalogo = [50,20,10,100,30,10];
        let resultado = 0;
        let cantida = 0;
        catalogo.forEach(numero =>{
            resultado += numero;
            if( resultado >= presupuesto ){
                return;
            }
            cantida ++;
        });
        console.log(`total que puede comprar son  ${cantida}  :: ${resultado}`);
    }

}

const datos = new Practicas();

console.warn( datos.indexArreglo(2));

datos.getArreglo().forEach(element => console.log(element))


do{
    let opcion = prompt("Ingrese la opcion : ");
    switch (opcion) {
        case "1":
            let tabla = prompt("INgrese la tabla de multiplicar ")
            datos.ejercicio1(tabla);
            break;
        case "2":
            let numero = prompt("INgrese el numero ");
            datos.ejercicio2(numero)
        default:
            let presupuesto = prompt("presupuesto")
            datos.ejercicio3(presupuesto);
            break;
    }
}while(true);

