// DOM EVENTS - Clicks

const heading = document.querySelector('.heading')

////////////////////////////////////////
// 3 sintaxis y una 4ta peligrosa:
////////////////////////////////////////


// sintaxis 1
heading.addEventListener('click', function () {
    console.log('Se clickeo! version function')
})

// sintaxis 2
heading.addEventListener('click', () => {
    console.log('Se clickeo! version arrow')
})

// sintaxis 3
heading.addEventListener('click', accionAlClick) // CUIDADO! no llamar la funcion aqui asi: accionAlClick(), se ejecutara inmediatamente y no solo al hacer click.

function accionAlClick () {
    console.log('Se clickeo, funcion alClick!')
}

// sintaxis 4

heading.addEventListener('click', () => {
    heading.textContent = 'Clickeaste este Heading'
})


////////////////////////////////////////
// Example 5.
////////////////////////////////////////
 
const enlaces = document.querySelectorAll('.navegacion a')

// This will not work: beacuse yo cant call a listener over multiple components, it works with just one at a time.
/*
enlaces.addEventListener('click', () => { 
    console.log('Diste click en un enlace')
})
*/

// So the way to solve this is to iterate over it:
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => { // beacuse yo cant call a listener over multiple components, it works with just one at a time.
        console.log('Diste click en un enlace')
    })
})
