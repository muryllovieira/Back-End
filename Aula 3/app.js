/****************************************************
 * Objetivo: Fazer uma calculadora com as 4 operações básicas
 * Autor: Muryllo
 * Data: 30/01/2023
 * Versão: 1.0
 ***************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite a operação que você deseja: \n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n', function (operacao) {
    //console.log(operacao)
    let operacaoDigitada = operacao;

    entradaDados.question('Digite o primeiro número da operação: ', function (numero1) {
        let numero1Digitado = numero1.replace(",", ".");

        entradaDados.question('Digite o segundo número da operação: ', function (numero2) {
            let numero2Digitado = numero2.replace(",", ".");

            //Validação para entrada vazia 
            if (numero1Digitado == '' || numero2Digitado == '') {

                console.log('ERRO: há espaços sem valor atribuidos.')

                //Validação para entrada de texto(inválida)    
            } else if (isNaN(numero1Digitado) || isNaN(numero2Digitado)) {

                console.log('ERRO: Digite um número válido')

            } else if (isNaN(operacao)) {

                console.log('ERRO: Você não escolheu uma operação válida')

            } else if (operacao > 4) {

                console.log('ERRO: Você não escolheu uma operação válida')

            } else if (operacao == 1) {
                soma = (Number(numero1Digitado) + Number(numero2Digitado))

                console.log(numero1Digitado, '+', numero2Digitado, '=', soma)

            } else if (operacao == 2) {
                subtracao = (Number(numero1Digitado) - Number(numero2Digitado))

                console.log(numero1Digitado, '-', numero2Digitado, '=', subtracao)
            } else if (operacao == 3) {
                multiplicacao = (Number(numero1Digitado) * Number(numero2Digitado))

                console.log(numero1Digitado, 'X', numero2Digitado, '=', multiplicacao)
            } else if (operacao == 4) {
                divisao = (Number(numero1Digitado) / Number(numero2Digitado))
                if (numero2Digitado == 0) {
                    console.log('ERRO: Impossivel fazer divisão com 0');
                } else { console.log(numero1Digitado, ':', numero2Digitado, '=', divisao) }

            }
        })

    })
})