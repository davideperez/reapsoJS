//Fetch API - with then

const url = "https://jsonplaceholder.typicode.com/comments"


// fetch se reemplaza por axios.


/* 
//vemos que se hace el fetch
fetch(url).then((respuesta)=> {
    console.log('Haciendo Fetch...')
})

// vemos la respuesta
fetch(url).then((respuesta)=> {
    console.log(respuesta)
})

//usamos el json q ofrece
fetch(url)
    .then((respuesta)=> {
        return respuesta.json()
    })
    .then(()=>{
        console.log('Resultado casi listo...')
    })
    
//logueamos en consola el resutlado.
fetch(url)
    .then((respuesta)=> {
        return respuesta.json()
    })
    .then((resultado)=>{
        console.log(resultado)
    })


//o logueamos cada resultado por separado
fetch(url)
    .then((respuesta)=> {
        return respuesta.json()
    })
    .then((resultado)=>{
        resultado.forEach((comentario)=>{
            console.log(comentario)
        })
    })

//mejoramos el codigo
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            resultado.forEach((comentario)=>{
                console.log(comentario)
            })
        })
*/

//por ultimo lo metemos en una funcion:

const consultarAPI = ()=> {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        resultado.forEach((comentario)=>{
            console.log(comentario)
        })
    })
}

consultarAPI()