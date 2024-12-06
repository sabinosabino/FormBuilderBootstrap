function getCloseButtonBasic() {
    return getTemplate(`
        <button type="button" class="btn-close" aria-label="Fechar"></button>
    `);
}
function getCloseButtonWithIcon() {
    return getTemplate(`
        <button type="button" class="btn-close btn-close-white" aria-label="Fechar"></button>
    `);
}
function getCloseButtonInAlert() {
    return getTemplate(`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Este é um alerta com botão de fechar.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
        </div>
    `);
}
function getCloseButtonInModal() {
    return getTemplate(`
        <div class="modal" tabindex="-1" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Título do Modal</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div class="modal-body">
                        <p>Este é um modal com botão de fechar.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Salvar mudanças</button>
                    </div>
                </div>
            </div>
        </div>
    `);
}
