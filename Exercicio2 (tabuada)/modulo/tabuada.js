const calculoTabuada = function (numeroInicial, numeroFinal, contadorInicial, contadorFinal) {
    let tabuadaInicial = Number(String(numeroInicial).replace(',','.'))
    let tabuadaFInal = Number(String(numeroFinal).replace(',','.'))
    let contInicial = Number(String(contadorInicial).replace(',','.'))
    let contFinal = Number(String(contadorFinal).replace(',','.'))

    let resultado;
    let status = true;

    if (tabuadaInicial == 0 || contInicial == 0 || contFinal == 0) {
        status = false;
    } else if (isNaN(tabuadaInicial) || isNaN(contInicial) || isNaN(contFinal)) {
        status = false;
    } else if (tabuadaInicial < 2 || tabuadaFInal > 100){
        console.log('ERRO: As entradas só podem ser entre 2 e 100');
    } else if (contInicial < 1 || contFinal > 50) {
        console.log('ERRO: O valor até onde será calculada a tabuada deverá ser entre 1 e 50');
    }
    else {
        for (let cont = tabuadaInicial; cont <= tabuadaFInal; cont++) {
            console.log('\nTabuada do ' + cont);
            
            for (let contador = contInicial; contador <= contFinal; contador++) {
                resultado = contador * cont
                console.log(`${cont} X ${contador} = ${resultado}`);
                
            }
        }
    }
    return status;
}

module.exports = {
    calculoTabuada
}