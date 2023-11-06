document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Aqui você pode adicionar lógica para verificar o login e redirecionar o usuário
        // Exemplo simplificado:
        if (username === 'usuario' && password === 'senha') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
});
