
document.addEventListener('DOMContentLoaded', () => {
    const adicionarBotoes = document.querySelectorAll('.adicionar');
    const listaProdutos = document.querySelector('.lista-produtos');
    const totalElement = document.querySelector('.total');
    let total = 0;
  
    adicionarBotoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        const produtoElemento = botao.parentElement;
        const nomeProduto = produtoElemento.querySelector('h3').textContent;
        const precoProdutoTexto = produtoElemento.querySelector('p').textContent;
        const precoProduto = parseFloat(precoProdutoTexto.replace('Preço: R$ ', '').replace(',', '.'));
  
        // Adiciona o produto à lista do carrinho
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.', ',')}`;
        listaProdutos.appendChild(itemCarrinho);
  
        // Atualiza o valor total
        total += precoProduto;
        totalElement.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
      });
    });
  });
  