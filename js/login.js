document.getElementById('loginBtn').addEventListener('click', function() {
    // Array de usuários com nome e senha
    const users = [
        { username: 'duda', password: 'duda' },
        { username: 'admin', password: 'admin' },
        { username: 'aluno2', password: 'abcdef' },
        { username: 'aluno3', password: '7891011' },
        { username: 'aluno4', password: 'senha123' }
    ];

    // Pega o valor dos campos de entrada
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verifica se as credenciais correspondem a algum dos usuários no array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Login correto, redireciona para a página de matérias
        window.location.href = 'material.html'; // Substitua pelo nome da sua página de matérias
    } else {
        // Mostra uma mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
});
