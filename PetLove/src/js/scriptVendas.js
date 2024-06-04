/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* global formVenda */

// Funções para buscar clientes e produtos via AJAX
function buscarClientes() {
    // Simulação de requisição AJAX para buscar clientes do back-end
    const clientes = [
        { id: 1, nome: "João Silva" },
        { id: 2, nome: "Maria Oliveira" },
        // ...
    ];

    // Popula o select de clientes na página
    const clienteSelect = document.getElementById('cliente');
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = cliente.nome;
        clienteSelect.appendChild(option);
    });
}

function buscarProdutos() {
    // Simulação de requisição AJAX para buscar produtos do back-end
    const produtos = [
        { id: 1, nome: "Ração Premium Gato", preco: 50.00 },
        { id: 2, nome: "Brinquedo Mordedor Cachorro", preco: 25.00 },
        // ...
    ];

    // Popula o select de produtos na página
    const produtoSelect = document.getElementById('produto');
    produtos.forEach(produto => {
        const option = document.createElement('option');
        option.value = produto.id;
        option.textContent = produto.nome;
        produtoSelect.appendChild(option);
    });
}

formVenda.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const clienteId = document.getElementById('cliente').value;
    const produtoId = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const metodoPagamento = document.getElementById('metodoPagamento').value;

    // Validações básicas (implemente validações mais robustas em um projeto real)
    if (clienteId === '' || produtoId === '' || quantidade <= 0 || metodoPagamento === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Simulação de cálculo do valor total da venda
    const produto = produtos.find(p => p.id === produtoId);
    const valorTotal = quantidade * produto.preco;

    // Simulação de registro da venda no back-end (substitua por requisição AJAX)
    console.log('Venda registrada:', {
        clienteId: clienteId,
        produtoId: produtoId,
        quantidade: quantidade,
        metodoPagamento: metodoPagamento,
        valorTotal: valorTotal
    });

    // Simulação de atualização do histórico de vendas na tabela
    const tabelaVendas = document.getElementById('tabelaVendas');
    const tbody = tabelaVendas.querySelector('tbody');

    const novaLinha = tbody.insertRow();
    const dataCelula = novaLinha.insertCell();
    const clienteCelula = novaLinha.insertCell();
    const produtoCelula = novaLinha.insertCell();
    const quantidadeCelula = novaLinha.insertCell();
    const valorTotalCelula = novaLinha.insertCell();
    const metodoPagamentoCelula = novaLinha.insertCell();

    dataCelula.textContent = new Date().toLocaleDateString();
    clienteCelula.textContent = clientes.find(c => c.id === clienteId).nome;
    produtoCelula.textContent = produtos.find(p => p.id === produtoId).nome;
    quantidadeCelula.textContent = quantidade;
    valorTotalCelula.textContent = valorTotal.toFixed(2);
    metodoPagamentoCelula.textContent = metodoPagamento;

    // Limpa o formulário após a venda
    formVenda.reset();
});