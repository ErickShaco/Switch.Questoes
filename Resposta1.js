const Prompt = require(`prompt-sync`)()

const numero = Prompt(`Digite um numero de 1 a 7:`)

switch(numero){
    case '1':
       console.log(`Segunda`)
        break
    case '2':
        console.log(`Terça`)
        break
    case '3':
        console.log(`Quarta`)
        break
    case '4':
        console.log(`Quinta`)
        break
    case '5':
        console.log(`Sexta`)
        break
    case '6':
        console.log(`Sabado`)
        break
    case '7':
        console.log(`Domingo`)
        break
}
