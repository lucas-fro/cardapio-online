const menu = {
    petisco: [
        { nomeItem: "FRITAS", preco: 25.00, descricao: " " },
        { nomeItem: "PANCETA", preco: 30.00, descricao: " " },
        { nomeItem: "FRANGO FRITO + FRITAS", preco: 35.00, descricao: " " },
        { nomeItem: "COXINHA DE FRANGO", preco: 35.00, descricao: " " },
        { nomeItem: "BOLINHO DE QUEIJO", preco: 35.00, descricao: " " },
        { nomeItem: "CHORIPAN", preco: 35.00, descricao: " " },
        { nomeItem: "SANDUÍCHE DE PERNIL", preco: 35.00, descricao: " " },
        { nomeItem: "HOT DOG", preco: 22.00, descricao: " " },
        { nomeItem: "SANDUÍCHE DE FRANGO", preco: 35.00, descricao: " " },
        { nomeItem: "NOSSO BURGUER", preco: 40.00, descricao: " " }
    ],

    drinks: [
        { nomeItem: "JAMESON TEA & LIME", preco: 35.00, descricao: "(Jameson, chá gelado, suco de limão)" },
        { nomeItem: "CAIPIRINHA", preco: 25.00, descricao: "(Cachaça, limão, açúcar)" },
        { nomeItem: "CAIPIROSKA NACIONAL (NUDY)", preco: 30.00, descricao: "(Vodka nacional, limão, açúcar)" },
        { nomeItem: "CAIPIROSKA IMPORTADA", preco: 40.00, descricao: "(Vodka importada, limão, açúcar)" },
        { nomeItem: "SAKERINHA", preco: 30.00, descricao: "(Saquê, limão, açúcar)" },
        { nomeItem: "GIN TÔNICA NACIONAL (NUDY)", preco: 30.00, descricao: "(Gin nacional, água tônica, limão)" },
        { nomeItem: "GIN TÔNICA IMPORTADA", preco: 40.00, descricao: "(Gin importado, água tônica, limão)" },
        { nomeItem: "NEGRONI", preco: 35.00, descricao: "(Gin, vermute rosso, Campari)" },
        { nomeItem: "APEROL SPRITZ", preco: 35.00, descricao: "(Aperol, prosecco, água com gás)" },
        { nomeItem: "WHISKEY JIM BEAM DOSE", preco: 30.00, descricao: "(Dose de Jim Beam)" },
        { nomeItem: "WHISKEY JACK DANIEL'S DOSE", preco: 40.00, descricao: "(Dose de Jack Daniel's)" },
        { nomeItem: "WHISKEY HOWLER HEAD DOSE", preco: 40.00, descricao: "(Dose de Howler Head)" },
        { nomeItem: "JAGERMEISTER 40 ML", preco: 20.00, descricao: "(Dose de Jägermeister)" },
        { nomeItem: "CAIPINANA FRUTAS VERMELHAS", preco: 35.00, descricao: "(Cachaça, frutas vermelhas, açúcar)" }
    ],
    
    cerveja: [
        { nomeItem: "Chopp Brahma Claro", preco: 11.90, descricao: " " },
        { nomeItem: "Chopp Colorado Indica", preco: 16.90, descricao: " " },
        { nomeItem: "Chopp Stella Artois", preco: 13.90, descricao: " " },
        { nomeItem: "Beck's Pilsner LN", preco: 15.90, descricao: " " },
        { nomeItem: "Corona LN", preco: 18.90, descricao: " " },
        { nomeItem: "Budweiser LN", preco: 14.90, descricao: " " },
        { nomeItem: "Spaten LN", preco: 14.90, descricao: " " },
        { nomeItem: "Stella Artois LN", preco: 14.90, descricao: " " },
        { nomeItem: "Stella Artois Pure Gold", preco: 14.90, descricao: " " },
        { nomeItem: "Budweiser Zero LN", preco: 14.90, descricao: " " }
    ],

    espetinho: [
        { nomeItem: "Carne", preco: 11.90, descricao: " " },
        { nomeItem: "Coração", preco: 11.90, descricao: " " },
        { nomeItem: "Frango com legumes", preco: 11.90, descricao: " " },
        { nomeItem: "Kafta", preco: 11.90, descricao: " " },
        { nomeItem: "Linguiça Toscana", preco: 11.90, descricao: " " }
    ],

    pizzas: [
        { nomeItem: "Mussarela", preco: 29.90, descricao: "Molho de tomate, mussarela, tomate fresco e manjericão.", imgPizza: "./img/mussarela.png" },
        { nomeItem: "Pepperoni", preco: 29.90, descricao: "Molho de tomate, mussarela e fatias de pepperoni.", imgPizza: "./img/peperoni.png" },
        { nomeItem: "Portuguesa", preco: 29.90, descricao: "Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.", imgPizza: "./img/portuguesa.png" },
        { nomeItem: "Azeitona Roxa", preco: 29.90, descricao: "Molho de tomate, mussarela, presunto, ovo, cebola e azeitonas.", imgPizza: "./img/azeitonaRoxa.png" },
        { nomeItem: "Cogumelos", preco: 29.90, descricao: "Molho de tomate, mussarela, cogumelos e catupiry.", imgPizza: "./img/cogumelos.png" },
        { nomeItem: "Manjericão", preco: 29.90, descricao: "Molho de tomate, mussarela, calabresa e cebola.", imgPizza: "./img/mangericao.png" },
        { nomeItem: "Frango", preco: 29.90, descricao: "Molho de tomate, mussarela, pimentão, cebola e frango desfiado.", imgPizza: "./img/frango.png" },
        { nomeItem: "Espinafre", preco: 29.90, descricao: "Molho de tomate, mussarela e espinafre.", imgPizza: "./img/espinafre.png" },
        { nomeItem: "Chocolate", preco: 29.90, descricao: "Chocolate e morango.", imgPizza: "./img/chocolate.png" }
      ],
      
    semAlcool: [
        { nomeItem: "Água", preco: 6.90, descricao: " " },
        { nomeItem: "Água com gás", preco: 6.90, descricao: " " },
        { nomeItem: "H2O", preco: 11.90, descricao: " " },
        { nomeItem: "Refrigerante", preco: 8.90, descricao: " " },
        { nomeItem: "Suco de Abacaxi", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Acerola", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Acerola c/ laranja", preco: 14.90, descricao: " " },
        { nomeItem: "Suco de Laranja", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Limão", preco: 12.90, descricao: " " },
        { nomeItem: "Limonada suíça", preco: 14.90, descricao: " " },
        { nomeItem: "Suco de Manga", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Maracujá", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Melancia", preco: 12.90, descricao: " " },
        { nomeItem: "Suco de Morango", preco: 12.90, descricao: " " },
        { nomeItem: "Morango c/ leite", preco: 14.90, descricao: " " }
    ]
};


// Função para formatar o preço com vírgula
function formatarPreco(preco) {
    return preco.toFixed(2).replace('.', ',');
}

// Função genérica para exibir itens no HTML
function mostrarItens(menuTipo, elementoId) {
    const container = document.getElementById(elementoId);

    menu[menuTipo].forEach(item => {

        if (menuTipo == 'pizzas' || elementoId == 'itens-pizzas'){
            const pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item')

            pizzaItem.innerHTML = `
                <div class="img-pizzas">
                    <img src="${item.imgPizza}" alt="">
                </div>
                <div class="menu-item">
                    <span class="nomeItem">${item.nomeItem}</span>
                    <span class="separador"></span>
                    <span class="preco">R$ ${formatarPreco(item.preco)}</span>
                    <span class="descricao">${item.descricao}</span>
                </div>
            `;

            container.appendChild(pizzaItem);
        }else{

            const divItem = document.createElement('div');
            divItem.classList.add('menu-item');

            divItem.innerHTML = `
                <span class="nomeItem">${item.nomeItem}</span>
                <span class="separador"></span>
                <span class="preco">R$ ${formatarPreco(item.preco)}</span>
                <span class="descricao">${item.descricao}</span>
            `;

            container.appendChild(divItem);
        }
    });
}

// Chamada das funções para exibir os itens de porção e salada
mostrarItens('petisco', 'itens-petisco');
mostrarItens('drinks', 'itens-drinks');
mostrarItens('cerveja', 'itens-cerveja');
mostrarItens('espetinho', 'itens-espetinho');
mostrarItens('semAlcool', 'itens-sem-alcool');
mostrarItens('pizzas', 'itens-pizzas');
