// Substitua com o link da sua API do MockAPI
const url = "https://682d23ae4fae18894754ff05.mockapi.io/Animal";

// Função para carregar a lista de animais
function carregarAnimais() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let html = "";
      data.forEach(animal => {
        html += `${animal.id} - ${animal.nome} (${animal.idade} anos) – ${animal.raca}<br>`;
      });
      document.getElementById("lista-animais").innerHTML = html;
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
      document.getElementById("lista-animais").innerHTML = "Erro ao carregar os animais.";
    });
}

// Função para cadastrar o Totó no MockAPI
function cadastrarAnimal() {
  const novoAnimal = {
    nome: "Totó",
    idade: 12,
    raca: "Cachorro"
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoAnimal)
  })
  .then(response => response.json())
  .then(() => {
    carregarAnimais(); // Atualiza a lista após cadastro
  })
  .catch(error => console.error('Erro ao cadastrar animal:', error));
}

// Carrega os animais ao abrir a página
carregarAnimais();