// List Group Básico
function getListGroupBasic() {
    return getTemplate(`
        <ul class="list-group">
            <li class="list-group-item">Item 1</li>
            <li class="list-group-item">Item 2</li>
            <li class="list-group-item">Item 3</li>
        </ul>
    `);
}

// List Group com Links
function getListGroupWithLinks() {
    return getTemplate(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                Link Ativo
            </a>
            <a href="#" class="list-group-item list-group-item-action">Link 2</a>
            <a href="#" class="list-group-item list-group-item-action">Link 3</a>
            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">
                Link Desabilitado
            </a>
        </div>
    `);
}

// List Group com Cores
function getListGroupWithColors() {
    return getTemplate(`
        <ul class="list-group">
            <li class="list-group-item list-group-item-primary">Item Primário</li>
            <li class="list-group-item list-group-item-secondary">Item Secundário</li>
            <li class="list-group-item list-group-item-success">Item Sucesso</li>
            <li class="list-group-item list-group-item-danger">Item Perigo</li>
            <li class="list-group-item list-group-item-warning">Item Aviso</li>
            <li class="list-group-item list-group-item-info">Item Informação</li>
            <li class="list-group-item list-group-item-light">Item Claro</li>
            <li class="list-group-item list-group-item-dark">Item Escuro</li>
        </ul>
    `);
}

// List Group com Conteúdo Customizado
function getListGroupCustomContent() {
    return getTemplate(`
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Item com Contador
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Outro Item
                <span class="badge bg-secondary rounded-pill">7</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Mais um Item
                <span class="badge bg-success rounded-pill">3</span>
            </li>
        </ul>
    `);
}

// List Group com Checkbox
function getListGroupWithCheckbox() {
    return getTemplate(`
        <div class="list-group">
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="">
                Primeiro checkbox
            </label>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="">
                Segundo checkbox
            </label>
            <label class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="">
                Terceiro checkbox
            </label>
        </div>
    `);
}
