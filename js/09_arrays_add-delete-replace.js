// Operaciones con Arrays

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

console.table('tecnologias')
console.table(tecnologias)
                               

///////////////////
//Agregar elementos
///////////////////


// Estas 2 formas no estan recomendadas en React, ya que se pierde el array original. 
//tecnologias.push('GraphQL') //lo agrega al final. 
//tecnologias.unshift('Express') // lo agrega al principio. 

// En vez de eso podemos crear un nuevo arreglo:
const nuevoArreglo = [...tecnologias, 'GraphQL']

// const nuevoArreglo = ['GraphQL', ...tecnologias] // cambiando el orden lo agrega al comienzo.

//tests
console.table('tecnologias')
console.table(tecnologias)
console.table('nuevoArreglo')
console.table(nuevoArreglo)


/////////////////////
//Eliminar elementos
/////////////////////


/*
Metodos que modifican el arreglo original.. 
tecnologias.pop() // elimina del final.
tecnologias.shift() // elimina del comienzo. 
tecnologias.splice(2, 1) // ("a partir de que elemento", "cuantos elementos a partir de ese elemento queremos eliminar")
 */

// EL METODO RECOMENDADO: FILTER. Retorna un arreglo nuevo.
/* 
// esto imprime 5 veces "Desde Filter"
const nuevoArray = tecnologias.filter(function(){
    console.log("Desde Filter") 
}) */


/* // esto imprime cada elemento del array
const nuevoArray = tecnologias.filter(function(tech){
    console.log(tech)  
})
 */

// esto devuelve una copia del array tecnologias con los mismos elementos excepto 'React'.

const nuevoArray = tecnologias.filter(function(tech){
    return tech !== 'React'
})

//Tests
console.table('tecnologias')
console.table(tecnologias)
console.table('nuevoArray')
console.table(nuevoArray)

//////////////////////
//Reemplazar elementos
//////////////////////

/* 
// No recomendado porque modifica el array original.
tecnologias[0] = 'mongoose' 
*/

/* // map al igual que filter es una funcion que itera sobre el array.
const nuevoArray2 = tecnologias.map(function(tech){
    console.log(tech)
}) */

// Se recomienda entonces usar .map para reemplazos:
const nuevoArray2 = tecnologias.map(function(tech){
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
}) 
console.table('tecnologias')
console.table(tecnologias)
console.table('nuevoArray')
console.table(nuevoArray2)