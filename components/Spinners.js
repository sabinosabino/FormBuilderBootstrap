// Spinner Básico (Círculo)
function getSpinnerBasic() {
    return getTemplate(`
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    `);
}

// Spinner com Texto (Círculo)
function getSpinnerWithText() {
    return getTemplate(`
        <div class="d-flex align-items-center">
            <div class="spinner-border me-3" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <strong>Carregando...</strong>
        </div>
    `);
}

// Spinner com Cores
function getSpinnerWithColors() {
    return getTemplate(`
        <div class="d-flex justify-content-around">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>
    `);
}

// Spinner com Tamanhos
function getSpinnerWithSizes() {
    return getTemplate(`
        <div class="d-flex justify-content-around">
            <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>
    `);
}

// Spinner Listrado (Barra)
function getSpinnerStriped() {
    return getTemplate(`
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    `);
}

// Spinner com Cores (Barra)
function getSpinnerStripedWithColors() {
    return getTemplate(`
        <div class="d-flex justify-content-around">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>
    `);
}
