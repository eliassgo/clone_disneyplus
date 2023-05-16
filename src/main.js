document.addEventListener('DOMContentLoaded', function(){//DomContentLoaded aciona a função quando todos os elementos HTML estiverem carregados 
    const buttons = document.querySelectorAll('[data-tab-button]'); // a contante buttons seleciona todos os elementos com o id button-tab-button


    for (let i = 0; i < buttons.length; i++){ //o loop percorre cada botao e adiciona o evento de click 
        buttons[i].addEventListener('click', function(botao){

            const abaAlvo = botao.target.dataset.tabButton; // a constante abaAlvo obtem a guia correspondente ao botão 
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); // aba alvo guarda a guia selecionada e encontra o elemento que possui o atributo 'data-tab-id' correspondente ao abaAlvo
            
            escondeTodasAbas(); // É chamada para esconder todas as abas removendo a classe 'shows__list--is-active'
            aba.classList.add('shows__list--is--active'); // A classe shows__list--is--active é adicionada 
            removeBotaoAtivo() // essa funçao é chamda para remover de todos os botões a classe show__tabs__button--is--active 
            botao.target.classList.add('shows__tabs__button--is--active'); //A classe show__tabs__button--is--active é adicionada ao botao clicado usando 
        })
    }
})

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); 

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

/*
a const abaAlvo é adicionada o data-tab-button do botão selecionado e 
a constante aba é adicionada o data-tab-id correspondente ao botão selecionado, é isso? 

Sim, você entendeu corretamente!

A constante abaAlvo recebe o valor do atributo data-tab-button do botão de guia selecionado.
Esse atributo deve ser único e atuar como um identificador para a guia correspondente.

A constante aba é definida usando document.querySelector([data-tab-id=${abaAlvo}]'), 
que seleciona o elemento que possui o atributo de dados data-tab-idigual ao valor deabaAlvo. 
Em outras palavras, ele busca a guia correspondente com base no atributo data-tab-id` que 
corresponde ao botão de guia selecionado.

Essa associação entre o botão de guia e a guia correspondente é estabelecida usando os
atributos de dados data-tab-button e data-tab-id. Dessa forma, quando um botão de guia 
é clicado, o código identifica qual guia deve ser exibida com base na correspondência 
desses atributos.

Essa abordagem permite criar uma interação entre os botões de guia e as guias 
correspondentes, facilitando a exibição e ocultação das guias corretas conforme necessário.

*/