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
const response = await fetch('https://script.google.com/macros/s/AKfycbwN0e0eDXUD6b0llv1KclkZZr-EV8Ga6vnbpIcwQW-hqNsL36hQfHHEi67NVbZh0Jwanw/exec', {
  method: 'POST',
  body: JSON.stringify(data),
});


    const result = await response.json();
    document.getElementById('msg').innerText = result.mensagem;
  } catch (error) {
    document.getElementById('msg').innerText = "Erro ao enviar. Tente novamente mais tarde.";
  }
});
