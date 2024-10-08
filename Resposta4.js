const Prompt = require(`prompt-sync`)()

const preço = Prompt(`Qual Fruta voce dejesa? Temos Maçã, Laranja, Kiwi, Melão, Pera e Uva: `)

switch(preço){
    case 'Maçã':
        console.log(`4 Reais`)
        break
    case 'Laranja':
        console.log(`2 Reais`)
        break
    case 'Kiwi':
        console.log(`5 Reais`)
        break
    case 'Melão':
        console.log(`8 Reais`)
        break
    case 'Pera':
        console.log(`7 Reais`)
        break
    case 'Uva':
        console.log(`3 Reais`)
        break
}