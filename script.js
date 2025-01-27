document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe os dados no console (pode ser substituído por uma requisição AJAX)
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    alert('Mensagem enviada com sucesso!');
});
