

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
        let result = "";
        for(let i = 0;i < 13;i++ ){
            let multiplicado = i * numero;
            if( multiplicado  % 2 === 0){
                result += ` ${i} * ${numero} = ${multiplicado} :: par  <br>`;
            }
        }
        return result;
    }
    /**
     * @param {Number} numero 
     */
    ejercicio2(numero){
        let resultado = 0;
        let resul = " "+numero+" + ";
        do {
            resultado += numero;
            numero --;
            if(numero == 0){
                resul += `${numero} :: `;
                break;
            };
            resul += `${numero} +  `;
        } while (true);
        resul += ` ${resultado} `;
        return resul;
    }

    ejercicio3(presupuesto){
        presupuesto = Number.parseInt(presupuesto); 
        let selecionador = [];
        let catalogo = [{nombre:"mouse",presio:50 },{nombre:"pendrive",presio:20 } ,{nombre:"panel",presio:10 },{nombre:"mouse 2",presio:100 },{nombre:"mouse 3",presio:30 },{nombre:"mouse 4",presio:10 }];
        let resultado = 0;
        let cambio = 0;
        let result = "Productos : <br>";

        catalogo.forEach(productos =>{
            result += ` ${ productos.nombre} : ${productos.presio} <br>`;
            if((resultado + productos.presio) > presupuesto){
                return;
            }
            resultado += productos.presio;
            selecionador.push(productos); 
        });

        result += "  Solo puede comprar : <br>";
        selecionador.forEach(element => {
            result += `${ element.nombre } y `;
        });
        cambio = presupuesto - resultado; 
        result += `total que puede comprar son  ${selecionador.length }  :: ${resultado} <br> su cambio : ${cambio}`;
        return result;
    }

}

const datos = new Practicas();

console.warn( datos.indexArreglo(2));

datos.getArreglo().forEach(element => console.log(element))


function inicializadorDeTarea(){
    const btnOpcion1 = document.getElementById("btnOpcion1");
    const btnOpcion2 = document.getElementById("btnOpcion2");
    const btnOpcion3 = document.getElementById("btnOpcion3");

    btnOpcion1.addEventListener("click",()=>{
        let tabla = prompt("INgrese la tabla de multiplicar ")
        let resultado = datos.ejercicio1(tabla);
        document.getElementById("resultadoOpcion1").innerHTML = resultado;
    });

    btnOpcion2.addEventListener("click",()=>{
        let numero = prompt("INgrese el numero ");
        let resultado =  datos.ejercicio2( Number.parseInt(numero));
        document.getElementById("resultadoOpcion2").innerHTML = resultado;
    });

    btnOpcion3.addEventListener("click",()=>{
        let presupuesto = prompt("Ingrese el presupuesto : ")
        let respuesta = datos.ejercicio3(presupuesto);
        document.getElementById("resultadoOpcion3").innerHTML = respuesta;
    })

}

inicializadorDeTarea();

