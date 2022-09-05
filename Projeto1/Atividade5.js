const prompt = require("prompt-sync")()

let soma = 0
let mediaFilhos= 0
let maiorSalario = 0
let mediaSalario = 0
let salarioAte100 = 0

for(let habitante = 1; habitante <= 20; habitante++) {

    console.log(`${habitante}º Habitante`)

    const salario = Number(prompt("Digite o salário: "))
    const filhos = Number(prompt("Digite o número de filhos: "))

    soma += salario
    mediaFilhos += filhos

    if (salario > maiorSalario)
        maiorSalario = salario

        if (salario <= 100)
            salarioAte100++
}

mediaSalario = soma / 20
mediaFilhos = mediaFilhos / 20
const percentual = (salarioAte100 / 20) * 100

console.log(`A média do salário da população é de: R$${mediaSalario}`)
console.log(`A média do número de filhos é: ${mediaFilhos}`)
console.log(`O maior salário é de: R$${maiorSalario}`)
console.log(`O percentual de pessoas com o salário até 100 é de: ${percentual}%`)