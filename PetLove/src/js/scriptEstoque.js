/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* global produtos */

// Funções para buscar produtos e fornecedores via AJAX
function buscarProdutos() {
    // Simulação de requisição AJAX para buscar produtos do back-end
    const produtos = [
        { id: 1, nome: "Ração Premium Gato", estoque: 10, alertaEstoqueBaixo: 5, quantidadeMinima: 15 },
        { id: 2, nome: "Brinquedo Mordedor Cachorro", estoque: 20, alertaEstoqueBaixo: 10, quantidadeMinima: 25 },
        // ...
    ];

    // Popula a tabela de produtos na página
    const tabelaProdutos = document.querySelector('section#listaProdutos table tbody');
    tabelaProdutos.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    produtos.forEach(produto => {
        const linha = tabelaProdutos.insertRow();
        const idCelula = linha.insertCell();
        const nomeCelula = linha.insertCell();
        const estoqueCelula = linha.insertCell();
        const alertaCelula = linha.insertCell();
        const quantidadeMinimaCelula = linha.insertCell();
        const acoesCelula = linha.insertCell();

        idCelula.textContent = produto.id;
        nomeCelula.textContent = produto.nome;
        estoqueCelula.textContent = produto.estoque;
        alertaCelula.textContent = (produto.estoque <= produto.alertaEstoqueBaixo) ? 'Sim' : 'Não';
        quantidadeMinimaCelula.textContent = produto.quantidadeMinima;

        const acoesBotao = document.createElement('button');
        acoesBotao.textContent = 'Gerenciar';
        acoesBotao.addEventListener('click', () => abrirModalNovoPedido(produto.id));
        acoesCelula.appendChild(acoesBotao);
    });
}

function buscarFornecedores() {
    // Simulação de requisição AJAX para buscar fornecedores do back-end
    const fornecedores = [
        { id: 1, nome: "Fornecedor A" },
        { id: 2, nome: "Fornecedor B" }
        // ...
    ];

    // Popula o select de fornecedores no modal de novo pedido
    const fornecedorSelect = document.getElementById('fornecedor');
    fornecedorSelect.innerHTML = ''; // Limpa o select antes de adicionar novas opções

    fornecedores.forEach(fornecedor => {
        const option = document.createElement('option');
        option.value = fornecedor.id;
        option.textContent = fornecedor.nome;
        fornecedorSelect.appendChild(option);
    });
}

function abrirModalNovoPedido(produtoId) {
    const modal = document.getElementById('modalNovoPedido');
    modal.style.display = 'block';

    // Preenche os campos do modal com base no produto selecionado
    const produto = produtos.find(p => p.id === produtoId);
    document.getElementById('produto').value = produto.id;
    document.getElementById('quantidade').value = ''; // Limpa o campo de quantidade

    // Limpa o formulário do modal caso já tenha sido usado anteriormente
    const formNovoPedido = document.getElementById('formNovoPedido');
    formNovoPedido.reset();
}

function fecharModalNovoPedido() {
    const modal = document.getElementById('modalNovoPedido');
    modal.style.display = 'none';
}

formNovoPedido.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const fornecedorId = document.getElementById('fornecedor').value;
    const produtoId = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    // Validações básicas (implemente validações mais robustas em um projeto real)
    if (fornecedorId === '' || produtoId === '' || quantidade <= 0) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Simulação de registro do novo pedido no back-end (substitua por requisição AJAX)
    console.log('Novo pedido registrado:', {
        fornecedorId: fornecedorId,
        produtoId: produtoId,
        quantidade: quantidade
    });

    // Atualiza a tabela de produtos na página (simulação)
    const produto = produtos.find(p => p.id === produtoId);
    produto.estoque += quantidade; // Atualiza o estoque do produto na memória

    buscarProdutos(); // Recarrega a tabela de produtos com os dados atualizados

    // Fecha o modal de novo pedido
    fecharModalNovoPedido();
});