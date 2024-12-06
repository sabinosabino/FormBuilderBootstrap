// Offcanvas Básico
function getOffcanvasBasic() {
    return getTemplate(`
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBasic" aria-controls="offcanvasBasic">
                Abrir Offcanvas Básico
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasBasic" aria-labelledby="offcanvasBasicLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBasicLabel">Offcanvas Básico</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Este é um exemplo de offcanvas básico.</p>
                </div>
            </div>
        </div>
    `);
}

// Offcanvas com Lista de Navegação
function getOffcanvasWithNav() {
    return getTemplate(`
        <div>
            <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">
                Abrir Offcanvas com Navegação
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavLabel">Menu de Navegação</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="list-group">
                        <li class="list-group-item"><a href="#">Home</a></li>
                        <li class="list-group-item"><a href="#">Sobre</a></li>
                        <li class="list-group-item"><a href="#">Serviços</a></li>
                        <li class="list-group-item"><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `);
}

// Offcanvas com Formulário
function getOffcanvasWithForm() {
    return getTemplate(`
        <div>
            <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasForm" aria-controls="offcanvasForm">
                Abrir Offcanvas com Formulário
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasForm" aria-labelledby="offcanvasFormLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasFormLabel">Formulário de Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
                </div>
                <div class="offcanvas-body">
                    <form>
                        <div class="mb-3">
                            <label for="offcanvasEmail" class="form-label">Endereço de Email</label>
                            <input type="email" class="form-control" id="offcanvasEmail" placeholder="email@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="offcanvasPassword" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="offcanvasPassword" placeholder="Senha">
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    `);
}

// Offcanvas Rolável
function getOffcanvasScrollable() {
    return getTemplate(`
        <div>
            <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrollable" aria-controls="offcanvasScrollable">
                Abrir Offcanvas Rolável
            </button>
            <div class="offcanvas offcanvas-bottom offcanvas-scrollable" tabindex="-1" id="offcanvasScrollable" aria-labelledby="offcanvasScrollableLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollableLabel">Offcanvas com Rolagem</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Este é um exemplo de offcanvas com conteúdo rolável.</p>
                    <p>Adicione bastante texto ou conteúdo para testar a rolagem.</p>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <!-- Adicione mais texto ou conteúdo -->
                </div>
            </div>
        </div>
    `);
}
