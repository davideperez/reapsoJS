//Iteradores en JS

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

//forEach: Te permite acceder a cada elemento del array. 
// ejecuta el contenido de function recursivamente, por cada elmento del array.

tecnologias.forEach( function() {
    //console.log('Ejecutando Funcion')
})

//imprimira cada elemento del array.

tecnologias.forEach( function(tech) {
  //  console.log(tech)
})



// map: te permite acceder a cada elmento del array creando un nuevo array. 


// Lo siguiente dara el mismo resultado. 
const arrayForEach1 = tecnologias.forEach( function(tech) {
    //console.log(tech)
})

const arrayMap1 = tecnologias.map( function(tech) {
    //console.log(tech)
})

// Aqui vemos q forEach devuelve undefined y .map devuelve un nuevo arreglo. 
const arrayForEach2 = tecnologias.forEach( function(tech) {
    return tech
})

const arrayMap2 = tecnologias.map( function(tech) {
    return tech
})

console.log(arrayForEach2)
console.log(arrayMap2)
