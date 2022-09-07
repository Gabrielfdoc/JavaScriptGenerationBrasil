import { Animal } from "./Animal"

export class Preguica extends Animal {

    override emitindoSom() {
        console.log("")

        const somEmitido = this.gerarAcaoRandomica(2)

        if (somEmitido === 1) {
            console.log(`${this.nome} está emitindo um som desconhecido!`)
        } else {
            console.log(`${this.nome} está em completo silêncio(Momento instrospectivo?!).`)
        }

        console.log("")
    }

    override locomovendo() {
        console.log("")

        const locomocao = this.gerarAcaoRandomica(3)

        if (locomocao === 1) {
            console.log(`${this.nome} está subindo em uma árvore!`)
        } else if (locomocao === 2) {
            console.log(`${this.nome} está parado curtindo uma preguicinha.`)
        } else {
            console.log(`${this.nome} está caminhando lentamente(Até mesmo para os padrões de uma preguiça)!`)
        }

        console.log("")
    }

    override toString(): String {
        return `Nome: ${this.nome}\n` +
            `Idade: ${this.idade}\n`
    }
}