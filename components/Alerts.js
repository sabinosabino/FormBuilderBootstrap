function getAlert() {
    return getTemplate(`<div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
    </div>`)
}

function getAlertWithDismiss() {
    return getTemplate(`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Este é um alerta com botão de fechar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `);
}
function getAlertStyles() {
    return getTemplate(`
        <div>
            <div class="alert alert-success" role="alert">Este é um alerta de sucesso!</div>
        </div>
    `);
}

function getAlertWithLinks() {
    return getTemplate(`
        <div class="alert alert-secondary" role="alert">
            Este é um alerta com <a href="#" class="alert-link">link de exemplo</a>. Clique para saber mais.
        </div>
    `);
}

function getAlertWithIcons() {
    return getTemplate(`
        <div>
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <div>Este é um alerta com ícone de sucesso!</div>
            </div>
        </div>
    `);
}


function getAlertGradient() {
    return getTemplate(`
        <div class="alert" style="background: linear-gradient(90deg, #ff9a9e 0%, #fad0c4 100%); color: #fff;" role="alert">
            Este é um alerta com fundo em gradiente personalizado!
        </div>
    `);
}

