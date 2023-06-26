//Tipos de Datos

//Undefined

let cliente

console.log(cliente)
console.log(typeof cliente)

// Boolean
console.log("-------------")

const descuento = true;

console.log(descuento)
console.log(typeof descuento)

// Number
console.log("-------------")

const num1 = 100;
const num2 = 0;
const num3 = -100;

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// BigInt
console.log("-------------")

const numeroGrande = 432948093489823847328473847387483748378738748

console.log (typeof numeroGrande)

const numeroGrande2 = BigInt(432948093489823847328473847387483748378738748)

console.log(typeof numeroGrande2)

//console.log(numeroGrande + numeroGrande2) // no se pueden sumar da error

console.log(numeroGrande + Number(numeroGrande2)) // pero con Cohercion si se pueden sumar!

// Cohercion:
console.log("-------------")

const numero = '30'
const numero2 = 30

console.log(numero + String(numero2))

// Symbol
console.log("-------------")

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol) //  esto va a dar false. 

console.log(primerSymbol) // 
console.log(segundoSymbol) // 

console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


// Null: son objetos vacios.
console.log("-------------")

const descuentoAplicar = null;

const miCosa = {}

console.log(typeof descuentoAplicar)

/* 
PUNTOS A DESTACAR:

Siempre que se cree una variable, se crea con el valor undefined. 


*/