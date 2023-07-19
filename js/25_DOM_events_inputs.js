//DOM Events - Input

const inputNombre = document.querySelector('.nombre')

/*
//1 evento input

inputNombre.addEventListener('input', function (){
    console.log('Escribiendo en el input... ')
})

//2 evento keydown

inputNombre.addEventListener('keydown', function (){
    console.log('Se detecto una tecla presionada en el input.. ')
})

//3 evento keyup

inputNombre.addEventListener('keyup', function (){
    console.log('Se detecto una tecla levantada en el input.. ')
})


//4 para ver lo que se va escribiendo en el input:

inputNombre.addEventListener('input', function (){
    console.log('Escribiendo en el input.. ')
    console.log(inputNombre.value)
})



//5 como capturar el evento escuchado. Este evento es un objeto complejo con muchas propiedades. Se genera uno por cada accion realizada.

inputNombre.addEventListener('input', function (e){
    console.log(e)
})

*/

//6 de esta forma podemos por ejemplo tambien mostrar el value desde la propiedad target.value del objeto evento

inputNombre.addEventListener('input', function (e){
    console.log(e.target.value)
})

//7 Ejemplo de implementacion de password donde se ve la ultima letra:

const inputPassword = document.querySelector('.password')

inputPassword.addEventListener('input', funcionPassword)

//7.1 Podemos mostrar el evento sin haber descripto la variable en el callback:
/*
function funcionPassword (e) {
    console.log(e.target.value)
}
*/

function funcionPassword (e) {
    inputPassword.type = 'text'

    setTimeout(()=>{
        inputPassword.type = 'password'
    },1000)
}
