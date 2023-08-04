// Generating html code with javascript

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    // IMPORTANTE!: por default, el evento submit te lleva a la pagina seteada como 
    // action y envia el formulario, para evitar el comportamiento por default, usar e.preventDefault()
    e.preventDefault()

    //1 se toman los datos ingresados en el form. 
    const nombre = document.querySelector('.nombre').value // devuelve el contenido de value al momento del submit.
    const password = document.querySelector('.password').value // devuelve el contenido de value al momento del submit.
    
    //6 
    const alertaPrevia = document.querySelector('.alerta')

    if(alertaPrevia) {
        //para que no se creen infinitos carteles uno abajo del otro con el appendChild de abajo.
        alertaPrevia.remove() 
    }

    //3 crea un div
    const alerta = document.createElement('DIV')

    //alerta.id = 'Hola' // le agrega el id hola al div. 
    
    
    //4 le agrega la clase alerta al div. (para agregar clases se usa la API de clases, no asignacion como en id)
    alerta.classList.add('alerta') 

    //5 logica q permite q se cree o no el alerta.
    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios.'
        alerta.classList.add('error') 

    } else {
        alerta.textContent = 'Todo ok. Enviando..'
        alerta.classList.add('exito') 
    }

    formulario.appendChild(alerta)
})