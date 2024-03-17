 
        const form = document.getElementById('matriculaForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nomeAluno = document.getElementById('nomeAluno').value;
            const turma = document.getElementById('turma').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('senha').value;
console.log(email)
console.log(password)

            if (nomeAluno.trim() === '' || turma.trim() === '') {
                alert('Por favor, preencha todos os campos.');
            } else {
                alert('Matrícula bem-sucedida!');
                window.location.href = 'pagina-de-sucesso.html'; // Redireciona para a página de sucesso
            }
        });


