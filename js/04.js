// Puntos que destaco:


/////////////////////////////////////////////////////
//Objetos
/////////////////////////////////////////////////////

/* 
// en vez de:
const nombre = "Tablet"
const precio = 300
const disponible = true

*/

//usamos:
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

//Tests:

console.log(producto)
console.table(producto)

console.table(producto.nombre)
console.table(producto.precio)
console.table(producto.disponible)

//////////////////
// Destructuring: para sacar variables de un objeto. 
//////////////////

/* 
// En vez de:
const nombre = producto.nombre;
const precio = producto.precio;
const disponible = producto.disponible;
 */

// Basta solo con:
const { nombre, precio, disponible } = producto

//Test
console.log(nombre)
console.log(precio)
console.log(disponible)

/////////////////////////////
//Object Literal Enhancement: Para poner unas variables dentro de un objeto.
/////////////////////////////

/* 
//en vez de:

const nuevoObjeto = {
    autenticado: true,
    usuario: "Juan"
}
 */

//se puede hacer: 

const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado, //se tienen que llamar igual. 
    usuario
}

console.table(nuevoObjeto)