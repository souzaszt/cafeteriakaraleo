// Manipular formulário de login
document.getElementById('formularioLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    
    // Validação simples
    if (email && senha) {
        alert('Login realizado com sucesso! Redirecionando...');
        // Aqui você adicionaria a lógica de autenticação real
        mostrarPagina('home');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Manipular formulário de cadastro
document.getElementById('formularioCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    // Validações
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (!document.getElementById('aceitarTermos').checked) {
        alert('Você deve aceitar os Termos de Serviço e Política de Privacidade.');
        return;
    }
    
    alert('Conta criada com sucesso! Agora você pode fazer login.');
    mostrarPagina('login');
});