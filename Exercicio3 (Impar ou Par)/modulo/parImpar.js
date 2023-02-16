function parImpar(numeroInicio, numeroFinal, escolhaUsuario) {

    let numeroInicial = Number(numeroInicio)
    let numeroFim = Number(numeroFinal)
    let escolha = Number(escolhaUsuario)
    let quantidadePar = 0;
    let quantidadeImpar = 0;
    let quantidadeTotal = 0;

    if (escolha == 1) {
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 0) {
                console.log('Lista de números pares \n' + contador);
                quantidadePar++;
            }
        }
        console.log('Quantidade de números pares: ' + quantidadePar);
    } else if (escolha == 2) {
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 1) {
                console.log('Lista de números Impares \n' + contador);
                quantidadeImpar++;
            }
        }
        console.log('Quantidade de números impares: ' + quantidadeImpar);
    } else if (escolha == 3) {
        for (contador = numeroInicial; contador <= numeroFim; contador++) {
            if (contador % 2 == 0) {
                console.log('Par: ' + contador);
                quantidadeTotal++;
            } else if (contador % 2 == 1) {
                console.log('Impar: ' + contador);
                quantidadeTotal++;
            }
        }
        console.log(quantidadeTotal);
    }
}


parImpar(1, 15, 3);
