// Unir 2 Objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

/*
FORMA INCORRECTA:
producto.cliente = cliente

console.log(producto)

Los objetos se habran unido, pero el problema es que se 
modifica el objeto producto. Esto es un gran NO en JS. 
Esta relacionado a los useState de React. 
Hay que usar inmutibailidad es decir crear un nuevo objeto
y que no se modifique ninguno de los 2.
*/


/*
FORMA INCORRECTA 2:

const nuevoObjeto = Object.assign(producto, cliente)
console.log(nuevoObjeto) // veremos que uso el nombre de Juan. Esto es un problema, xq perdimos el dato "Tablet"
console.log(cliente) // cliente no se ve modifcado eso esta bien.. pero..
console.log(producto) // producto si se modifica, ahora nombre es Juan.
*/

/*
////////////////////////////////////
//Solucion Parcial: SPREAD OPERATOR
////////////////////////////////////

// Esta implementacion NO modifica los objetos originales. 
// Pero si se pierden los datos de las variables con el mismo nombre.

const nuevoObjeto2 = {...producto, ...cliente}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
*/

////////////////////////////
// SOLUCION DEFINITIVA:
////////////////////////////

const nuevoObjeto3 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto3)
console.log(cliente)
console.log(producto)