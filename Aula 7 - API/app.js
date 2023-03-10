/**************************************************************************
 *  Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 *  Autor: Muryllo
 *  Data: 10/03/2023
 *  Versão: 1.0
 ***************************************************************************/

/**
 * Express - dependencia para realizar requisições de API pelo protocolo HTTP 
 *      npm install express --save
 * 
 *  Cors - dependencia para gerenciar permissões de requisição da API
 *      npm install cors --save
 * 
 *  Body-Parser - dependencia que gerencia o corpo das resquisições 
 *      npm install body-parser --save
 */

//Import das dependencias do projeto

//Dependencia para criar as requisições de API
const express = require('express');
//Dependencia para gerenciar as permissões da API
const cors = require('cors');
//Dependencia para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser');

//Cria um objeto com as caracteristicas do express
const app = express();

app.use((request, response, next) => {
    //API publica - fica disponivel para utilização de qualquer aplicação
    //API privada - fica disponivel somente para o IP informado poder consumir dados da API
    //Define se a API é publica ou privada
    response.header('Access-Control-Allow-Origin', '*');

    //Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Envia para o cors() as regras de permissões
    app.use(cors());

    next();
})

    //EndPoints
    //async - estabalece um status de aguarde, assim que eu processar te devolvo os dados
        //Obs: se não usar o async a requisição é perdida, pois o front acha que a API esta fora do ar

    //EndPoint para listar todos os estados
    app.get('/estados', cors(), async function (request, response, next) {
        const estadosCidades = require('./modulo/estados_cidades.js');
        let estados = estadosCidades.getListaDeEstados();

        response.status(200);
        response.json(estados);
    })

    app.listen(8080, function () {
        console.log('Servidor aguardando requisições na porta 8080.');
    })