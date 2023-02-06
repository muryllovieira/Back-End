/*********************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada
 * Autor: Muryllo
 * Data: 06/02/2023
 * Versão: 1.0
 ********************************************************/

//função que gera uma tabuada até um contador específico
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let tabuadaContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let resultado;
    let contador = 0;

    if (tabuada == 0 || tabuadaContador == 0) {
        status == false;
    } else if (isNaN(tabuada) || isNaN(tabuadaContador)) {
        status = false;
    }
    // else {

    //     // while (contador <= tabuadaContador) {
    //     //     // 2 x 0 = 0
    //     //     resultado = tabuada * contador;
    //     //     console.log(tabuada + ' x ' + contador + ' = ' + resultado);

    //     //     contador++;
    //     // }
        for (let contador = 0; contador <= tabuadaContador; contador++) {
            resultado = tabuada * contador;
            console.log(`${tabuada} x ${contador} = ${resultado}`);
        }
};

getTabuada(1.5,10)

module.exports = {
    getTabuada,
}