

console.log("hola mundo");

class prueba1 {
    /**
     * 
     * @param {Number} a -primer Numero
     * @param {Number} b -Segundo NUmero
     * @returns 
     */
    decremento(a,b){
        return a-b;
    }

    saludo = ()=>{
        return "hola mundo";
    }

    /**
     * 
     * @param {Number} edad 
     * @returns 
     */
    validarEdad(edad){
        if(edad >= 18 && edad <= 27) return "esta entre 18 y 27";
        if(edad>= 18)return "es mayor";
        return "es menor";
    }

    /**
     * 
     * @param {Number} base 
     * @param {Number} altura 
     * @returns
     */
    areaTriangulo(base,altura){
        let base1 = Number.parseInt (base);
        let altura1 = Number.parseInt(altura);
        let resultado = (base1 * altura1)/2;
        return resultado;
    }

}

/*
let base = prompt("Ingrese la base del triangulo : ");
let altura = prompt("Ingrese la altura del triangulo: ");


console.warn(`resultado : ${ elementos.areaTriangulo(base,altura) }`);
*/
class Opciones{
    ejercicio1(){
        let  nombre = prompt("Ingrese su nombre : ");
        let apellido = prompt("Ingrese su apellido : ");
        let edad = Number( prompt("Ingrese su edad "));
        alert(`Hola ${nombre} Bienvenido y gracias por registrarte : ${apellido}  edad : ${edad} `);
    }
    
    ejercicio2(numero){
        if(numero >= 0 )return true;
        return false;
    }
    ejercicio3(){
        let precio = prompt("Ingrese el monto a pagar : ");
        let inpuesto = Number(precio) * 0.18;

        alert(`Total a pagar : ${ Number(precio) + inpuesto }`);

    }

    ejercicio4(monto){
        let numero = Number.parseInt(monto);
        alert(`cada amigo pagara ${ numero / 3}`);
        console.log(numero);
    }

    /**
     * 
     * @param {String} texto1 
     * @param {String} texto2 
     * @returns 
     */
    ejercico5(texto1,texto2){
        if(texto1.length >= texto2.length ){
            return `${texto2} - ${texto1} - ${texto2} `;
        }
        return `${texto1 }  - ${texto2 } - ${texto1} `;
    }
}


do{

    let opciones1 = prompt("Ingrese el ejercicio que desea realizar");
    break;
    const datos = new Opciones();

    switch (opciones1) {
    case "1":
        datos.ejercicio1();
        break;
    case "2":
        let numero = prompt("Ingrese un numero ");
        if(datos.ejercicio2()){
            console.log(`El numero ${numero} es positivo`);
            break;
        }
        alert(`El numero ${numero } es negativo `);
        break
    case "3":
        datos.ejercicio3();
        break;
    case "4":
        let montoPagar = prompt("INgrese el monto a pagar ");
        datos.ejercicio4(montoPagar);
        break;
    case "5":
        let texto1 = prompt("Ingrese el primer texto : ");
        let texto2 = prompt("INgrese el segundo texto : ");
        alert(datos.ejercico5(texto1,texto2));
        break;
    case "6":
        
        let base1 = prompt("Ingrese la base del triangulo 1");
        let altura1 = prompt("Ingrese la altura del triangulo 1");

        let base2 = prompt("Ingrese la base del triangulo 2");
        let altura2 = prompt("Ingrese la altura del triangulo 2");
        let elemento = new prueba1 ()
        let resultado1 = elemento.areaTriangulo(base1,altura1) ;
        let resultado2 = elemento .areaTriangulo(base2, altura2 );

        if(resultado1 > resultado2 ){
            alert(`El triangulo 1 es mayo con base ${base1} y altura ${altura1}`)
            break;
        }
        alert(`El triangulo 2 es mayo con base ${base2} y altura ${altura2}`)

    default:
        break;
    }
}while(true);