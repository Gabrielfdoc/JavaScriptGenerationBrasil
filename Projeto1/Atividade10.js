const prompt = require("prompt-sync")()

let matriz = []
let soma = 0
let somaDiagonal = 0

for (let linha = 0; linha < 3; linha++) {
    matriz.push([])
}

for (let linha = 0; linha < 3; linha++) {

    for (let coluna = 0; coluna < 3; coluna++) {

        matriz[linha][coluna] = Number(prompt(`Digite o valor para a ${linha + 1}ª linha, ${coluna + 1}ª coluna da matriz: `))
        soma += matriz[linha][coluna]

        if (linha == coluna)
            somaDiagonal += matriz[linha][coluna]
    }
}

console.table(matriz)
console.log(`A soma dos valores da matriz é: ${soma}`)
console.log(`A soma dos valores da diagonal principal da matriz é: ${somaDiagonal}`)