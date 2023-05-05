/*********************************************************************************************************************
 *  Objetivo: Arquivo responsavel por padronizar as mensagens de ERRO, SUCESSO, FUNÇÕES, VARIAVEIS... para o projeto
 *  Data: 28/04/2023
 *  Autor: Muryllo
 *  Versão: 1.0
 *********************************************************************************************************************/ 

/************************************ MENSAGENS DE ERRO **********************************************************/
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno de servidor, não foi possível processar a requisição'}

const ERROR_INVALID_ID = {status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado'}

const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de mídia (Content-type) da solicitação não é compatível com o servidor. Tipo aceito: [application/json]'} 

/************************************ MENSAGENS DE SUCESSO **********************************************************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso'}

const SUCCESS_UPDATING_ITEM = {status: 200, message: 'Item atualizado com sucesso'}

const SUCCESS_DELETE_ITEM = {status: 200, message: 'Item deletado com sucesso'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    SUCCESS_UPDATING_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    SUCCESS_DELETE_ITEM,
}

