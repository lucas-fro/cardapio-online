const menu = {
    petisco: [
        { nomeItem: "FRITAS", preco: 25.00 },
        { nomeItem: "PANCETA", preco: 30.00 },
        { nomeItem: "FRANGO FRITO + FRITAS", preco: 35.00 },
        { nomeItem: "COXINHA DE FRANGO", preco: 35.00 },
        { nomeItem: "BOLINHO DE QUEIJO", preco: 35.00 },
        { nomeItem: "CHORIPAN", preco: 35.00 },
        { nomeItem: "SANDUÍCHE DE PERNIL", preco: 35.00 },
        { nomeItem: "HOT DOG", preco: 22.00 },
        { nomeItem: "SANDUÍCHE DE FRANGO", preco: 35.00 },
        { nomeItem: "NOSSO BURGUER", preco: 40.00 }
    ],

    drinks: [
        { nomeItem: "JAMESON TEA & LIME", preco: 35.00 },
        { nomeItem: "CAIPIRINHA", preco: 25.00 },
        { nomeItem: "CAIPIROSKA NACIONAL (NUDY)", preco: 30.00 },
        { nomeItem: "CAIPIROSKA IMPORTADA", preco: 40.00 },
        { nomeItem: "SAKERINHA", preco: 30.00 },
        { nomeItem: "GIN TÔNICA NACIONAL (NUDY)", preco: 30.00 },
        { nomeItem: "GIN TÔNICA IMPORTADA", preco: 40.00 },
        { nomeItem: "NEGRONI", preco: 35.00 },
        { nomeItem: "APEROL SPRITZ", preco: 35.00 },
        { nomeItem: "WHISKEY JIM BEAM DOSE", preco: 30.00 },
        { nomeItem: "WHISKEY JACK DANIEL'S DOSE", preco: 40.00 },
        { nomeItem: "WHISKEY HOWLER HEAD DOSE", preco: 40.00 },
        { nomeItem: "JAGERMEISTER 40 ML", preco: 20.00 },
        { nomeItem: "CAIPINANA FRUTAS VERMELHAS", preco: 35.00 }
    ],
    
    cerveja: [
        { nomeItem: "Chopp Brahma Claro", preco: 11.90 },
        { nomeItem: "Chopp Colorado Indica", preco: 16.90 },
        { nomeItem: "Chopp Stella Artois", preco: 13.90 },
        { nomeItem: "Beck's Pilsner LN", preco: 15.90 },
        { nomeItem: "Corona LN", preco: 18.90 },
        { nomeItem: "Budweiser LN", preco: 14.90 },
        { nomeItem: "Spaten LN", preco: 14.90 },
        { nomeItem: "Stella Artois LN", preco: 14.90 },
        { nomeItem: "Stella Artois Pure Gold", preco: 14.90 },
        { nomeItem: "Budweiser Zero LN", preco: 14.90 }
    ],

    espetinho: [
        { nomeItem: "Carne", preco: 11.90 },
        { nomeItem: "Coração", preco: 11.90 },
        { nomeItem: "Frango com legumes", preco: 11.90 },
        { nomeItem: "Kafta", preco: 11.90 },
        { nomeItem: "Linguiça Toscana", preco: 11.90 }
    ],

    SemAlcool: [
        { nomeItem: "Água", preco: 6.90 },
        { nomeItem: "Água com gás", preco: 6.90 },
        { nomeItem: "H2O", preco: 11.90 },
        { nomeItem: "Refrigerante", preco: 8.90 },
        { nomeItem: "Suco de Abacaxi", preco: 12.90 },
        { nomeItem: "Suco de Acerola", preco: 12.90 },
        { nomeItem: "Suco de Acerola c/ laranja", preco: 14.90 },
        { nomeItem: "Suco de Laranja", preco: 12.90 },
        { nomeItem: "Suco de Limão", preco: 12.90 },
        { nomeItem: "Limonada suíça", preco: 14.90 },
        { nomeItem: "Suco de Manga", preco: 12.90 },
        { nomeItem: "Suco de Maracujá", preco: 12.90 },
        { nomeItem: "Suco de Melancia", preco: 12.90 },
        { nomeItem: "Suco de Morango", preco: 12.90 },
        { nomeItem: "Morango c/ leite", preco: 14.90 }
    ]
};

// Função para formatar o preço com vírgula
function formatarPreco(preco) {
    return preco.toFixed(2).replace('.', ',');
}

// Função para exibir os itens de porção no HTML
// Função genérica para exibir itens no HTML
function mostrarItens(menuTipo, elementoId) {
    const container = document.getElementById(elementoId);

    menu[menuTipo].forEach(item => {
        const divItem = document.createElement('div');
        divItem.classList.add('menu-item');

        divItem.innerHTML = `
            <span class="nomeItem">${item.nomeItem}</span>
            <span class="separador"></span>
            <span class="preco">R$ ${formatarPreco(item.preco)}</span>
        `;

        container.appendChild(divItem);
    });
}

// Chamada das funções para exibir os itens de porção e salada
mostrarItens('petisco', 'itens-petisco');
mostrarItens('drinks', 'itens-drinks');
mostrarItens('cerveja', 'itens-cerveja');
mostrarItens('espetinho', 'itens-espetinho');
mostrarItens('SemAlcool', 'itens-sem-alcool');

