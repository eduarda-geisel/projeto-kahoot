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
      respostaCorreta: 2
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
      respostaCorreta: 3
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
      respostaCorreta: 3
    },
  
    {
      id: 4,
      pergunta: "Qual é o principal vilão da série?",
      alternativas: [
        "Dumbledore",
        "Voldemort",
        "Hagrid",
        "Cedrico Diggory"
      ],
      respostaCorreta: 2
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
      respostaCorreta: 4
    }
  ];
  
  const embaralhado = Math.floor(
    Math.random() * perguntas.length); 
    const q = perguntas[embaralhado];