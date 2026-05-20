let pontos = 0;
const questoes = [
  {
    id: 1,
    pergunta: "Quem é o autor de Harry Potter?",
    alternativas: [
      "Stephen King",
      "J. K. Rowling",
      "Rick Riordan",
      "George R. R. Martin"
    ],
    respostaCorreta: 1
  },

  {
    id: 2,
    pergunta: "Qual é o nome da escola de magia frequentada por Harry Potter?",
    alternativas: [
      "Nárnia",
      "Camelot",
      "Hogwarts",
      "Neverland"
    ],
    respostaCorreta: 2
  },

  {
    id: 3,
    pergunta: "Quem são os dois melhores amigos de Harry Potter?",
    alternativas: [
      "Draco e Snape",
      "Fred e Jorge",
      "Rony e Hermione",
      "Lupin e Sirius"
    ],
    respostaCorreta: 2
  },

  {
    id: 4,
    pergunta: "Qual é o principal vilão da saga?",
    alternativas: [
      "Dumbledore",
      "Voldemort",
      "Hagrid",
      "Cedrico Diggory"
    ],
    respostaCorreta: 1
  },

  {
    id: 5,
    pergunta: "Em qual casa de Hogwarts Harry Potter foi selecionado?",
    alternativas: [
      "Sonserina",
      "Corvinal",
      "Lufa-Lufa",
      "Grifinória"
    ],
    respostaCorreta: 3
  }
];


// Elementos HTML
const perguntaEl = document.getElementById("pergunta");
const alternativasEl = document.getElementById("alternativas");
const feedbackEl = document.getElementById("feedback");
const pontuacaoEl = document.getElementById("pontuacao");


// Sorteia pergunta aleatória
const indiceAleatorio = Math.floor(Math.random() * questoes.length);


// Pega a pergunta sorteada
const perguntaAtual = questoes[indiceAleatorio];


// Mostra a pergunta
perguntaEl.textContent = perguntaAtual.pergunta;


// Percorre as alternativas
perguntaAtual.alternativas.forEach((alternativa, indice) => {

  // Cria botão
  const botao = document.createElement("button");

  // Texto do botão
  botao.textContent = alternativa;

  // Evento de clique
  botao.addEventListener("click", () => {

    // Verifica se acertou
    if (indice === perguntaAtual.respostaCorreta) {

      feedbackEl.textContent = "✅ Correto!";
      feedbackEl.style.color = "green";
      pontos ++;

    } else {

      feedbackEl.textContent = "❌ Errado!";
      feedbackEl.style.color = "red";

    }

  });

  // Adiciona botão na tela
  alternativasEl.appendChild(botao);

});