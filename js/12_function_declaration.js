//Functions - Functions Declarations

// 1

//declaracion
function sumar() {
    console.log(2+2)
}

//llamado
sumar()

//2 
//llamado y declaracion al revez, es posible gracias al hoisting.
sumar()

function sumar() {
    console.log(2+2)
}

//3 
//Se pueden llamar muchas veces:

sumar()
sumar()
sumar()
sumar()

//4 - Sumar con parametros y argumentos

function sumar(numero, numero2) {
    console.log(numero + numero2)
}

sumar(10, 20)
sumar(5, 1400)
sumar(522, 3)
sumar(7) // esto dara NaN 

//5 - Parametros por default: 
function sumar2(numero = 0, numero2 = 0) {
    console.log(numero + numero2)
}
sumar2(10, 20)
sumar2(5, 1400)
sumar2(522, 3)
sumar2(7)

//6- Funciones que retornan Valores:

function sumarV3(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}

const resultado = sumarV3(10, 20)

console.log(resultado)

//7- Resultado con array y destructuring - de este modo funcionan los hooks de react. 

function sumarV4(numero1 = 0, numero2 = 0) {
    return [numero1 + numero2, 'Hola Mundo']
}

const [resultado2, texto] = sumarV4(30,20)

console.log(resultado2)
console.log(texto)

//8- Resultado con objeto y destructuring - de este modo funcionan los hooks de react. 

function sumarV5(numero1 = 0, numero2 = 0) {
    return {
        resultado: numero1 + numero2, 
        mensaje: 'Hola Mundo version destructuring de objeto.'
    }
}

const {resultado: resultado3, mensaje} = sumarV5(70,120)

console.log(resultado3)
console.log(mensaje)