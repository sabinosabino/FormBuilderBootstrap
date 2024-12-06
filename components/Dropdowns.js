// Dropdown Básico
function getDropdownBasic() {
    return getTemplate(`
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown básico
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Ação 1</a></li>
                <li><a class="dropdown-item" href="#">Ação 2</a></li>
                <li><a class="dropdown-item" href="#">Outra ação</a></li>
            </ul>
        </div>
    `);
}

// Dropdown com Divisor
function getDropdownWithDivider() {
    return getTemplate(`
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownDividerButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown com divisor
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownDividerButton">
                <li><a class="dropdown-item" href="#">Ação 1</a></li>
                <li><a class="dropdown-item" href="#">Ação 2</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Outra ação</a></li>
            </ul>
        </div>
    `);
}

// Dropdown com Tamanhos Personalizados
function getDropdownCustomSizes() {
    return getTemplate(`
        <div>
            <div class="dropdown mb-2">
                <button class="btn btn-lg btn-secondary dropdown-toggle" type="button" id="dropdownLargeButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown Grande
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownLargeButton">
                    <li><a class="dropdown-item" href="#">Ação 1</a></li>
                    <li><a class="dropdown-item" href="#">Ação 2</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownSmallButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown Pequeno
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownSmallButton">
                    <li><a class="dropdown-item" href="#">Ação 1</a></li>
                    <li><a class="dropdown-item" href="#">Ação 2</a></li>
                </ul>
            </div>
        </div>
    `);
}

// Dropdown com Direções Customizadas
function getDropdownCustomDirections() {
    return getTemplate(`
        <div class="d-flex justify-content-between">
            <div class="btn-group dropup">
                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown para cima
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ação</a></li>
                    <li><a class="dropdown-item" href="#">Outra ação</a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown padrão
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ação</a></li>
                    <li><a class="dropdown-item" href="#">Outra ação</a></li>
                </ul>
            </div>
            <div class="btn-group dropend">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown para a direita
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ação</a></li>
                    <li><a class="dropdown-item" href="#">Outra ação</a></li>
                </ul>
            </div>
        </div>
    `);
}

// Dropdown com Cabeçalhos
function getDropdownWithHeaders() {
    return getTemplate(`
        <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownHeaderButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown com cabeçalhos
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownHeaderButton">
                <li><h6 class="dropdown-header">Cabeçalho 1</h6></li>
                <li><a class="dropdown-item" href="#">Ação 1</a></li>
                <li><a class="dropdown-item" href="#">Ação 2</a></li>
                <li><h6 class="dropdown-header">Cabeçalho 2</h6></li>
                <li><a class="dropdown-item" href="#">Outra ação</a></li>
            </ul>
        </div>
    `);
}
