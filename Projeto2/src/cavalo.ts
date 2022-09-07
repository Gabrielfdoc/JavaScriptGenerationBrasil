import { Animal } from "./Animal"

export class Cavalo extends Animal {

    override emitindoSom() {
        console.log("")

        const somEmitido = this.gerarAcaoRandomica(3)

        if (somEmitido === 1) {
            console.log(`${this.nome} está relinchando!`)
        } else if (somEmitido === 2) {
            console.log(`${this.nome} está bufando(Melhor sair de perto)!`)
        } else {
            console.log(`${this.nome} está em silêncio(Ele teve um dia difícil no trabalho e quer ficar sozinho)!`)
        }

        console.log("")
    }

    override locomovendo() {
        console.log("")

        const locomocao = this.gerarAcaoRandomica(3)

        if (locomocao === 1) {
            console.log(`${this.nome} está trotando!`)
        } else if (locomocao === 2) {
            console.log(`${this.nome} está correndo!`)
        } else {
            console.log(`${this.nome} está parado(Porque ninguém é de ferro né?)!`)
        }

        console.log("")
    }

    override toString(): String {
        return `Nome: ${this.nome}\n` +
            `Idade: ${this.idade}\n`
    }
}