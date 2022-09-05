const prompt = require("prompt-sync")()

const anoAtual = new Date().getFullYear()

const idade = Number(prompt(`Digite a sua idade: `))

const fezAniversario = prompt(`Você já fez aniversário esse ano? (s/n)`)

if (converteSOuNParaBoolean(fezAniversario)) {
    console.log(`O ano de nascimento é: ${anoAtual - idade}`)
} else {
    console.log(`O ano de nascimento é: ${(anoAtual - idade) - 1}`)
}

function converteSOuNParaBoolean(sOuN) {
    let valorRetornado = true

    if (sOuN == "s")
            valorRetornado = true
        else if (sOuN == "n")
            valorRetornado = false

        return valorRetornado
}
