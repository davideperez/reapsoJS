// Template Strings

const producto = "Table de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoEnFuncion(){
    return 'este texto proviene de una funcion'
}


//antiguamente se hacia

console.log(producto + " $" + precio + " Dolares, Marca:" + marca, textoEnFuncion())


//versus

console.log(`${producto} $${precio} Dolares, Marca:${marca} ${textoEnFuncion()}`)