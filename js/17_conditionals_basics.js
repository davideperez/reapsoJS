// Conditionals - if

 /*
// 1 Operadores
// 
>   mayor que
<   menor que 
>=  mayor o igual
<=  menor o igual
==  Comparacion no estricta.
=== Compracion estricta, con tipado incluido. Compara valor y tipo de dato.
||  Al menos una debe cumplirse
&&  Todas deben cumplirse.
!   Negacion de cualquier operador anterior.
 */

const disponible = 4000
const retirar = 200

 if (disponible > retirar) {
    console.log('si puede retirar')// Se cumple la condicion y se ejecuta el codigo.
 } else {
    console.log('Lo siento. No puede retirar.')// no se cumple la condicion: Ejecutar este codigo.
 }


// 2 Comparadores estrictos y no estrictos

const numero1 = 20
const numero2 = '20'

if (numero1 === numero2) {
    console.log('Si, si son iguales.')
} else {
    console.log('No, no son iguales.')
}

//alternativa para evitar el problema:

if (Number(numero1) === Number(numero2)) {
    console.log('Si, si son iguales.')
} else {
    console.log('No, no son iguales.')
}


// 3 Comparacion con Booleanos
// No hace falta poner el triple o doble igual:

const autenticado = true

//esto...
if (autenticado === true) {
    console.log('Usuario autenticado.')
}

// ...es lo mismo que esto:
if (autenticado) {
    console.log('Usuario autenticado.')
}