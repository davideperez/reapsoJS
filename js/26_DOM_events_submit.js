//Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    // IMPORTANTE!: por default, el evento submit te lleva a la pagina seteada como 
    // action y envia el formulario, para evitar el comportamiento por default, usar e.preventDefault()
    //e.preventDefault()

    //Usando 
    const nombre = document.querySelector('.nombre').value // devuelve el contenido de value al momento del submit.
    const password = document.querySelector('.password').value // devuelve el contenido de value al momento del submit.
    
    console.log(nombre)
    console.log(password)

    if (nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log('Los datos se ingresaron correctamente.')
    }

    console.log('Enviaste Formulario')
})