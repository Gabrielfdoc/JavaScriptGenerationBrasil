let soma = 0

let N1 = criacaoMatriz(4, 6, 11, 20)

console.table(N1)

let N2 = criacaoMatriz(4, 6, 0, 10)

console.table(N2)

let M1 = []

for (let linhaM1 = 0; linhaM1 < 4; linhaM1++) {
    M1.push([])
}

let M2 = []

for (let linhaM2 = 0; linhaM2 < 4; linhaM2++) {
    M2.push([])
}

for (let linhaM1 = 0; linhaM1 < 4; linhaM1++) {

    for (let colunaM1 = 0; colunaM1 < 6; colunaM1++) {

        M1[linhaM1][colunaM1] = N1[linhaM1][colunaM1] + N2[linhaM1][colunaM1]	
		M2[linhaM1][colunaM1] = N1[linhaM1][colunaM1] - N2[linhaM1][colunaM1]	
    }
}

console.table(M1)
console.table(M2)

function criacaoMatriz(qtdLinhas, qtdColunas, rangeInicial, rangeFinal) {
    let matriz = []
    for (let linha = 0; linha < 4; linha++) {
        matriz.push([])
    }
    for (let linha = 0; linha < qtdLinhas; linha++) {

        for (let coluna = 0; coluna < qtdColunas; coluna++) {
    
            matriz[linha][coluna] = Math.floor(Math.random() * (rangeFinal - rangeInicial + 1) + rangeInicial)
        }
    }
    return matriz
}