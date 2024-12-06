function getCardBasic() {
    return getTemplate(`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card Básico</h5>
                <p class="card-text">Este é um exemplo de card básico com título e texto.</p>
                <a href="#" class="btn btn-primary">Ação</a>
            </div>
        </div>
    `);
}


function getCardWithImageTop() {
    return getTemplate(`
        <div class="card" style="width: 18rem;">
            <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Imagem do Card">
            <div class="card-body">
                <h5 class="card-title">Card com Imagem</h5>
                <p class="card-text">Este card contém uma imagem no topo e um texto descritivo.</p>
                <a href="#" class="btn btn-primary">Ação</a>
            </div>
        </div>
    `);
}
function getCardWithList() {
    return getTemplate(`
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                Lista de Itens
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Item 1</li>
                <li class="list-group-item">Item 2</li>
                <li class="list-group-item">Item 3</li>
            </ul>
        </div>
    `);
}

function getCardWithImageBackground() {
    return getTemplate(`
        <div class="card text-white">
            <img src="https://via.placeholder.com/400x200" class="card-img" alt="Imagem de Fundo">
            <div class="card-img-overlay">
                <h5 class="card-title">Título Sobreposto</h5>
                <p class="card-text">Este é um exemplo de card com texto sobreposto na imagem de fundo.</p>
                <p class="card-text">Última atualização: 3 minutos atrás.</p>
            </div>
        </div>
    `);
}

function getCardWithNavigation() {
    return getTemplate(`
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Ativo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Desativado</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card com Navegação</h5>
                <p class="card-text">Este é um exemplo de card com abas de navegação na parte superior.</p>
                <a href="#" class="btn btn-primary">Ação</a>
            </div>
        </div>
    `);
}


function getCardWithFooter() {
    return getTemplate(`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card com Rodapé</h5>
                <p class="card-text">Este card contém um rodapé para informações adicionais.</p>
                <a href="#" class="btn btn-primary">Ação</a>
            </div>
            <div class="card-footer text-muted">
                Última atualização: 3 minutos atrás.
            </div>
        </div>
    `);
}

function getCardDeck() {
    return getTemplate(`
        <div class="card-deck">
            <div class="card">
                <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Imagem do Card">
                <div class="card-body">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">Texto do Card 1.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Imagem do Card">
                <div class="card-body">
                    <h5 class="card-title">Card 2</h5>
                    <p class="card-text">Texto do Card 2.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Imagem do Card">
                <div class="card-body">
                    <h5 class="card-title">Card 3</h5>
                    <p class="card-text">Texto do Card 3.</p>
                </div>
            </div>
        </div>
    `);
}
