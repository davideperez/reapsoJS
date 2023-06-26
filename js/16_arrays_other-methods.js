// Arrays - Extra methods

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']
const numeros = [10, 20, 30]

//1- .filter
const nuevoArray1 = tecnologias.filter((tech) => tech === 'React')

//2- .includes
//Para comprobar/verificar/chequear si el elemento EXISTE en el array. Devuelve true or false. 
const resultadoIncludes = tecnologias.includes('React')

//3- .some
// Para comprobar si al menos 1 (UN) elemento del arreglo, CUMPLE con una CONDICION.
// No nos va a decir CUAL ni nos va a decir CUANTOS. Devuelve true o false, si al menos 1 cumple con la condicion.

const resultadoSome = numeros.some(numero => numero > 15)

//4- .find
// Este si nos devuelve si hay un elemento que cumple la CONDICION, y CUAL es el PRIMER elemento que la cumple
const resultadoFind = numeros.find(numero => numero > 15)


//5- .every
// Finalmente, este si devuelve true or false SI TODOS los elemento cumplen con la CONDICION.
const resultadoEvery = numeros.every(numero => numero > 15)


//6- .reduce
// va sumando los valores del array para devolver su total. el 0 es el numero base en el que queremos que empieze.
const resultadoReduce = numeros.reduce((total, numero) => numero + total, 0)

//7- .forEach

const resultadoForEach = tecnologias.forEach(tech => console.log(tech))
const resultadoForEach2 = tecnologias.forEach((tech, index) => console.log(index,tech))


//8- .map

const resultadoMap = tecnologias.map(tech => tech)



////////////////////////////////////
console.log(nuevoArray1)
console.log(resultadoIncludes)
console.log(resultadoSome)
console.log(resultadoFind)
console.log(resultadoEvery)
console.log(resultadoReduce)
console.log(resultadoForEach)
console.log(resultadoForEach2)
console.log(resultadoMap)

///////////////////////////////////
//https://doesitmutate.xyz/
