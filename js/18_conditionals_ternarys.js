//Conditionals - Ternary Conditionals
// Son IFS en una sola linea.

const autenticado = true

autenticado ? console.log('Usuario Autenticado') : console.log('Usuario no autenticado')

//otra forma de escribirlo.

!autenticado ? 
    console.log('Usuario Autenticado') :
    console.log('Usuario no autenticado')


// Doble Ternario:

const saldo = 1000
const pagar = 500
const tarjeta =  true

saldo > pagar ? console.log('Puedes pagar.') : console.log('No, no puedes pagar.')



saldo > pagar ?
    console.log('Puedes pagar.') : 
    tarjeta ?
        console.log('Puedes Pagar') :
        console.log('No, no puedes pagar.')
