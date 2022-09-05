const prompt = require("prompt-sync")()

const anoAtual = new Date().getFullYear()

const idade = Number(prompt(`Digite a sua idade: `))

const fezAniversario = prompt(`Você já fez aniversário esse ano? (s/n)`)

try {
    if (converteSOuNParaBoolean(fezAniversario)) {
        console.log(`O ano de nascimento é: ${anoAtual - idade}`)
    } else {
        console.log(`O ano de nascimento é: ${(anoAtual - idade) - 1}`)
    }
} catch (e) {
    console.log(e.message)
}

function converteSOuNParaBoolean(sOuN) {
    let valorRetornado = true

    if (sOuN == "s")
            valorRetornado = true
        else if (sOuN == "n")
            valorRetornado = false
        else 
            throw new Error ()

        return valorRetornado
}
