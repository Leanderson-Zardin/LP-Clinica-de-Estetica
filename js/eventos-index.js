// ---- 1º EVENTO (REQUISITO: REMOVER ELEMENTO DA PÁGINA)
// O objetivo é que, ao passar o mouse por cima da imagem de uma das profissionais da seção "profissionais", as outras 2 imagens devem ficar mais transparentes e também na parte dos textos deve apapecer o texto respectivo à profissional selecionada.


// Pegando os elementos do HTML.
// querySelectorAll vai pegar um array com todos os elementos que possuem a classe
// getElementbyId vai pegar somente um único elemento com o ID
const profissionais = document.querySelectorAll(".profissional"); // array com as 3 imagens
const nomes = document.querySelectorAll(".infoequipe"); // array com os títulos dos textos
const texto1 = document.getElementById("texto1"); // primeiro parágrafo
const texto2 = document.getElementById("texto2"); ""// segundo parágrafo
const div = document.querySelector(".textosEquipe")

for (let profissional of profissionais) { // iteração no array das imagens

  profissional.addEventListener("mouseover", () => { // adicionando um "ouvidor" em cada imagem para disparar o evento MOUSEOVER
    // nos 3 blocos IF a seguir, o princípio do código é o mesmo, porém com algumas diferenças de texto e índex do array de imagens
    
    if (profissional == profissionais[0]) { // Se o evento disparar na primeira imagem, então...
      profissionais[1].style.opacity = "50%"; // Segunda imagem fica com 50% de transparência
      profissionais[2].style.opacity = "50%"; // Terceira imagem fica com 50% de transparência
      
      removeinfo(); // chamada a função para remover informações
      nomes[1].style.backgroundColor = "#f1aa7e94"; // O título com o nome da profissional ficara com uma cor diferente

      texto1.textContent = "Com sólida formação em estética e ampla experiência clínica, Aline é referência em protocolos dermoterapêuticos para rejuvenescimento facial, controle de oleosidade e tratamento de manchas. Seu diferencial está na personalização dos atendimentos, unindo tecnologia de ponta a técnicas manuais de alta precisão, sempre com foco em resultados visíveis e saúde da pele."; // O parágrafo ficará com o texto referente à profissional selecionada.
    }

    if (profissional == profissionais[1]) {
      profissionais[0].style.opacity = "50%";
      profissionais[2].style.opacity = "50%";
      removeinfo();
      nomes[2].style.backgroundColor = "#f1aa7e94";

      texto1.textContent = "Especializada em cuidados integrativos para a pele, Daniela domina tratamentos faciais voltados à restauração da barreira cutânea, equilíbrio do microbioma e revitalização profunda. Seu trabalho combina ativos biomiméticos com estratégias não invasivas, proporcionando conforto, segurança e alta performance mesmo para peles sensíveis ou reativas.";
    }

    if (profissional == profissionais[2]) {
      profissionais[0].style.opacity = "50%";
      profissionais[1].style.opacity = "50%";
      removeinfo();
      nomes[3].style.backgroundColor = "#f1aa7e94";

      texto1.textContent = "Com anos de atuação em clínicas de alto padrão, Juliana é expert em equipamentos de alta tecnologia, como laser, radiofrequência e microagulhamento. Reconhecida por sua habilidade em associar recursos tecnológicos a uma avaliação minuciosa da pele, oferece tratamentos eficazes para firmeza, textura e contorno facial, sempre alinhando ciência e estética de forma precisa.";
    }
  });

  // ---- 2º EVENTO
  // O objetivo deste evento é que, ao retirar o mouse das imagens das profissionais, todas as imagens e textos voltem ao padrão.

  // adicionando os "ouvidores" do evento em cada imagem
 profissional.addEventListener("mouseout", () => { // O evento utilizado é o MOUSEOUT
    // todas as imagens voltam à sua transparência normal
    profissionais[0].style.opacity = "100%";
    profissionais[1].style.opacity = "100%";
    profissionais[2].style.opacity = "100%";
    
    // Os títulos com os nomes das profissionais ficam sem cor de fundo, apenas o primeiro título passa a ter cor de fundo.
    nomes[1].style.backgroundColor = "transparent";
    nomes[2].style.backgroundColor = "transparent";
    nomes[3].style.backgroundColor = "transparent";
    nomes[0].style.backgroundColor = "#f1aa7e94";

    // Os voltarão ao padrão também
    texto1.textContent = "Nossa equipe de esteticistas profissionais é formada por especialistas graduadas em Estética e Cosmética, com ampla experiência em tratamentos faciais.";
    div.append(texto2);
  });

}

function removeinfo() {
  nomes[0].style.backgroundColor = "transparent"; // O primeiro nome/título ficará sem estilização de cor de fundo
  texto2.remove() // REMOVE o segundo parágrafo com a função remove().
}

// =============================

// 3º EVENTO (REQUISITO: ALTERAR CONTEUDO DA TABELA)
// O objetivo com este evento é alterar a tabela conforme o dia da semana.

const imagemFooter = document.querySelector(".imagemfooter"); // Seleciona a imagem agendar abaixo da tabela
const linhas = document.querySelectorAll("table tbody tr"); // Seleciona a lista de linhas da tabela
const coluna = document.querySelectorAll(".direita"); // Seleciona todos os TD da coluna direita 

// Adiciona o "ouvidor" de eventos na imagem
imagemFooter.addEventListener("dblclick", () => { // Evento utilizado é o DOUBLE CLICK
  const dataAtual = new Date(); // Pegamos a data de HOJE, com o objeto Date
  const diaSemana = dataAtual.getDay(); // Pegamos qual o dia da semana é hoje, entre 0 e 6
  let contador = 0; // Inicia um contador em 0

  // Para o código abaixo funcionar, a tabela deve conter 7 linhas começando no Domingo e terminando no Sábado

  // A intenção com este loop é passar em cada linha da tabela.
  while (contador < linhas.length) {
    // Se o contador for igual ao número da semana (informação retirada do getDay) e DIFERENTE de 0
    if (contador == diaSemana && diaSemana != 0) {
      linhas[contador].style.color = "green"; // Linha verde e com bold
      linhas[contador].style.fontWeight = "bold";
      coluna[contador].textContent = "Agenda livre!";

      // Se o contador for igual ao número da semana (informação retirada do getDay) e IGUAL a 0
    } else if (contador == diaSemana && diaSemana == 0) {
      linhas[contador].style.color = "red"; // linha vermelha e com bold
      linhas[contador].style.fontWeight = "bold";
      coluna[contador].textContent = "Sem agenda!";
    }

    contador++; // Incrementa o contador
  }
  
});

// =============================

// 4º Evento (REQUISITOS: ALTERAR LISTA + CRIAR ELEMENTO)
// O objetivo deste evento é criar um novo elemento li na lista de tratamentos;

const lista = document.querySelector(".listaDeTratamentos"); // Pega o elemento UL
const botaoTratamentos = document.querySelector(".botaotratamentos"); // pega o botão da seção de tratamentos
const liTratamento = document.querySelectorAll(".tratamento"); // Pega todos a lista de LI do elemento UL
const titulo = document.createElement("li"); // Cria um novo elemento LI e adiciona na variavel

botaoTratamentos.addEventListener("mousedown", () => { // Listener do tipo MOUSEDOWN
  // as 4 linhas abaixo alteram o elemento LI criado, definindo tamanho, texto, e fonte;
  titulo.textContent = "**Serviços";
  titulo.style.fontSize = "2rem";
  titulo.style.fontFamily = "Arsenica";
  titulo.style.fontWeight = "bold";

  // Iteraçãa sobre os 5 primeiros elementos da lista, adicionando um underline em cada LI
  for (let i = 0; i < 5; i++) {
    liTratamento[i].style.textDecoration = "underline";
  }

  // Adiciona o elemento criado no elemento pai UL
  lista.appendChild(titulo)
})


// 5º EVENTO
// o objetivo com este evento é remover todas as alterações realizadas no 4º Evento

botaoTratamentos.addEventListener("mouseup", () => { // Listener do tipo MOUSEUP
  titulo.remove(); // Remove o elemento criado anteriormente.

  // Itera sobre a lista principal, removendo o underline dos textos.
  for (let i = 0; i < 5; i++) {
    liTratamento[i].style.textDecoration = "none";
  }
})

// =============================

// 6º EVENTO (REQUISITO: ALTERAR IMAGEM)
// o objetivo é clicar na imagem e a mesma alternar entre 2 exemplos diferentes

// Pega a lista de imagens da seção de Serviços
const imagensServico = document.querySelectorAll(".imagemservico");

// O ponto chave aqui está nos nomes de cada arquivo de imagem.
// Em cada tratamento, existem 2 imagens na pasta com o mesmo nome de arquivo, porém com extensões diferentes (PNG e JPG).
// A tarefa é simples, identificar se a imagem clicada possui a extenão PNG ou JPG, e alternar entre os dois. Desta forma a imagem mudará no site tbm.

// Iteraa sobre todas as imagens da lista
for (let imagem of imagensServico) {

  // Adiciona o evento de CLICK em todas as imagens;
  imagem.addEventListener("click", () => {
    let atributo = imagem.getAttribute("src"); // pega o atributo de cada imagem clicada.
    let novoAtributo = ""; // Nesta variável será adiciona um novo atributo posteriormente.

    // Se o atributo da imagem possuir .png, então...
    if (atributo.includes(".png")) {
      // ... Substitui o .png pelo .jpg na nova variável;
      novoAtributo = atributo.replace(".png", ".jpg");
      // adiciona o novo atributo na imagem novamente;
      imagem.setAttribute("src", novoAtributo);
    } else { // faz as mesmas coisas de antes, porém inversamente;
      novoAtributo = atributo.replace(".jpg", ".png");
      imagem.setAttribute("src", novoAtributo);
    }
  })
}
