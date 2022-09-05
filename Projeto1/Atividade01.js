const prompt = require("prompt-sync")()

let numero = 0
let soma = 0
let contador = 0

while (numero >= 0) {
    numero = Number(prompt("Digite um número: "))

    if (numero >= 0 ) {
        contador++
        soma += numero
    }
}

console.log(`A soma é ${soma}`)
media = soma / contador
console.log(`A média é ${media}`)
console.log(`A quantidade de números digitados é ${contador}`)