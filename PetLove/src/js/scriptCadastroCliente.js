/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const formCliente = document.getElementById('formCliente');

formCliente.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const animais = document.getElementById('animais').selectedOptions; // Array de animais selecionados

    // Validações básicas
    if (nome === '' || endereco === '' || telefone === '' || email === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Simulação de envio de dados para o back-end
    const dadosCliente = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        email: email,
        animais: Array.from(animais).map(opcao => opcao.value) // Converte para array de strings
    };

    console.log('Dados do cliente:', dadosCliente); // Exibe no console

    // Limpa o formulário após o cadastro
    formCliente.reset();
});