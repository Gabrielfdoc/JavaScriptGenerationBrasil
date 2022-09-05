let sorteioDados = []
let maior = 0
let contador = 0
let atualMaior = 0
let soma = 0

for (let index = 0; index < 10; index++) {

    sorteioDados[index] = Math.floor(Math.random() * 6) + 1

    if (sorteioDados[index] > maior)
        maior = sorteioDados[index]

    if (sorteioDados[index] == maior) {
        contador++

        if (atualMaior != maior) {
            atualMaior = maior
            contador = 0
            contador++
        }
    }
    soma += sorteioDados[index]
}

console.table(sorteioDados)
const media = soma / 10
console.log(`A média aritmética é: ${media}`)
console.log(`O maior número foi: ${atualMaior}`)
console.log(`O maior número saiu ${contador} vezes!`)