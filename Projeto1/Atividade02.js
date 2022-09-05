const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))

console.log(`${numero}`)

while (numero <= 100) {
    numero *= 3
    console.log(`${numero}`)
}