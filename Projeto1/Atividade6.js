let soma = 0

for (let numero = 1; numero <= 500; numero++) {

    if (numero % 3 == 0 && numero % 2 != 0)
        soma += numero
}

console.log(`Soma: ${soma}`)