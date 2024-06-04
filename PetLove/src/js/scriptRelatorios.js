/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Funções para gerar os diferentes tipos de relatórios
function gerarRelatorioVendas() {
    // Simulação de requisição AJAX para buscar dados de vendas do back-end
    const dadosVendas = [
        { idVenda: 1, data: '2024-06-02', cliente: 'João Silva', produto: 'Ração Premium Gato', valorTotal: 50.00 },
        { idVenda: 2, data: '2024-06-03', cliente: 'Maria Oliveira', produto: 'Brinquedo Mordedor Cachorro', valorTotal: 25.00 }
    ];

    // Formata e exibe os dados do relatório de vendas na página
    const visualizadorRelatorio = document.getElementById('visualizadorRelatorio');
    visualizadorRelatorio.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos dados

    const tabelaVendas = document.createElement('table');
    const thead = tabelaVendas.insertRow();
    thead.insertCell().textContent = 'ID Venda';
    thead.insertCell().textContent = 'Data';
    thead.insertCell().textContent = 'Cliente';
    thead.insertCell().textContent = 'Produto';
    thead.insertCell().textContent = 'Valor Total';

    dadosVendas.forEach(venda => {
        const linha = tabelaVendas.insertRow();
        linha.insertCell().textContent = venda.idVenda;
        linha.insertCell().textContent = venda.data;
        linha.insertCell().textContent = venda.cliente;
        linha.insertCell().textContent = venda.produto;
        linha.insertCell().textContent = venda.valorTotal.toFixed(2);
    });

    visualizadorRelatorio.appendChild(tabelaVendas);
}

function gerarRelatorioEstoque() {
    // Simulação de requisição AJAX para buscar dados de estoque do back-end
    const dadosEstoque = [
        { idProduto: 1, nome: 'Ração Premium Gato', estoque: 10, alertaEstoqueBaixo: 5, quantidadeMinima: 15 },
        { idProduto: 2, nome: 'Brinquedo Mordedor Cachorro', estoque: 20, alertaEstoqueBaixo: 10, quantidadeMinima: 25 },
        // ...
    ];

    // Formata e exibe os dados do relatório de estoque na página
    const visualizadorRelatorio = document.getElementById('visualizadorRelatorio');
    visualizadorRelatorio.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos dados

    const tabelaEstoque = document.createElement('table');
    const thead = tabelaEstoque.insertRow();
    thead.insertCell().textContent = 'ID Produto';
    thead.insertCell().textContent = 'Nome';
    thead.insertCell().textContent = 'Estoque Atual';
    thead.insertCell().textContent = 'Alerta Estoque Baixo';
    thead.insertCell().textContent = 'Quantidade Mínima';

    dadosEstoque.forEach(produto => {
        const linha = tabelaEstoque.insertRow();
        linha.insertCell().textContent = produto.idProduto;
        linha.insertCell().textContent = produto.nome;
        linha.insertCell().textContent = produto.estoque;
        linha.insertCell().textContent = (produto.estoque <= produto.alertaEstoqueBaixo) ? 'Sim' : 'Não';
        linha.insertCell().textContent = produto.quantidadeMinima;
    });

    visualizadorRelatorio.appendChild(tabelaEstoque);
}

function gerarRelatorioClientes() {
    // Simulação de requisição AJAX para buscar dados de clientes do back-end
    const dadosClientes = [
        { idCliente: 1, nome: 'João Silva', email: 'joaosilva@email.com', telefone: '(11) 9999-9999' },
        { idCliente: 2, nome: 'Maria Oliveira', email: 'mariaoliveira@email.com', telefone: '(12) 8888-8888' },
        // ...
    ];

    // Formata e exibe os dados do relatório de clientes na página
    const visualizadorRelatorio = document.getElementById('visualizadorRelatorio');
    visualizadorRelatorio.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos dados

    const tabelaClientes = document.createElement('table');
    const thead = tabelaClientes.insertRow();
    thead.insertCell().textContent = 'ID Cliente';
    thead.insertCell().textContent = 'Nome';
    thead.insertCell().textContent = 'Email';
    thead.insertCell().textContent = 'Telefone';

    dadosClientes.forEach(cliente => {
        const linha = tabelaClientes.insertRow();
        linha.insertCell().textContent = cliente.idCliente;
        linha.insertCell().textContent = cliente.nome;
        linha.insertCell().textContent = cliente.email;
        linha.insertCell().textContent = cliente.telefone;
    });

    visualizadorRelatorio.appendChild(tabelaClientes);
}