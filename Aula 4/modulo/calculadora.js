/*********************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Muryllo
 * Data: 03/02/2023
 * Versão: 1.0
 ********************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)

//Forma 1 de criar uma função (metodo mais tradicional)
// function calculadora(numero1, numero2, tipoCalculo) {


//         let valor1 = Number(numero1);
//         let valor2 = Number(numero2);
//         let operacao = tipoCalculo.toUpperCase();
//         let resultado;
//         let status = true;

//         if (operacao == 'SOMAR') {
//             resultado = valor1 + valor2;

//         } else if (operacao == 'SUBTRAIR') {
//             resultado = valor1 - valor2;

//         } else if (operacao == 'MULTIPLICAR') {
//             resultado = valor1 * valor2;

//         } else if (operacao == 'DIVIDIR') {
//             resultado = valor1 / valor2;

//             if (valor2 == 0) {
//                 console.log('ERRO: Impossivel fazer divisão por 0')
//                 status = false;
//             } else {
//                 resultado = valor1 / valor2
//             }
//         } else {
//             console.log('ERRO: A sua escolha de operação não é válida');
//             status = false;
//         }
//         //Validação para tratar quando a variavel resultado não for processada por algum problema
//         if (resultado == undefined || status == false) {
//             return false;
//         } else {
//             return resultado;
//         }
//     }

//Forma 2 de criar uma função (metodo mais utilizado por programadores (JS))
const calculadora = function (numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2;

    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2;

    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2;

    // } else if (operacao == 'DIVIDIR') {
    //     resultado = valor1 / valor2;

    //     if (valor2 == 0) {
    //         console.log('ERRO: Impossivel fazer divisão por 0')
    //         status = false;
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('ERRO: A sua escolha de operação não é válida');
    //     status = false;
    // }

    switch (operacao) {
        case 'SOMAR':
            resultado = somar(valor1, valor2);
            break;
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2);
            break;
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2);
            break;
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('ERRO: Impossivel fazer divisão por 0')
                status = false;
            } else {
                resultado = dividir(valor1, valor2);
            }
            break;
        //Permite entrar nesta opção, sempre que nenhum dos cases for válido
        //(como se fosse o ultimo ELSE de uma estrutura de IF)
        default:
            console.log('ERRO: A sua escolha de operação não é válida');
            status = false;
    }

    //Validação para tratar quando a variavel resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false;
    } else {
        return resultado.toFixed(2);
    }
}

//Forma 3 de criar uma função(Modelo Arrow Function (JS))
const somar       = (valor1, valor2) => Number(valor1) + Number(valor2);
const subtrair    = (valor1, valor2) => Number(valor1) - Number(valor2);
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2);
const dividir     = (valor1, valor2) => Number(valor1) / Number(valor2);

//Permite adicionar um function no escopo global (public)
//AS functions que não estiverem no exports, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora,

}

