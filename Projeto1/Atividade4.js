const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))
resultado = 0

do {
    resultado += numero
    numero -= 1
} while (numero >= 0)
    console.log(`${resultado}`)