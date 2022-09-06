import { Animal } from "./Animal"

export class Cavalo extends Animal {

    override emitindoSom() {
        console.log("")
        let som = Math.floor(Math.random() * 3) + 1
        
        if (som = 1) {
            console.log(`${this.nome} está relinchando!`)
        } else if (som = 2) {
            console.log(`${this.nome} está bufando(Melhor sair de perto)!`)
        } else {
            console.log(`${this.nome} está em silêncio(Ele teve um dia difícil no trabalho e quer ficar sozinho)!`)
        }
        console.log("")
    }

    override locomovendo() {
        console.log("")
        let locomover = Math.floor(Math.random() * 3) + 1
        
        if (locomover = 1) {
            console.log(`${this.nome} está trotando!`)
        } else if (locomover = 2) {
            console.log(`${this.nome} está correndo!`)
        } else {
            console.log(`${this.nome} está parado(Porque ninguém é de ferro né?)!`)
        }
        console.log("")
    }

    override toString(): String {
        return "Nome: $nome\n" +
                "Idade: $idade\n"
    }
}