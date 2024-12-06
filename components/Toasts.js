// Toast Básico
function getToastBasic() {
    return getTemplate(`
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Notificação</strong>
                <small>Agora</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
            </div>
            <div class="toast-body">
                Este é um toast básico.
            </div>
        </div>
    `);
}

// Toast com Auto-Hide
function getToastAutoHide() {
    return getTemplate(`
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000">
            <div class="toast-header">
                <strong class="me-auto">Auto-Hide</strong>
                <small>5 segundos</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
            </div>
            <div class="toast-body">
                Este toast será fechado automaticamente após 5 segundos.
            </div>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const toastEl = document.querySelector('.toast');
                const toast = new bootstrap.Toast(toastEl);
                toast.show();
            });
        </script>
    `);
}

// Toast com Cores
function getToastWithColors() {
    return getTemplate(`
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-success text-white">
                <strong class="me-auto">Sucesso</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Fechar"></button>
            </div>
            <div class="toast-body">
                Ação realizada com sucesso!
            </div>
        </div>
        <div class="toast mt-2" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header bg-danger text-white">
                <strong class="me-auto">Erro</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Fechar"></button>
            </div>
            <div class="toast-body">
                Ocorreu um erro durante a operação.
            </div>
        </div>
    `);
}

// Toast com Vários Itens
function getToastMultiple() {
    return getTemplate(`
        <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center">
            <div class="toast-container">
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Notificação 1</strong>
                        <small>Agora</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
                    </div>
                    <div class="toast-body">
                        Este é o primeiro toast.
                    </div>
                </div>
                <div class="toast mt-2" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">Notificação 2</strong>
                        <small>2 minutos atrás</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
                    </div>
                    <div class="toast-body">
                        Este é o segundo toast.
                    </div>
                </div>
            </div>
        </div>
    `);
}
