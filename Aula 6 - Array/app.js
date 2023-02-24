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

const manipulandoDados = function (){
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

const removerProduto = function (nomeProduto){
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

const desafio = function (array, novoItem) {

    let nome = novoItem;
    let novoArray = array.slice()
    let indice = listaProdutos.indexOf(nome);
    let status;

    console.log(listaProdutos);
    

    if (indice >= 0) {
        novosProdutos.splice(indice, 1)
        status = true;
    } else {
        status = false;
    }

    if (status) {
        return novoArray;
    }
    else{
        return false
    }
}

console.log(removerProduto(listaProdutos, 'Monitor')); 
console.table(listaProdutos)
// console.log(removerProduto('Monitor'));
// console.table(listaProdutos)


//manipulandoDados();