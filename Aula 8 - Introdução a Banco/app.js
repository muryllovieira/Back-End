/**************************************************************************************
 *  Objetivo: API para integração entre back e banco de dados (GET, POST, PUT, DELETE)
 *  Autor: Muryllo
 *  Data: 14/04/2023
 *  Versão: 1.0
 **************************************************************************************/

/**
 * Express - dependencia para realizar requisições de API pelo protocolo HTTP 
 *      npm install express --save
 * 
 *  Cors - dependencia para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 *  Body-Parser - dependencia que gerencia o corpo das resquisições 
 *      npm install body-parser --save
 **/

//Dependencia para criar as requisições de API
const express = require('express');

//Dependencia para gerenciar as permissões da API
const cors = require('cors');

//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');
const { request, response } = require('express');

//Cria o objeto app conforme a classe do express
const app = express()

app.use((request, response, next) => {
    //Define quem poderá acessar a API (* - Todos)
    response.header('Acess-Control-Allow-Origin', '*');
    //Define quais metodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as permissões ao cors
    app.use(cors());

    next();
});

//CRUD (Create, Read, Update e Delete)

/************************************ 
* Objetivo: API de controle de ALUNOS
* Data: 14/04/2023
* Autor: Muryllo
* Versão: 1.0
***********************************/


    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response){

    })

    //EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    //EndPoint: Insere um dado novo 
    app.post('/v1/lion-school/aluno', cors(), async function(request, response){

    })

    //EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    //EndPoint: Exclui um aluno, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    })

    app.listen(8080, function () {
        console.log('Servidor aguardando requisições na porta 8080.');
    })