document.getElementById('certForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    resposta: form.resposta.value
  };

  document.getElementById('msg').innerText = "Gerando certificado...";

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwpe_X2IAKGV05fU-9HRusOejPhTyH-vlw_1M5Kzq_5-tdoDidzevZn-VMKxUS7jSVl/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.linkCertificado) {
      document.getElementById('msg').innerHTML = `
        ✅ ${result.mensagem}<br>
        <a href="${result.linkCertificado}" target="_blank">Clique aqui para baixar seu certificado</a>
      `;
    } else {
      document.getElementById('msg').innerText = result.mensagem;
    }
  } catch (error) {
    console.error(error);
    document.getElementById('msg').innerText = "Erro ao gerar certificado. Tente novamente.";
  }
});
