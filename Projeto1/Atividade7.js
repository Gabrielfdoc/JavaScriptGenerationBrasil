const prompt = require("prompt-sync")()

let notas = [5]
let maiorNota = -2147483647

for (let index = 0; index < 5; index++) {

    notas[index] = Number(prompt(`Digite a ${index + 1}ª nota: `))

    if (notas[index] > maiorNota)
        maiorNota = notas[index]
}

console.log(`A maior nota é: ${maiorNota}`)