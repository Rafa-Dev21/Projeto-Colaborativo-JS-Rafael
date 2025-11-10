// Array para armazenar os produtos cadastrados
const produtos = [];

// Adiciona evento ao botão "Cadastrar"
document.querySelector('#btnCadastrar').addEventListener('click', () => {
  // Captura os valores dos campos
  const nome = document.querySelector('#nome').value;
  const preco = Number(document.querySelector('#preco').value);

  // Verifica se os campos foram preenchidos
  if (!nome || !preco) return alert('Preencha todos os campos!');

  // Cria um novo objeto de produto com as propriedades necessárias
  const produto = {
    id: produtos.length + 1,
    nome,
    preco,
    data: new Date().toLocaleDateString() // Armazena a data atual
  };

  // Adiciona o produto ao array
  produtos.push(produto);

  // Atualiza a lista exibida na tela
  mostrarProdutos();
});

// Função para exibir os produtos cadastrados no HTML
function mostrarProdutos() {
  const lista = document.querySelector('#listaProdutos');
  lista.innerHTML = '';

  // Percorre o array e cria um <li> para cada produto
  for (const p of produtos) {
    lista.innerHTML += `<li>${p.nome} - R$ ${p.preco.toFixed(2)} (${p.data})</li>`;
  }

  // Mostra no console os produtos em formato de pares [chave, valor]
  console.log(Object.entries(produtos));
}
