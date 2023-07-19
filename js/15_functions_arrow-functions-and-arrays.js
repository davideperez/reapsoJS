// Functions - Arrow Functions & Arrays.

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']




////// MAP: Function Expression Version

const nuevoArray1 = tecnologias.map( function(tech) {
    if (tech === 'HTML') {
        return 'GrahpQL'
    } else {
        return tech
    }
})


// MAP: Arrow Version
const nuevoArray1Arrow = tecnologias.map( tech => {
    if (tech === 'HTML') {
        return 'GrahpQL'
    } else {
        return tech
    }
})




////// FILTER: Function Expression Version

const nuevoArray2 = tecnologias.filter( function(tech) {
    return tech === 'React'
})

// MAP: Arrow Version

const nuevoArray2Arrow = tecnologias.filter( tech => tech === 'React')





console.log(nuevoArray1)
console.log(nuevoArray1Arrow)
console.log(nuevoArray2)
console.log(nuevoArray2Arrow)