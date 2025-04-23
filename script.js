document.getElementById('certForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    resposta: form.resposta.value
  };

  document.getElementById('msg').innerText = "Enviando...";

  try {
    const response = await fetch('URL_DO_SEU_APPS_SCRIPT', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById('msg').innerText = result.mensagem;
  } catch (error) {
    document.getElementById('msg').innerText = "Erro ao enviar. Tente novamente mais tarde.";
  }
});
