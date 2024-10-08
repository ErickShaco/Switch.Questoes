const Prompt = require(`prompt-sync`)()

const operaçoes = Prompt(`Informe qual operação voce deseja, temos : 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisao: `)

switch(operaçoes){
    case '1':
        let n1 = parseFloat(Prompt(`Informe seu numero:`))
        let n2 = parseFloat(Prompt(`Informe outro numero:`))
        let soma = n1 + n2
        console.log(`${soma} é o resultado`)
        break
    case '2':
        let n3 = parseFloat(Prompt(`Informe seu numero:`))
        let n4 = parseFloat(Prompt(`Informe outro numero:`))
        let subtração = n3 - n4
        console.log(`${subtração} é o resultado`)
        break
    case '3':
        let n5 = parseFloat(Prompt(`Informe seu numero:`))
        let n6 = parseFloat(Prompt(`Informe outro numero:`))
        let multiplicação = n5 * n6
        console.log(`${multiplicação} é o resultado`)
        break
    case '4':
        let n7 = parseFloat(Prompt(`Informe seu numero:`))
        let n8 = parseFloat(Prompt(`Informe outro numero:`))
        let divisao = n7 / n8
        console.log(`${divisao} é o resultado`)
        break
}