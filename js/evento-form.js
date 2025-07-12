// 8º EVENTO
// o Objetivo é, após preenchido o formulário, ele irá sair da tela e aparecerá uma mensagem de agradecimento.

const formulario = document.querySelector("form"); // Pega o form do HTML
let tituloMensagem = document.createElement("h1"); // Cria um elemento H1
let textoMensagem = document.createElement("p"); // Cria um parágrafo
let elementopai = document.querySelector(".frase"); // Pega um elemento de referência para posicionar os novos elementos.

// Adiciona o listener do evento no formulário
formulario.addEventListener("submit", (e) => {
  // Neste caso precisei utilizar o objeto Evento, para pegar a função abaixo. Foi necessário para evitar que o formulário atualize a página e mensagem não aparecer como deveria.
  e.preventDefault();

  formulario.style.display = "none"; // Após enviado, o formulário sai da tela;

  // Criação dos textos dos elementos novos.
  tituloMensagem.textContent = "Obrigado pelo contato!!";
  textoMensagem.textContent = "Agradecemos pelo envio dos seus dados. Em breve, uma de nossas consultoras entrará em contato com você através do número ou e-mail informado."


  // Nas linhas abaixo, estilizei os elementos para ficarem visualmente bonitos na página, com CSS diretamente no Javascript.
  tituloMensagem.style.textAlign = "center";
  tituloMensagem.style.marginTop = "10rem";
  tituloMensagem.style.fontSize = "3rem";
  tituloMensagem.style.fontFamily = "Arsenica";

  textoMensagem.style.textAlign = "center";
  textoMensagem.style.marginBottom = "10rem";
  textoMensagem.style.marginTop = "4rem";
  textoMensagem.style.fontSize = "2rem";
  textoMensagem.style.fontFamily = "Montserrat";

  // e para finalizar, coloco os elementos após o elemento de referência que peguei anteriormente. (afterend = depois do final do elemento de referência).
  elementopai.insertAdjacentElement("afterend", textoMensagem);
  elementopai.insertAdjacentElement("afterend", tituloMensagem);
});