/**************************************************************************************
 *  Objetivo: Responsavel pela regra de negocio referente ao CRUD de ALUNOS
 *  Autor: Muryllo
 *  Data: 14/04/2023
 *  Versão: 1.0
 **************************************************************************************/

//Import do arquivo de configuração das variaveis, constantes e funções globais
var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

    //Inserir um novo aluno
    const inserirAluno = async function (dadosAluno) {

        let resultDadosAluno;

        if(dadosAluno.nome == ''             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100 ||
            dadosAluno.rg == ''              || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15 ||
            dadosAluno.cpf == ''             || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18 ||
            dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
            dadosAluno.email == ''           || dadosAluno.email == undefined           || dadosAluno.email.length > 255
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
            //Envia os dados para a model inserir no Banco de Dados
            resultDadosAluno = await alunoDAO.insertAluno(dadosAluno);

            //Valida de o banco de dados inseriu corretamente os dados
            if (resultDadosAluno) {

                //Chama a função que vai encontrar o ID gerado após o insert
                let novoAluno = await alunoDAO.selectLastId();

                let dadosAlunosJSON = {};
                dadosAlunosJSON.status = message.SUCCESS_CREATED_ITEM.status;
                dadosAlunosJSON.aluno = novoAluno;
                return dadosAlunosJSON
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        }
    }

    //Atualizar um aluno existente 
    const atualizarAluno = async function (dadosAluno, idAluno) {

        if(dadosAluno.nome == ''             || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100 ||
            dadosAluno.rg == ''              || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15 ||
            dadosAluno.cpf == ''             || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18 ||
            dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
            dadosAluno.email == ''           || dadosAluno.email == undefined           || dadosAluno.email.length > 255
        ){
            return message.ERROR_REQUIRED_FIELDS
        //Validaçaõ do ID incorreto ou não informado
        } else if(idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
            return message.ERROR_INVALID_ID
        } else {
            //Adiciona o ID do aluno no JSON dos dados
            dadosAluno.id = idAluno

            let statusID = await alunoDAO.selectByIdAluno(idAluno);

            if (statusID) {
                let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno);

                if (resultDadosAluno) {
                    
                    let dadosAlunosJSON = {};
                    dadosAlunosJSON.status = message.SUCCESS_UPDATING_ITEM.status;
                    dadosAlunosJSON.message = message.SUCCESS_UPDATING_ITEM.message;
                    dadosAlunosJSON.aluno = dadosAluno;

                    return dadosAlunosJSON
                } else {
                    return message.ERROR_INTERNAL_SERVER
                }
            } else {
                return message.ERROR_NOT_FOUND;
            }

           
        }

    }

    //Excluir um aluno existente
    const deletarAluno = async function (id) {

        let buscarAlunoID = await getBuscarAlunoID(id)

        if (buscarAlunoID) {
            // Validação de IF incorreto ou não informado
            if (id == '' || id == undefined || isNaN(id)) {
                return message.ERROR_INVALID_ID
            } else {
                // Encaminha os dados para a model do aluno
                let resultDadosAluno = await alunoDAO.deleteAluno(id)

                if (resultDadosAluno) {
                    return message.SUCCESS_DELETE_ITEM
                } else {
                    return message.ERROR_INTERNAL_SERVER
                }
            }
        } else {
            return message.ERROR_INVALID_ID
        }
    }

    //Retorna a lista de todos os alunos
    const getAlunos = async function () {

        let dadosAlunosJSON = {}

        //Chama a função do arquivo DAO que irá retornar todos os registros do BD
        let dadosAluno = await alunoDAO.selectAllAlunos();

        if (dadosAluno) {
            //Criando um JSON com o atributo aluno, para encaminhar um array de alunos
            dadosAlunosJSON.status = message.SUCCESS_REQUEST.status;
            dadosAlunosJSON.message = message.SUCCESS_REQUEST.message;
            dadosAlunosJSON.quantidade = dadosAluno.length;
            dadosAlunosJSON.alunos = dadosAluno
            return dadosAlunosJSON
        } else {
            return message.ERROR_NOT_FOUND;
        }

    }

    //Retorna o aluno filtrando pelo ID
    const getBuscarAlunoID = async function (id) {

        let idNumero = id

        //Validação do ID
        if (idNumero == '' || id == undefined || isNaN(idNumero)) {
            return message.ERROR_INVALID_ID
        } else {
            let dadosAlunosJSON = {}

            let dadosAluno = await alunoDAO.selectByIdAluno(idNumero)
            
            if (dadosAluno) {
                //Criando um JSON com o atributo aluno, para encaminhar um array de alunos
                dadosAlunosJSON.status = message.SUCCESS_REQUEST.status;
                dadosAlunosJSON.message = message.SUCCESS_REQUEST.message;
                dadosAlunosJSON.alunos = dadosAluno
                return dadosAlunosJSON
            } else {
                return message.ERROR_NOT_FOUND;
            }
        }

        
    }

    //Retorna o aluno filtrando pelo nome
    const getBuscarAlunoNome = async function (nome) {

        let nomeAluno = nome

        let dadosAlunosJSON = {}

        let dadosAluno = await alunoDAO.selectByNameAluno(nomeAluno)
        
        if (dadosAluno){
            dadosAlunosJSON.aluno = dadosAluno
            return dadosAlunosJSON
        } else {
            return false;
        }
    }

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    getBuscarAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}

