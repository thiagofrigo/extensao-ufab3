const script = document.createElement('script');
script.textContent = `
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    console.log('tentando capturar dados');
    const response = await originalFetch(...args);
    const cloneResponse = response.clone(); // Clona para evitar problemas com o stream

    // Captura a resposta
    cloneResponse.json().then(data => {
      console.log("Resposta interceptada:", data);
    });

    return response;
  };
`;
document.documentElement.appendChild(script);