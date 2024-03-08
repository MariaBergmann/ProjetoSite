document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('matriculaForm'); // Obtendo o formulário pelo ID

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const nomeAluno = document.getElementById('nomeAluno').value;
        const turma = document.getElementById('turma').value;

        if (nomeAluno.trim() === '' || turma.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Simulação de envio bem-sucedido do formulário
            alert('Matrícula bem-sucedida!');

            // Redireciona o usuário para a página de sucesso
            window.location.href = 'pagina-de-sucesso.html';
        }
    });
});
