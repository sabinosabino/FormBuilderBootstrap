function getButtonGroupBasic() {
    return getTemplate(`
        <div class="btn-group" role="group" aria-label="Grupo de botões básico">
            <button type="button" class="btn btn-primary">Esquerda</button>
            <button type="button" class="btn btn-secondary">Centro</button>
            <button type="button" class="btn btn-danger">Direita</button>
        </div>
    `);
}

function getButtonGroupSizesLarge() {
    return getTemplate(`
        <div>
            <div class="btn-group btn-group-lg mb-2" role="group" aria-label="Grupo grande">
                <button type="button" class="btn btn-primary">Grande</button>
                <button type="button" class="btn btn-secondary">Grande</button>
                <button type="button" class="btn btn-danger">Grande</button>
            </div>
        </div>
    `);
}
function getButtonGroupSizesSmall() {
    return getTemplate(`
        <div>
            <div class="btn-group btn-group-sm" role="group" aria-label="Grupo pequeno">
                <button type="button" class="btn btn-primary">Pequeno</button>
                <button type="button" class="btn btn-secondary">Pequeno</button>
                <button type="button" class="btn btn-danger">Pequeno</button>
            </div>
        </div>
    `);
}


function getButtonGroupVertical() {
    return getTemplate(`
        <div class="btn-group-vertical" role="group" aria-label="Grupo vertical">
            <button type="button" class="btn btn-primary">Botão 1</button>
            <button type="button" class="btn btn-secondary">Botão 2</button>
            <button type="button" class="btn btn-danger">Botão 3</button>
        </div>
    `);
}


function getButtonGroupWithDropdown() {
    return getTemplate(`
        <div class="btn-group" role="group" aria-label="Grupo com dropdown">
            <button type="button" class="btn btn-primary">Botão 1</button>
            <button type="button" class="btn btn-secondary">Botão 2</button>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ação 1</a></li>
                    <li><a class="dropdown-item" href="#">Ação 2</a></li>
                    <li><a class="dropdown-item" href="#">Outra ação</a></li>
                </ul>
            </div>
        </div>
    `);
}

function getButtonGroupCheckboxes() {
    return getTemplate(`
        <div class="btn-group" role="group" aria-label="Grupo com checkboxes">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btncheck2">Checkbox 2</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-danger" for="btncheck3">Checkbox 3</label>
        </div>
    `);
}


function getButtonGroupRadios() {
    return getTemplate(`
        <div class="btn-group" role="group" aria-label="Grupo com radios">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Radio 2</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-danger" for="btnradio3">Radio 3</label>
        </div>
    `);
}
