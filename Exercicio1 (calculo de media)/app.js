/****************************************************
 * Objetivo: Exercicio 1 de calculos de média
 * Autor: Muryllo
 * Data: 10/02/2023
 * Versão: 1.0
 ***************************************************/

var calculoMedia = require('./modulo/exercicio1.js')
//import da biblioteca readline
var readline = require('readline');
const { exame } = require('./modulo/exercicio1.js');


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

                                        if (media >= 50 && media <= 69) {
                                            console.log('O aluno precisa fazer o exame');
                                            entradaDados.question('Digite a nota do exame: \n', function (notaExame) {

                                                let resultado = calculoMedia.exame(media, notaExame);

                                                if (resultado <= 59) {
                                                    console.log(`${calculoMedia.sexoAluno(sexoAl)} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${calculoMedia.sexoProfessor(sexoProf)} : ${nomeProfessor}`);
                                                    console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaExame}`);
                                                    console.log(`Média Final: ${media}`);
                                                    console.log(`Média do Exame: ${resultado}`);
                                                } else if (resultado >= 60) {
                                                    console.log(`${calculoMedia.sexoAluno(sexoAl)} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                                    console.log(`Curso: ${nomeCurso}`);
                                                    console.log(`${calculoMedia.sexoProfessor(sexoProf)} : ${nomeProfessor}`);
                                                    console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}, ${notaExame}`);
                                                    console.log(`Média Final: ${media}`);
                                                    console.log(`Média do Exame: ${resultado}`);
                                                }
                                            })

                                        }
                                        else if (media < 50) {
                                            console.log(`${calculoMedia.sexoAluno(sexoAl)} ${nomeAluno} foi REPROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${calculoMedia.sexoProfessor(sexoProf)} : ${nomeProfessor}`);
                                            console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                            console.log(`Média Final: ${media}`);
                                        } else if (media > 70) {
                                            console.log(`${calculoMedia.sexoAluno(sexoAl)} ${nomeAluno} foi APROVADO na disciplina ${nomeDisciplina}`);
                                            console.log(`Curso: ${nomeCurso}`);
                                            console.log(`${calculoMedia.sexoProfessor(sexoProf)} : ${nomeProfessor}`);
                                            console.log(`Notas do Aluno: ${valor1}, ${valor2}, ${valor3}, ${valor4}`);
                                            console.log(`Média Final: ${media}`);
                                        }
                                    })
                                })
                            })
                        });
                    });
                });
            });
        })
    })
})