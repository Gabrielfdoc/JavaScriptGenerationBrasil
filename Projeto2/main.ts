import { Animal } from "./src/Animal"
import { Cachorro } from "./src/cachorro"
import { Cavalo } from "./src/cavalo"
import { Preguica } from "./src/preguica"



    const godofredo = new Cachorro(
        "Godofredo",
        7
    )

    const peDePano = new Cavalo(
        "Pé de Pano",
        25
    )

    const flash = new Preguica(
        "Flash",
        13
    )

    godofredo.emitindoSom()
    godofredo.locomovendo()

    peDePano.emitindoSom()
    peDePano.locomovendo()

    flash.emitindoSom()
    flash.locomovendo()

    console.log("Programa encerrado")