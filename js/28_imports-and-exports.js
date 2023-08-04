// Imports y Exports

import {
    sumar as sumaCopada,
    restar as probandoResta
} from './funciones.js'


const resultado = sumaCopada(5, 2) + probandoResta(10,7)

console.log(resultado)

/*

En el index.html se debe colocar la propiedad type=module al element <script>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <body>
        <header> Fundamenots de JS </header>

        <script src="js/28_imports-and-exports.js" type="module"></script>
    </body>
</html>

*/