import { Animal } from "./src/Animal"
import { Cachorro } from "./src/cachorro"
import { Cavalo } from "./src/cavalo"
import { Preguica } from "./src/preguica"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

const ID_CACHORRO = 1
const ID_CAVALO = 2
const ID_PREGUICA = 3

let cavalos = Array<Cavalo>()
let cachorros = Array<Cachorro>()
let preguicas = Array<Preguica>()

try {
    while (true) {
        console.log("")
        console.log("1 - Cadastrar dados de um novo cavalo")
        console.log("2 - Cadastrar dados de um novo cachorro")
        console.log("3 - Cadastrar dados de uma nova preguiça")
        console.log("4 - Fazer com que determinado animal se movimente")
        console.log("5 - Fazer com que determinado animal emita um som")
        console.log("6 - Exibir dados de todos os animais de um tipo cadastrado")
        console.log("7 - Sair")

        let opcao = prompt("Digite a opcão: ")

        switch (opcao) {
            case "1":
                cadastrarCavalo()
                break
            case "2":
                cadastrarCachorro()
                break
            case "3":
                cadastrarPreguica()
                break
            case "4":
                escolheAnimalParaMovimentar()
                break
            case "5":
                escolheAnimalParaEmitirSom()
                break
            case "6":
                escolheAnimalParaExibir()
                break
            case "7":
                break // este break irá sair do switch
            default:
                console.log("A opção escolhida não existe!")
        }

        // este break irá parar o while
        if (opcao === "7")
            break
    }
} catch (ex) {
    throw Error(`${ex}.message`)
}

function cadastrarCavalo() {

    console.log("")
    let nome = prompt("Digite o nome do cavalo: ")
    let idade = Number(prompt("Digite a idade do cavalo: "))

    const cavalo = new Cavalo(nome, idade)

    cavalos.push(cavalo)
}

function cadastrarCachorro() {

    console.log("")
    let nome = prompt("Digite o nome do cachorro: ")

    let idade = Number(prompt("Digite a idade do cachorro: "))

    const cachorro = new Cachorro(nome, idade)

    cachorros.push(cachorro)
}

function cadastrarPreguica() {

    let nome = prompt("\nDigite o nome da preguiça: ")
    let idade = Number(prompt("Digite a idade da preguiça: "))

    const preguica = new Preguica(nome, idade)

    preguicas.push(preguica)
}

function escolheAnimalParaExibir() {

    console.log("1 - Se deseja exibir os dados de todos os cavalos cadastrados")
    console.log("2 - Se deseja exibir os dados de todos os cachorros cadastrados")
    console.log("3 - Se deseja exibir os dados de todas as preguiças cadastradas")

    const opcao = prompt("Opção: ")

    if (opcao === "1") {
        let contador = 0

        for (const cavalo of cavalos) {
            contador++
            console.log(`Cavalo ${contador} `)
            console.log(cavalo)
        }
    } else if (opcao === "2") {
        let contador = 0

        for (const cachorro in cachorros) {
            contador++
            console.log(`Cachorro ${contador}`)
            console.log(cachorro)
        }
    } else if (opcao === "3") {
        let contador = 0

        for (const preguica in preguicas) {
            contador++
            console.log(`Preguiça ${contador}`)
            console.log(preguica)
        }
    } else {
        console.log("A opção escolhida não existe!\n")
    }
}

function escolheAnimalParaMovimentar() {

    console.log("1 - Se deseja movimentar um cavalo")
    console.log("2 - Se deseja movimentar um cachorro")
    console.log("3 - Se deseja movimentar uma preguiça")

    // = Operador de atribuição
    let opcao = prompt("Opção: ")

    // == ou === Operadores de comparação
    if (opcao === "1") {
        exibeAnimal(ID_CAVALO)
        const nomeCavaloLocomocao = prompt("Insira o nome do cavalo que deseja locomover: ")

        const cavaloLocomocao = buscarAnimal(ID_CAVALO, nomeCavaloLocomocao)

        locomoveAnimal(cavaloLocomocao)
    } else if (opcao === "2") {
        exibeAnimal(ID_CACHORRO)
        const nomeCachorroLocomocao = prompt("Insira o nome do cachorro que deseja locomover: ")

        const cachorroLocomocao = buscarAnimal(ID_CACHORRO, nomeCachorroLocomocao)

        locomoveAnimal(cachorroLocomocao)
    } else if (opcao === "3") {
        exibeAnimal(ID_PREGUICA)

        const nomePreguicaLocomocao = prompt("Insira o nome da preguica que deseja locomover: ")
        const preguicaLocomocao = buscarAnimal(ID_PREGUICA, nomePreguicaLocomocao)

        locomoveAnimal(preguicaLocomocao)
    } else {
        console.log("A opção escolhida não existe!\n")
    }
}

function escolheAnimalParaEmitirSom() {

    console.log("1 - Se deseja escutar um cavalo")
    console.log("2 - Se deseja escutar um cachorro")
    console.log("3 - Se deseja escutar uma preguiça")

    let opcao = prompt("Opção: ")

    if (opcao === "1") {
        exibeAnimal(ID_CAVALO)

        const nomeCavaloEscolhido = prompt("Insira o nome do cavalo que deseja escutar: ")
        const cavaloEscolhido = buscarAnimal(ID_CAVALO, nomeCavaloEscolhido)

        emiteSomAnimal(cavaloEscolhido)
    } else if (opcao === "2") {
        exibeAnimal(ID_CACHORRO)

        const nomeCachorroEscolhido = prompt("Insira o nome do cachorro que deseja escutar: ")
        const cachorroEscolhido = buscarAnimal(ID_CAVALO, nomeCachorroEscolhido)

        emiteSomAnimal(cachorroEscolhido)
    } else if (opcao === "3") {
        exibeAnimal(ID_PREGUICA)

        const nomePreguicaEscolhida = prompt("Insira o nome da preguica que deseja escutar: ")
        const preguicaEscolhida = buscarAnimal(ID_CAVALO, nomePreguicaEscolhida)

        emiteSomAnimal(preguicaEscolhida)
    } else {
        console.log("A opção escolhida não existe!\n")
    }
}

function exibeAnimal(opcaoAnimal: Number): void {
    switch (opcaoAnimal) {
        case 1:
            cachorros.forEach((cachorro) => console.log(`Nome: ${cachorro.getNome()}`))
            break
        case 2:
            cavalos.forEach((cavalo) => console.log(`Nome: ${cavalo.getNome()}`))
            break
        case 3:
            preguicas.forEach((preguica) => console.log(`Nome: ${preguica.getNome()}`))
            break
    }
}

function locomoveAnimal(animal?: Animal): void {
    if (animal != null) {
        animal.locomovendo()
    } else {
        console.log("O animal escolhido não existe!")
    }
}

function emiteSomAnimal(animal?: Animal): void {
    if (animal != null) {
        animal.emitindoSom()
    } else {
        console.log("O animal escolhido não existe!")
    }
}

function buscarAnimal(opcaoAnimal: Number, nome: string): Animal | undefined {
    switch (opcaoAnimal) {
        case 1:
            return cachorros.find((cachorro) => cachorro.getNome() === nome)
        case 2:
            return cavalos.find((cavalo) => cavalo.getNome() === nome)
        case 3:
            return preguicas.find((preguica) => preguica.getNome() === nome)
    }
}