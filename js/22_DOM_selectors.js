//Selectores del Document

///////////////////
//  .querySelector
///////////////////
// Para retornar maximo, 1 elemento. minimo 0.
const heading = document.querySelector('h2')

/*

Otras formas de llamar al mismo elemento:

const heading = document.querySelector('.DOM h2')
const heading = document.querySelector('.heading')
const heading = document.querySelector('#heading') // esta version te trae una lista de propiedades, interesante!!!!

*/

console.log(heading)
console.log(heading.textContent)
console.log(heading.tagName)
console.log(heading.classList)
console.log(heading.id)


///////////////////////
//  .querySelectorAll
///////////////////////
//retorna todos los elementos q cumplen con la descripcion, en un array. 

const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces)
