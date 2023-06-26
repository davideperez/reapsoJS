// Functions - Function Expression

//ESTO ES: Function Expression: No se la puede llamar antes (es decir lineas arriba) de ser defini

sumar2() // este call no va a funcionar, porque la function esta dentro de una variable. y en la fase de creacion JS no la va a detectar como tal. 

const sumar2 = function (numero1, numero2) {
    console.log(numero1 + numero2)
}

sumar2() // este call va a funcionar.


//Esto es function declaration: 
sumar() // este call va a funcionar porque primer JS crea toda las funciones y luego las ejecuta. 

function sumar (numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2 )
}

sumar() // este call va a funcionar.


// porque no usar entonces siempre function declaration?? Poruqe nos perderiamos de la sintesis de codigo de las: ARROW FUNCTION.