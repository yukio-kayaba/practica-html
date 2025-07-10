
/**
 * @type {Array<{
 *  marca:string,
 *  modelo:string,
 *  year:number,
 *  precio:number,
 *  puertas:number,
 *  color:string,
 *  transmision:string
 * }>}
 */
const autos= [
  {"marca": "BMW", "modelo": "Serie 3", "year": 2012, "precio": 30000, "puertas": 4, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Audi", "modelo": "A4", "year": 2018, "precio": 40000, "puertas": 4, "color": "Negro", "transmision": "automatico"},
  {"marca": "Ford", "modelo": "Mustang", "year": 2015, "precio": 20000, "puertas": 2, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Audi", "modelo": "A6", "year": 2010, "precio": 35000, "puertas": 4, "color": "Negro", "transmision": "automatico"},
  {"marca": "BMW", "modelo": "Serie 5", "year": 2016, "precio": 70000, "puertas": 4, "color": "Rojo", "transmision": "automatico"},
  {"marca": "Mercedes Benz", "modelo": "Clase C", "year": 2015, "precio": 25000, "puertas": 4, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Chevrolet", "modelo": "Camaro", "year": 2018, "precio": 60000, "puertas": 2, "color": "Rojo", "transmision": "manual"},
  {"marca": "Ford", "modelo": "Mustang", "year": 2019, "precio": 80000, "puertas": 2, "color": "Rojo", "transmision": "manual"},
  {"marca": "Dodge", "modelo": "Challenger", "year": 2017, "precio": 40000, "puertas": 4, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Audi", "modelo": "A3", "year": 2017, "precio": 55000, "puertas": 2, "color": "Negro", "transmision": "manual"},
  {"marca": "Dodge", "modelo": "Challenger", "year": 2020, "precio": 25000, "puertas": 4, "color": "Rojo", "transmision": "manual"},
  {"marca": "Mercedes Benz", "modelo": "Clase C", "year": 2018, "precio": 45000, "puertas": 4, "color": "Azul", "transmision": "automatico"},
  {"marca": "BMW", "modelo": "Serie 5", "year": 2019, "precio": 90000, "puertas": 4, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Ford", "modelo": "Mustang", "year": 2017, "precio": 60000, "puertas": 2, "color": "Negro", "transmision": "manual"},
  {"marca": "Dodge", "modelo": "Challenger", "year": 2015, "precio": 35000, "puertas": 2, "color": "Azul", "transmision": "automatico"},
  {"marca": "BMW", "modelo": "Serie 5", "year": 2017, "precio": 80000, "puertas": 4, "color": "Negro", "transmision": "automatico"},
  {"marca": "Mercedes Benz", "modelo": "Clase C", "year": 2012, "precio": 40000, "puertas": 4, "color": "Blanco", "transmision": "automatico"},
  {"marca": "Audi", "modelo": "A4", "year": 2016, "precio": 30000, "puertas": 4, "color": "Azul", "transmision": "automatico"}
];



const getCoche2012= ()=>{
    const autos2012 = autos.filter(auto => auto.year > 2012);
    console.log(autos2012);
}

const getCocheReporte = () =>{
    const autos1518 = autos.filter(auto => (auto.year >= 2015 && auto.year <= 2018)); 
    console.log(autos1518);
}

const getmodeloC = ()=>{
    const autoC = autos.filter( auto =>  auto.marca === "Clase C")
    console.log(autoC); 
}


const ejercicio4 = ()=>{
    const marcaAudi2012 = autos.filter( auto => ( auto.marca === "Audi" && auto.year > 2012 ) );
    console.log(marcaAudi2012);
}


const ejercicio5 = ()=>{
    let promedio = 0;
    autos.forEach(auto=>{
        promedio = auto.precio;
    });

    console.log( `promedio es : ${ promedio / autos.length}` )
}

const ejercicio6 = ()=>{
    let promedio = 0;
    autos.forEach(auto=>{
        if( auto.transmision === "manual") promedio += auto.precio;
    });
    console.log( `promedio es : ${ promedio / autos.length}` );
}


const ejercicio7 = ()=>{
    const autos4500 = autos.filter(auto => (auto.precio > 4500) );
}


getCoche2012();
getCocheReporte()
getmodeloC();
ejercicio4()
ejercicio5()
ejercicio6()
ejercicio7();