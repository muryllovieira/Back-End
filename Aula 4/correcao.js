/****************************************************
 * Objetivo: Correção da atividade
 * Autor: Muryllo
 * Data: 03/02/2023
 * Versão: 1.1
 ***************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')

var readLine = require('readline');

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor: \n', function (numero1) {

    let valor1 = numero1

    entradaDados.question('Valor2: \n', function (numero2) {

        let valor2 = numero2;

        entradaDados.question('Escolha uma operação matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function (tipoCalculo) {

            let operacao = tipoCalculo.toUpperCase();

            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular se algum dado tiver em branco');

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números');

            } else {
                // toUpperCase - converte uma string em MAIUSCULO
                // toUpperCase - converte uma string em minusculo

                resultado = matematica.calculadora(valor1, valor2, operacao) != false
                if (resultado != false) {
                    console.log(resultado);
                } else {
                    entradaDados.close();
                }
            }

        });
    });
});
//typeof() - identifica o tipo de dados de um elemento
//isNaN - identifica o tipo de conteúdo independente do tipo de dados

//ALGUNS EXEMPLOS DE METODOS IMPORTANTES DA CLASSE STRING
//replace, substring, length, upercase, lowercase, indexof, trim