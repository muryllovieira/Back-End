/*********************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Muryllo
 * Data: 03/02/2023
 * Versão: 1.0
 ********************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {
        resultado = valor1 / valor2;

        if (valor2 == 0) {
            console.log('ERRO: Impossivel fazer divisão por 0')
        } else {
            resultado = valor1 / valor2
        }
    } else {
        console.log('ERRO: A sua escolha de operação não é válida');
        entradaDados.close();
    }
    //Validação para tratar quando a variavel resultado não for processada por algum problema
    if (resultado == undefined) {
        return false;
    } else {
        return resultado;
    }
}

//Permite adicionar um function no escopo global (public)
//AS functions que não estiverem no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora,

}

