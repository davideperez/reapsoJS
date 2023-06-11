// Objetos - Destructuring con 2 o mas objetos. Util para cuando se integra una API, donde variables se pueden llamar igual. 

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// Solucion: se crea un alias para cliente.nombre: Se crea un alias nombreCliente.
const {nombre, precio, disponible } = producto
const {nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)


/* 
FORMA INCORRECTA
Alternativa pero que puede traer problemas con bases de datos ya que se cambia el nombre de la variable, cosa que no sera posible poder hacer.:

const {nombre, precio, disponible } = producto
const {nombreCliente, premium } = cliente // notar que no se usa el alias y se cambia el nombre de la variable.

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)

 */