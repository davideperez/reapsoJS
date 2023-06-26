
////////////////////////
// Objetos Manipulacion: Actualizar, Agregar o borrar propiedades.
////////////////////////

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

//Reescribir un valor:
producto.nombre = 'Monitor Curvo'

//Si no existe lo agrega:
// si la propiedad no existe, no marca error, ni tampoco hace nada. 
producto.imagen = 'imagen .jpg'

//para eliminar una propiedad. 
delete producto.disponible


////////////////////////
// Blockear objetos:
////////////////////////

//Forma 1: No se pueden reescribir sus propiedades ni agregar nuevas ni borrar.

Object.freeze(producto)

// Forma 2: Permite reescribir, pero no agregar ni borrar.

Object.seal(producto)