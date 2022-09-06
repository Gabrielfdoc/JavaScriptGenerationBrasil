import { Animal } from "./Animal"

export class Preguica extends Animal {

    override emitindoSom() {
        console.log("")
        let som = Math.floor(Math.random() * 2) + 1

        if (som = 1) {
            console.log(`${this.nome} está emitindo um som desconhecido!`)
        } else {
            console.log(`${this.nome} está em completo silêncio(Momento instrospectivo?!).`)
        }
            console.log("")
    }

    override locomovendo() {
        console.log("")
        let locomover = Math.floor(Math.random() * 3) + 1
        
        if (locomover = 1) {
            console.log(`${this.nome} está subindo em uma árvore!`)
        } else if (locomover = 2) {
            console.log(`${this.nome} está parado curtindo uma preguicinha.`)
        } else {
            console.log(`${this.nome} está caminhando lentamente(Até mesmo para os padrões de uma preguiça)!`)
        }
        console.log("")
    }

    override toString(): String {
        return "Nome: $nome\n" +
                "Idade: $idade\n"
    }
}