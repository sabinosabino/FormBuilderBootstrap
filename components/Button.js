// Button.js
function getButtonHTML() {
return getTemplate(`
            <button type="button" class="btn btn-primary">Meu Botão</button>
    `);
}
function getButtonBasic() {
    return getTemplate(`
        <button type="button" class="btn btn-primary">Botão Básico</button>
    `);
}
function getButtonColors() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary">Primário</button>
        </div>
    `);
}

function getButtonOutline() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-outline-primary">Primário</button>
        </div>
    `);
}


function getButtonSizesLarge() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary btn-lg">Grande</button>
        </div>
    `);
}

function getButtonSizesSmall() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-secondary btn-sm">Pequeno</button>
        </div>
    `);
}

function getButtonDisabled() {
    return getTemplate(`
        <button type="button" class="btn btn-primary" disabled>Desabilitado</button>
    `);
}
function getButtonWithIcon() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary">
                <i class="bi bi-house-door"></i> Home
            </button>
        </div>
    `);
}
function getButtonGroup() {
    return getTemplate(`
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Esquerda</button>
            <button type="button" class="btn btn-secondary">Centro</button>
            <button type="button" class="btn btn-danger">Direita</button>
        </div>
    `);
}


function getButtonDropdown() {
    return getTemplate(`
        <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Ação 1</a></li>
                <li><a class="dropdown-item" href="#">Ação 2</a></li>
                <li><a class="dropdown-item" href="#">Outra ação</a></li>
            </ul>
        </div>
    `);
}


