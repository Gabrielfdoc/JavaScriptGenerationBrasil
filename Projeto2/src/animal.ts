export abstract class Animal {

    protected nome: String
    protected idade: Number
    protected emiteSom: Boolean = true

    constructor(
        nome: String,
        idade: Number
    ) {
        this.nome = nome
        this.idade = idade
    }

    abstract emitindoSom(): void

    abstract locomovendo(): void

    public getNome() {
        return this.nome
    }

    public getIdade() {
        return this.idade
    }

    public getEmiteSom() {
        return this.emiteSom
    }

    protected gerarAcaoRandomica(quantidadeAcoes: number): Number {
        return Math.floor(Math.random() * quantidadeAcoes) + 1
    }
}