/****************************************************
 * Objetivo: Exercicio 1 de calculos de média
 * Autor: Muryllo
 * Data: 10/02/2023
 * Versão: 1.0
 ***************************************************/

var calculoMedia = require('./modulo/exercicio1.js')
//import da biblioteca readline
var readline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função de callback para entrar com o nome do aluno
entradaDados.question('Digite o nome do aluno: \n', function (nome) {
    let nomeAluno = nome;

    entradaDados.question('Qual o sexo do aluno:\nMasculino ou Feminino \n', function (sexoAluno) {
        let sexoAl = sexoAluno.toUpperCase()

        entradaDados.question('Qual o nome do professor: \n', function (nomeProfessor) {
            let nomeProf = nomeProfessor

            entradaDados.question('Qual o sexo do professor:\nMasculino ou Feminino \n', function (sexoProfessor) {
                let sexoProf = sexoProfessor.toUpperCase()

                entradaDados.question('Qual o nome do curso: \n', function (curso) {
                    let nomeCurso = curso

                    entradaDados.question('Qual o nome da disciplina: \n', function (disciplina) {
                        let nomeDisciplina = disciplina

                        entradaDados.question('Digite a nota 1: \n', function (nota1) {
                            let valor1 = nota1;


                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let valor2 = nota2;


                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let valor3 = nota3;


                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let valor4 = nota4;
                                        let media;

                                        media = calculoMedia.calculoMedia(valor1, valor2, valor3, valor4)

                                    })
                                })
                            })
                        })
                    });
                });
            });
        });
    });
});