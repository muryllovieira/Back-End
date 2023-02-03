/****************************************************
 * Objetivo: Correção da atividade
 * Autor: Muryllo
 * Data: 03/02/2023
 * Versão: 1.1
 ***************************************************/

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
                
                if (operacao == 'SOMAR') {
                    resultado = Number(valor1) + Number(valor2);

                } else if (operacao == 'SUBTRAIR') {
                    resultado = Number(valor1) - Number(valor2);

                } else if (operacao == 'MULTIPLICAR') {
                    resultado = Number(valor1) * Number(valor2);

                } else if (operacao == 'DIVIDIR') {
                    resultado = Number(valor1) / Number(valor2);

                    if (valor2 == 0) {
                        console.log('ERRO: Impossivel fazer divisão por 0')
                    } else {
                        resultado = Number(valor1) / Number(valor2)
                    } 
                } else {
                    console.log('ERRO: A sua escolha de operação não é válida');
                    entradaDados.close();
                    }
                }

                //Validação para tratar quando a varavel resultado não for processada por algum problema
                if (resultado == undefined) {
                    console.log('ERRO: Não foi possível encontrar um valor válido');
                } else {
                    console.log(resultado)
                }
            }

        )
    })
})
//typeof() - identifica o tipo de dados de um elemento
//isNaN - identifica o tipo de conteúdo independente do tipo de dados

// ALGUNS EXEMPLOS DE METODOS IMPORTANTES DA CLASSE STRING
// replace, substring, length, upercase, lowercase, indexof, trim