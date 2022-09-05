let N1 = []
let N2 = []
let soma = 0
let M1 = []
let M2 = []

for (let linhaN1 = 0; linhaN1 < 4; linhaN1++) {
    N1.push([])
}

for (let linhaN1 = 0; linhaN1 < 4; linhaN1++) {

    for (let colunaN1 = 0; colunaN1 < 6; colunaN1++) {

        N1[linhaN1][colunaN1] = Math.floor(Math.random() * (20 - 11 + 1) + 11)
    }
}

console.table(N1)

for (let linhaN2 = 0; linhaN2 < 4; linhaN2++) {
    N2.push([])
}

for (let linhaN2 = 0; linhaN2 < 4; linhaN2++) {

    for (let colunaN2 = 0; colunaN2 < 6; colunaN2++) {

        N2[linhaN2][colunaN2] = Math.floor(Math.random() * 10) + 0
    }
}
console.table(N2)

for (let linhaM1 = 0; linhaM1 < 4; linhaM1++) {
    M1.push([])
}

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