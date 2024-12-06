// Tooltip Básico
function getTooltipBasic() {
    return getTemplate(`
        <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Este é um tooltip básico.">
            Passe o mouse ou toque aqui
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl);
                });
            });
        </script>
    `);
}

// Tooltip com Direções
function getTooltipWithDirections() {
    return getTemplate(`
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip no topo.">
                Topo
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip à direita.">
                Direita
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip na base.">
                Base
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip à esquerda.">
                Esquerda
            </button>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl);
                });
            });
        </script>
    `);
}

// Tooltip com HTML
function getTooltipWithHTML() {
    return getTemplate(`
        <button type="button" class="btn btn-success" data-bs-toggle="tooltip" data-bs-html="true" title="<b>Este tooltip</b> suporta <i>HTML</i>.">
            Tooltip com HTML
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl);
                });
            });
        </script>
    `);
}

// Tooltip com Desativação Automática
function getTooltipDismissible() {
    return getTemplate(`
        <button type="button" class="btn btn-warning" data-bs-toggle="tooltip" data-bs-trigger="focus" title="Este tooltip será fechado ao perder o foco.">
            Tooltip com Auto-Desativação
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl);
                });
            });
        </script>
    `);
}
