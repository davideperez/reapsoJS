// Functions - Arrow Functions

// Function Expression
const sumarFuncExpression = function (numero1, numero2) {
    numero1 + numero2
}

sumarFuncExpression(10,10)

// Arrow Function
const sumarArrow = (numero1, numero2) => {
    return numero1 + numero2
}

sumarArrow(10,20)

// Hasta aqui ningun beneficio destabale de la arrow, salvo la sintesis, pero donde brillan es en los returns:

// 1- Si tenes solo una linea de codigo podes obviar las llaves y la palabra return:

const sumarArrowOneLine = (numero1, numero2) => numero1 + numero2
sumarArrowOneLine(20,20)

// 2- Si tenes solo UN (1) parametro para pasar se pueden obviar los parentesis:

const sumarArrowOneLineOneParam = numero => numero + 20

sumarArrowOneLineOneParam(30)