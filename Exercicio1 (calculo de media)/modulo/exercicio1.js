const calculoMedia = function (valor1, valor2, valor3, valor4) {

    media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4;

    //Validação para entrada vazia 
    if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
        console.log('ERRO: há espaços sem valor atribuidos.')

        //Validação para entrada de texto(inválida)    
    } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {

        console.log('ERRO: Você não digitou um número')
        //Validação para entrada de número menor que 0(inválida)
    } else if (valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0) {

        console.log('ERRO: Nota menor que 0 não é válida')
        //Validação para entrada de número maior que 10(inválida)
    } else if (valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100) {

        console.log('ERRO: Nota maior que 100 não é válida')

    } else {
        console.log('Sua média foi:', media.toFixed(1));
        if (media < 50) {
            return media
        } else if (media >= 50 && media <= 69) {
            exame()
            return media
        } else if (media >= 70) {
            return media
        }
    }
}

const exame = function (calculoMedia, notaExame) {

    let exame = (parseFloat(calculoMedia) + parseFloat(notaExame)) / 2;
    
        if (exame >= 60) {
            //console.log('Com a nota do exame - APROVADO');
            return exame
        } else if (exame <= 59) {
            //console.log('Com a nota do exame - REPROVADO');
            return exame
        }
    }


const sexoAluno = function (sexoAl) {
    let generoAl = sexoAl;

    switch (generoAl) {
        case 'MASCULINO':
            generoAl = 'O aluno'
            break;

        case 'FEMININO':
            generoAl = 'A aluna'
            break;
    }
    return generoAl;
}

const sexoProfessor = function (sexoProf) {
    let generoProfessor = sexoProf;

    switch (generoProfessor) {
        case 'MASCULINO':
            generoProfessor = 'Professor'
            break;

        case 'FEMININO':
            generoProfessor = 'Professora'
            break;
    }
    return generoProfessor;
}

module.exports = {
    calculoMedia,
    exame,
    sexoAluno,
    sexoProfessor

}

