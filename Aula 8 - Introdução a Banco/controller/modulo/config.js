/*********************************************************************************************************************
 *  Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, FUNÇÕES, VARIAVEIS... para o projeto
 *  Data: 28/04/2023
 *  Autor: Muryllo
 *  Versão: 1.0
 *********************************************************************************************************************/ 

/************************************ MENSAGENS DE ERRO **********************************************************/
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno de servidor, não foi possível processar a requisição'}

/************************************ MENSAGENS DE SUCESSO **********************************************************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
}

