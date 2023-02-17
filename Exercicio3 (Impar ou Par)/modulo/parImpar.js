function parImpar(numeroInicio, numeroFinal, escolhaUsuario) {

    let numeroInicial = numeroInicio
    let numeroFim = numeroFinal
    let escolha = escolhaUsuario
    let quantidadePar = 0;
    let quantidadeImpar = 0;
    let quantidadeTotal = 0;

    if (numeroInicial == '' || numeroFim == '' || escolha == '') {
        console.log('ERRO: Alguma entrada está vazia');
    } else if (isNaN(numeroInicial) || isNaN(numeroFim) || isNaN(escolha)) {
        console.log('ERRO: Alguma entrada não é um número');
    } else if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('ERRO: O número inicial deverá ser entre 0 e 500.');
    } else if (numeroFim < 100 || numeroFim > 1000) {
        console.log('ERRO: número final deverá ser entre 100 e 1000.');
    } else if (numeroInicial > numeroFim) {
        console.log('ERRO: O número inicial não pode ser maior que o número final.');
    } else if (numeroInicial == numeroFim) {
        console.log('ERRO: O número inicial não pode ser igual ao número final.');
    } else {
        if (Number(escolha) == 1) {
            console.log('\nLista de números pares')
            for (contador = Number(numeroInicial); contador <= Number(numeroFim); contador++) {
                if (contador % 2 == 0) {
                    console.log(contador);
                    quantidadePar++;
                }
            }
            console.log('Quantidade de números pares: ' + quantidadePar);
        } else if (Number(escolha) == 2) {
            console.log('\nLista de números impares')
            for (contador = Number(numeroInicial); contador <= Number(numeroFim); contador++) {
                if (contador % 2 == 1) {
                    console.log(contador);
                    quantidadeImpar++;
                }
            }
            console.log('Quantidade de números impares: ' + quantidadeImpar);
        } else if (Number(escolha) == 3) {
            console.log('\nLista de números pares e impares')
            for (contador = Number(numeroInicial); contador <= Number(numeroFim); contador++) {
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
}

module.exports = {
    parImpar
}
