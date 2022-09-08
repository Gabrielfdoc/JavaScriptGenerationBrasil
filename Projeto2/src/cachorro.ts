import { Animal } from "./Animal"

export class Cachorro extends Animal {

    override emitindoSom() {
        console.log("")
        let som = this.gerarAcaoRandomica(3)
        
        if (som === 1) {
            console.log(`${this.nome} está latindo!`)
        } else if (som === 2) {
            console.log(`${this.nome} está rosnando(Apenas sorria e acene).`)
        } else {
            console.log(`${this.nome} está absorto em silêncio contemplando mais uma de suas crises existenciais.`)
        }
        console.log("")
    }

    override locomovendo() {
        console.log("")
        let locomover = this.gerarAcaoRandomica(3)
        
        if (locomover === 1) {
            console.log(`${this.nome} está correndo!`)
        } else if (locomover === 2) {
            console.log(`${this.nome} está parado(E te olhando com um olhar de quem parece te julgar eu diria).`)
        } else {
            console.log(`${this.nome} está caminhando tranquilamente(Com uma passada bem estilosa)!`)
        }
        console.log("")
    }

    override toString(): String {
        return `Nome: ${this.nome}\n` +
            `Idade: ${this.idade}\n`
    }
}