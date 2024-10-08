document.getElementById('loginBtn').addEventListener('click', function() {
    // Array de usuários com nome e senha
    const users = [
        { username: 'dzordi', password: 'dzordi2024' },
        { username: 'leomatos', password: 'branca123' },
        { username: 'maria', password: 'laranja123' },
        { username: 'felipe', password: 'pontaverde123' },
        { username: 'guifontella', password: 'amarela123' },
        { username: 'matheus', password: 'pontaverde123' },
        { username: 'mateus', password: 'laranja123' },
        { username: 'samuel', password: 'laranja123' },
        { username: 'belly', password: 'pontaverde123' },
        { username: 'davi', password: 'laranja123' },
        { username: 'chaveiro', password: 'laranja123' },
        { username: 'luiz', password: 'laranja123' },
        { username: 'yure', password: 'branca123' },
        { username: 'isaac', password: 'laranja123' },
        { username: 'bryan2', password: 'laranja123' },
        { username: 'alana', password: 'laranja123' },
        { username: 'lucasmagnus', password: 'laranja123' },
        { username: 'lucascardoso', password: 'pontaverde123' },
        { username: 'thalita', password: 'pontaverde123' },
        { username: 'arthur', password: 'pontaverde123' },
        { username: 'tiago', password: 'pontapreta123' },
        { username: 'pedro', password: 'pontaverde123' },
        { username: 'bryan', password: 'verde123' }
    ];

    // Pega o valor dos campos de entrada
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verifica se as credenciais correspondem a algum dos usuários no array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Salva o nome de usuário no LocalStorage
        localStorage.setItem('loggedInUser', username);

        // Redireciona para a página de matérias
        window.location.href = 'material.html'; // Substitua pelo nome da sua página de matérias
    } else {
        // Mostra uma mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
});

// Verifica se o usuário já está logado
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Se o usuário já estiver logado, redireciona para a página de matérias
        window.location.href = 'material.html'; // Substitua pelo nome da sua página de matérias
    }
};

document.getElementById('logoutBtn').addEventListener('click', function() {
    // Remove o nome de usuário do LocalStorage
    localStorage.removeItem('loggedInUser');

    // Redireciona para a página de login
    window.location.href = 'login.html'; // Substitua pelo nome da sua página de login
});
