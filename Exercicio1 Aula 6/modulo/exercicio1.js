const calculoMedia = function (valor1, valor2, valor3, valor4) {

    media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;

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
            console.log('Status do Aluno: Reprovado')
        } else if (media >= 50 && media <= 69) {
            exame()
            console.log('Exame');
            
        } else if (media >= 70) {
            console.log('Status do Aluno: Aprovado')
        }
    }
}

const exame = function (calculoMedia, notaExame) {
    
    let exame = (calculoMedia + notaExame) / 2

    if (exame >= 60) {
        console.log('Com a nota do exame - APROVADO');
    } else if (exame <= 59){
        console.log('Com a nota do exame - REPROVADO');
    }

}
//
exame(100,20)
module.exports = {
    calculoMedia,
    exame
}