const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"




// Si lo hacemos de la siguiente manera, el fetch de los comentarios retrasa el fetch
// .. de las fotos. Mas abajo lo haremos en simultaneo para evitar este atascamiento.

const consultarAPI = async () => {
    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    //console.log(resultado)

    //console.log('Iniciando carga de fotos..')

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    //console.log(resultado2)

    const fin = performance.now()

    console.log(`La ejecucion del PRIMER ASYNC duro: ${fin - inicio} ms.`)
}

consultarAPI() 

// En este caso en cambio, el Promise.all() asegura que arranquen los 2 al mismo tiempo.

const consultarAPIv2 = async () => {
    const inicio = performance.now()

    const [respuesta1, respuesta2] = await Promise.all([fetch(url), fetch(url2)])

    const resultado1 = await respuesta1.json()
    const resultado2 = await respuesta2.json()

/*     console.log(resultado1)
    console.log(resultado2)
 */
    const fin = performance.now()
    console.log(`La ejecucion del SEGUNDO ASYNC duro: ${fin - inicio} ms.`)
}

consultarAPIv2() 