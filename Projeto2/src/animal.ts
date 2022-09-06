export abstract class Animal {

    protected nome: String
    private idade: Number
    private emiteSom: Boolean = true

    constructor (
        nome: String,
        idade: Number,
        emiteSom: Boolean = true
    ) {
        this.nome = nome
        this.idade = idade
        this.emiteSom = emiteSom
    }

    abstract emitindoSom(): void

    abstract locomovendo(): void

}