function getBadgeBasic() {
    return getTemplate(`
        <span class="badge bg-primary">Badge primária</span>
    `);
}


function getBadgeStyles() {
    return getTemplate(`
        <div>
            <span class="badge bg-primary">Primária</span>
            <span class="badge bg-secondary">Secundária</span>
            <span class="badge bg-success">Sucesso</span>
            <span class="badge bg-danger">Perigo</span>
            <span class="badge bg-warning text-dark">Aviso</span>
            <span class="badge bg-info text-dark">Informação</span>
            <span class="badge bg-light text-dark">Clara</span>
            <span class="badge bg-dark">Escura</span>
        </div>
    `);
}

function getBadgeWithLink() {
    return getTemplate(`
        <a href="#" class="badge bg-primary text-decoration-none">Badge com link</a>
    `);
}


function getBadgeInButtons() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary">
                Notificações <span class="badge bg-secondary">4</span>
            </button>
            <button type="button" class="btn btn-danger">
                Mensagens <span class="badge bg-light text-dark">9+</span>
            </button>
        </div>
    `);
}


function getBadgeCustomText() {
    return getTemplate(`
        <span class="badge bg-success">Customizado com Sucesso!</span>
    `);
}

function getBadgeCustomSize() {
    return getTemplate(`
        <div>
            <span class="badge bg-info fs-6">Pequeno</span>
            <span class="badge bg-warning fs-4">Grande</span>
        </div>
    `);
}

