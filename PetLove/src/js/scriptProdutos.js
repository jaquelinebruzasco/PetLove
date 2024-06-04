/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Simulação de consulta de produtos
const formProduto = document.getElementById('formProduto');

formProduto.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const estoque = parseInt(document.getElementById('estoque').value);
    const fornecedor = document.getElementById('fornecedor').value;
    const categoria = document.getElementById('categoria').value;

    // Validações básicas
    if (nome === '' || descricao === '' || preco <= 0 || estoque < 0 || fornecedor === '' || categoria === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Simulação de envio de dados para o back-end
    const dadosProduto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        fornecedor: fornecedor,
        categoria: categoria
    };

    console.log('Dados do produto:', dadosProduto); // Exibe no console

    // Limpa o formulário após o cadastro
    formProduto.reset();
});