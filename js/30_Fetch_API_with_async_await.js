//Fetch API - with Async Await

/* const consultarAPI = ()=> {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        resultado.forEach((comentario)=>{
            console.log(comentario)
        })
    })
}

consultarAPI()
 */
const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach((comentario) => {
        console.log(comentario)
    })
}

consultarAPI()