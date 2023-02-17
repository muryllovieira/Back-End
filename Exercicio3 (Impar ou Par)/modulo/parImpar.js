function parImpar(numeroInicio, numeroFinal, escolhaUsuario) {

    let numeroInicial = Number(numeroInicio)
    let numeroFim = Number(numeroFinal)
    let escolha = Number(escolhaUsuario)
    let quantidadePar = 0;
    let quantidadeImpar = 0;
    let quantidadeTotal = 0;

    if (escolha == 1) {
        console.log('\nLista de números pares')
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 0) {
                console.log(contador);
                quantidadePar++;
            }
        }
        console.log('Quantidade de números pares: ' + quantidadePar);
    } else if (escolha == 2) {
        console.log('\nLista de números impares')
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 1) {
                console.log(contador);
                quantidadeImpar++;
            }
        }
        console.log('Quantidade de números impares: ' + quantidadeImpar);
    } else if (escolha == 3) {
        console.log('\nLista de números pares e impares')
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 0) {
                console.log('Par: ' + contador);
                quantidadeTotal++;
            } else if (contador % 2 == 1) {
                console.log('Impar: ' + contador);
                quantidadeTotal++;
            }
        }
        console.log('Quantidade total de números pares e impares: ' + quantidadeTotal);
    }
}

module.exports = {
    parImpar
}
