/*JsBarcode("#barcode", "123456789012", {
    format: "CODE128",
    lineColor: "#000",
    width: 2,
    height: 100,
    displayValue: true
});*/


/*const apiURL = 'http://localhost:8080/produtos';

// Função para buscar e exibir os produtos
async function fetchProdutos() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }

        const produtos = await response.json();

        // Seleciona o elemento UL para listar os produtos
        const produtosLista = document.getElementById('produtos-lista');
        produtosLista.innerHTML = '';

        // Itera sobre os produtos e cria um item de lista para cada um
        produtos.forEach(produto => {
            const li = document.createElement('li');
            const svgQrcodeProduto = document.createElement('svg');   //<svg id="barcode"></svg>
            li.textContent = `ID: ${produto.id} - Nome: ${produto.nome} - Preço: ${produto.preco}`;
            produtosLista.appendChild(li);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chama a função fetchProdutos quando a página carregar
document.addEventListener('DOMContentLoaded', fetchProdutos);*/

async function fetchProdutos() {
    try {
        const response = await fetch('/produtos');
        if (!response.ok) {
            throw new Error('Erro ao buscar os produtos');
        }
        const produtos = await response.json();
        displayProdutos(produtos);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayProdutos(produtos) {
    const container = document.querySelector('.content-produto-etiqueta');
    container.innerHTML = ''; // Limpa o conteúdo existente
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.innerHTML = `
            <p>Código: ${produto.codigoProduto}</p>
            <p>Descrição: ${produto.descricaoProduto}</p>
            <p>Preço: ${produto.precoProduto}</p>
            <p>Unidade: ${produto.unidadeProduto}</p>
        `;
        container.appendChild(produtoDiv);
    });
}

function printEtiqueta() {
    window.print();
}

// Chama a função para buscar e exibir os produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', fetchProdutos);