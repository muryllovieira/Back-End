/******************************************************
 *  Objetivo: Utilizar códigos e métodos de array
 *  Data: 24/02/2023
 *  Autor: Muryllo
 *  Versão: 1.0
******************************************************/

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON

const listaNomes = ['José', 'Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];

const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória'];

/***************************************************
 *  JSON é composto por: chabe (atributo) e valor
 *   
 *   Chave   Valor   Chave        Valor     Chave       Valor
 *  {nome : 'José', celular : '1197777777', email : 'jose@gmail.com'}
 * 
 *************************************************/


const exibindoDados = function () {

    // Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes));

    // Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]));

    // Exibe o conteudo de um indice
    console.log(listaNomes[0]);

    // Exibe todos os itens do array
    console.log(listaNomes);

    // table - permite visualizar o conteudo do array em formato de tabela
    console.table(listaNomes)

    console.log('O nome do aluno é: ' + listaNomes[0]);
    console.log(`O nome do aluno é: ${listaNomes[1]}`);

    // length - retorna a quantidade de itens do array
    console.log(listaNomes.length);

    // Percorrendo uma array com while
    console.log('\nExemplo com while');
    let i = 0;
    let qtdeItens = listaNomes.length
    while (i < qtdeItens) {
        console.log('O nome do aluno é: ' + listaNomes[i]);
        i++;
    }

    // Percorrendo uma array com for
    console.log('\nExemplo com for');
    for (let i = 0; i < qtdeItens; i++) {
        console.log('O nome do aluno é: ' + listaNomes[i]);
    }

    // Percorrendo uma array com foreach
    console.log('\nExemplo com foreach');
    listaNomes.forEach(function (nome) {
        console.log('O nome do aluno é: ' + nome);
    });

    // Percorrendo uma array com for in
    console.log('\nExemplo com for in');
    for (let i in listaNomes) {
        console.log('O nome do aluno é: ' + listaNomes[i]);
    }
};

const manipulandoDados = function () {
    //push - Adiciona novos itens no final do Array, preservando os elementos anteriores
    listaProdutos.push('Memória');
    listaProdutos.push('WebCam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa-Mãe', 'SSD');
    console.table(listaProdutos)

    //pop - Remove o último item do Array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - Remove o primeiro item do Array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.log(listaProdutos)

    //indexOf - Permite buscar dentro de um array um item
    // Se o retorno for -1, o item NÃO foi encontrado
    // Se o retono for maior ou igual a O, o item foi encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('PC'));

    //Exemplo de utilização de IndexOf
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('Item encontrado');
    } else {
        console.log('Item não encontrado');
    }


};

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto;
    let indice = listaProdutos.indexOf(nome);
    let status;

    //splice - Permite apagar um ou mais itens de um array através do indice
    // Se for encaminhado somente o indice ele irá apagar todos os itens
    // para baixo
    // Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1);
        status = true;
    } else {
        status = false
    }

    return status;
}

const removerItem = function (array, nomeItem) {
    //Entrada
    let nome = nomeItem;
    let novoArray = array.slice()
    let indice = novoArray.indexOf(nome);
    let status;

    console.log(listaProdutos);

    //Processamento da função
    if (indice >= 0) {
        novoArray.splice(indice, 1)
        status = true;
    } else {
        status = false;
    }
    //Saída
    if (status)
        return novoArray;
    else
        return false

};

const listagemProdutos = function () {

    //Forma 1 de criar um JSON e já atribuir chaves e valores
    //let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes};

    //Forma 2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSON = {};

    // listProdutosJSON.produtos = listaProdutos;
    // listProdutosJSON.clientes = listaNomes;

    // //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON);
    // console.log(listProdutosJSON.produtos[1]);
    // console.log(listProdutosJSON.clientes[5]);

    let listProdutosJSON = {}
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            //descricao : 'Monitor DELL ...', 
            codigo: 1
        },
        {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1300,
            //descricao : 'Monitor DELL ...', 
            codigo: 2
        },
        {
            nome: 'Teclado',
            quantidade: 800,
            marca: 'DELL',
            valor: 200,
            //descricao : 'Monitor DELL ...', 
            codigo: 3
        },
        {
            nome: 'Teclado',
            quantidade: 360,
            marca: 'LG',
            valor: 230,
            //descricao : 'Monitor DELL ...', 
            codigo: 4
        },
        {
            nome: 'Teclado',
            quantidade: 80,
            marca: 'Logitech',
            valor: 120,
            //descricao : 'Monitor DELL ...', 
            codigo: 5
        },
        {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'Razer',
            valor: 1230,
            //descricao : 'Monitor DELL ...', 
            codigo: 6
        },
        {
            nome: 'Mouse',
            quantidade: 790,
            marca: 'DELL',
            valor: 115,
            //descricao : 'Monitor DELL ...', 
            codigo: 7
        },
        {
            nome: 'Mouse',
            quantidade: 25,
            marca: 'Razer',
            valor: 800,
            //descricao : 'Monitor DELL ...', 
            codigo: 8
        }]
    // Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza'];
    let listCoresLgArray = ['Preto', 'Cinza'];
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul'];
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo'];

    // Arrays para modelo
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4k', 'IPS']
    let listModelosTeclado = ['Mecanico', 'Semi-Mecanico', 'Membrana', 'Optico']

    // Adiciona o array de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray;

    // Adicionar cores ao monitor DELL
    listProdutosJSON.produtos[0].cores = listCoresDellArray;

    // Adicionar cores ao monitor LG
    listProdutosJSON.produtos[1].cores = listCoresLgArray;

    // Adicionar cores ao Teclado Dell
    listProdutosJSON.produtos[2].cores = listCoresDellArray;

    // Adicionar cores ao Teclado LG
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray;

    // Adicionar cores ao Teclado Logitech
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray;

    // Adicionar cores ao Teclado Razer
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray;

    // Adicionar cores ao Mouse Dell
    listProdutosJSON.produtos[6].cores = listCoresDellArray;

    // Adicionar cores ao Mouse Razer
    listProdutosJSON.produtos[7].cores = listCoresMouseArray;

    // Adicionar modelos aos Monitores
    listProdutosJSON.produtos[0].modelos = listModelosMonitor;
    listProdutosJSON.produtos[1].modelos = listModelosMonitor;

    // Adicionar modelos aos Teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclado;
    listProdutosJSON.produtos[3].modelos = listModelosTeclado;
    listProdutosJSON.produtos[4].modelos = listModelosTeclado;
    listProdutosJSON.produtos[5].modelos = listModelosTeclado;

    // console.log(listProdutosJSON); 
    // console.log('Nome: '+ listProdutosJSON.produtos[1].nome);
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca);
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor);
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1]);
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[1]);

    //Percorre o array de produtos para listar os itens
    listProdutosJSON.produtos.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome);
        console.log('Marca: ' + itemProduto.marca);
        console.log('Valor: ' + itemProduto.valor);

        //Percorre o array de cores que está dentro do array de produtos(item)
        if (typeof (itemProduto.cores) != 'undefined') {
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cor: ' + itemCor);
            })
        }

        if (typeof (itemProduto.modelos) != 'undefined') {
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelo: ' + itemModelo);
            })
        }

        console.log('-------------------------');
    });




    // for (let cont in listProdutosJSON.produtos) {
    //     console.log('Nome do Produto: ' + listProdutosJSON.produtos[cont].nome);
    //     console.log('Marca: ' + listProdutosJSON.produtos[cont].marca);
    //     console.log('Valor: ' + listProdutosJSON.produtos[cont].valor);

    //     for (let i in listProdutosJSON.produtos[cont].cores){
    //         console.log('Cores: ' + listProdutosJSON.produtos[cont].cores[i]);

    //     }

    //     for (let contModelo in listProdutosJSON.produtos[cont].modelos){
    //         console.log('Modelos: ' + listProdutosJSON.produtos[cont].modelos[contModelo]);
    //     }

    //     console.log('-------------------------');
    // }
    //nome,marca,valor,cores,modelos

};

listagemProdutos()

//console.log(removerItem(listaProdutos, 'Monitor'));
//console.table(listaProdutos)
// console.log(removerProduto('Monitor'));
// console.table(listaProdutos)


//manipulandoDados();