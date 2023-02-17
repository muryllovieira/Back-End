/*************************************
 * Objetivo: Exercicio 3 de Par ou Impar
 * Autor: Muryllo
 * Data: 17/02/2023
 * Versão: 1.0
 *************************************/

var parImpar = require('./modulo/parImpar.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número inicial: ', function(numeroInicial){
    let numeroInicio = numeroInicial; 

    entradaDados.question('Digite o número final: ', function(numeroFim) {
        let numeroFinal = numeroFim;

        console.log('1 - PAR');
        console.log('2 - IMPAR');
        console.log('3 - PAR E IMPAR');
        entradaDados.question('Digite a sua escolha: ', function(escolha){
            let escolhaUsuario = escolha;

            let resultado = parImpar.parImpar(numeroInicio, numeroFinal, escolhaUsuario)
        })
    })
})
