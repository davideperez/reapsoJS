//Scope

/* Esto dara error:
const precio = 300

const precio = 600

*/

//esto no, porque las variables precios estan en diferentes scopes, o ambitos. El global la primera, y la 2da en el de unaFuncion.

const precio = 300

function unaFuncion() {
    const precio = 600
}


/* Escenario 1: imprime 600.

const precio = 300

function unaFuncion() {
    const precio = 600
    console.log(precio)
}

*/

/* Escenario 2: imprime 300. Al no encontrar la variable en el scope de unaFuncion, se va a buscar al global.

const precio = 300

function unaFuncion() {
    console.log(precio)
}

*/

/* Escenario 3: imprime 300. Ya que existe la variable en el scope global y el llamado se hace desde el scope global.

IMPORTANTE: el console.log() que se encuentra fuera de la funcion no sabe q existe precio en unaFuncion.

const precio = 300

function unaFuncion() {
    const precio = 600
}

console.log(precio)

*/