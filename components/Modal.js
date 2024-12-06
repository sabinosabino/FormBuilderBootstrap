// Modal Básico com Botão
function getModalBasic() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                Abrir Modal Básico
            </button>
            <div class="modal" tabindex="-1" id="basicModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Básico</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Este é um modal básico do Bootstrap 5.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary">Salvar mudanças</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

// Modal com Tamanhos Personalizados e Botões
function getModalCustomSizes() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">
                Abrir Modal Grande
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#smallModal">
                Abrir Modal Pequeno
            </button>
            <div class="modal" tabindex="-1" id="largeModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Grande</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Este é um modal grande.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" tabindex="-1" id="smallModal">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Pequeno</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Este é um modal pequeno.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

// Modal Centralizado com Botão
function getModalCentered() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#centeredModal">
                Abrir Modal Centralizado
            </button>
            <div class="modal" tabindex="-1" id="centeredModal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Centralizado</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Este é um modal centralizado na tela.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

// Modal Rolável com Botão
function getModalScrollable() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#scrollableModal">
                Abrir Modal Rolável
            </button>
            <div class="modal" tabindex="-1" id="scrollableModal">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Rolável</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Este é um modal com conteúdo rolável. Adicione muito texto para testar a rolagem.</p>
                            <p>Lorem ipsum dolor sit amet...</p>
                            <!-- Adicione mais texto ou conteúdo -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
