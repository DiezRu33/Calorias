const primero = document.getElementById("txtu");
const segundo = document.getElementById("txtd");
const tercero = document.getElementById("txtt");
const cuarto = document.getElementById("txtc");

const body = document.querySelectorAll("body");

const boton = document.getElementById("button");
const boton_dos = document.getElementById("button_two")
const para = document.getElementById("para");

class Alimento{
    constructor(calorias, porciones, peso, nombre){
        this.calorias = calorias.value;
        this.porciones = porciones.value;
        this.peso = peso.value;
        this.nombre = nombre.value;
    }
}

function info(calorias, porciones, peso, nombre){
    this.calorias = calorias.value;
    this.porciones = porciones.value;
    this.peso = peso.value;
    if (Alimento == calorias, porciones, peso, nombre){
        console.log("El alimento que consumiste es de " + calorias + ". Las porciones fueron de: " + porciones + ". Y el peso es de: " + peso + ". El alimento es: " + nombre);
    }else{
        console.log("Algo salio mal");
    }
}
function sumar(calorias, porciones, peso){

    const numero = document.getElementById("numu");
    const numero_dos = document.getElementById("numd");
    const numero_tres = document.getElementById("numt");

    calorias = this.calorias;
    porciones = this.porciones;
    peso = this.peso;

    calorias = parseInt(numero);
    porciones = parseInt(numero_dos.value)
    peso = numero_tres.value;

    console.log("El resultado es: " + calorias.value + porciones + parseInt(peso))

button_two.addEventListener("click", () => 
    {    
    resultado = parseInt(cal) + parseInt(por) + parseInt(peso);
    alert("El resultado es: " + resultado);
        // para.innerHTML = "El resultado es: " + resultado;
    })
}


    sumar(15,5,5)







// console.log(Alimento(10, 5, 45))
//     function sumar(){

//     }
// function sumar(){
//     boton.addEventListener("click", () => 
//     {    
//         const para = document.getElementById("para");
//         var resultado = parseInt(primero.value) + parseInt(segundo.value);
//         console.log("El resultado es: " + resultado);
//         // para.innerHTML = "El resultado es: " + resultado;
//     })