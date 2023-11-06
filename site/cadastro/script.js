document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const fullName = registrationForm.querySelector('#fullName').value;
        const username = registrationForm.querySelector('#username').value;
        const email = registrationForm.querySelector('#email').value;
        const phone = registrationForm.querySelector('#phone').value;
        const city = registrationForm.querySelector('#city').value;
        const farmSize = registrationForm.querySelector('#farmSize').value;
        const password = registrationForm.querySelector('#password').value;
        
        const userData = {
            fullName,
            username,
            email,
            phone,
            city,
            farmSize,
            password
        };
        
        try {
            const response = await fetch('file:///C:/Users/diogo/OneDrive/%C3%81rea%20de%20Trabalho/site/inserir%20equipamento/index.htm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            
            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro ao cadastrar. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar. Tente novamente mais tarde.');
        }
    });
});

function togglePasswordVisibility() {
    const passwordInput = document.querySelector('#password');
    const toggleIcon = document.querySelector('#togglePassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}
