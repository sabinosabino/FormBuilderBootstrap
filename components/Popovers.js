// Popover Básico
function getPopoverBasic() {
    return getTemplate(`
        <button type="button" class="btn btn-primary" data-bs-toggle="popover" title="Título do Popover" data-bs-content="Este é o conteúdo do popover.">
            Clique para ver o Popover
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl);
                });
            });
        </script>
    `);
}

// Popover com Direções
function getPopoverWithDirections() {
    return getTemplate(`
        <div>
            <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="top" title="Topo" data-bs-content="Popover no topo.">
                Topo
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="right" title="Direita" data-bs-content="Popover na direita.">
                Direita
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="bottom" title="Base" data-bs-content="Popover na base.">
                Base
            </button>
            <button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-placement="left" title="Esquerda" data-bs-content="Popover na esquerda.">
                Esquerda
            </button>
        </div>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl);
                });
            });
        </script>
    `);
}

// Popover com HTML
function getPopoverWithHTML() {
    return getTemplate(`
        <button type="button" class="btn btn-success" data-bs-toggle="popover" data-bs-html="true" title="<b>HTML no Título</b>" data-bs-content="<em>Este popover</em> suporta <u>HTML</u>.">
            Popover com HTML
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl);
                });
            });
        </script>
    `);
}

// Popover com Desativação Automática
function getPopoverDismissible() {
    return getTemplate(`
        <button type="button" class="btn btn-warning" data-bs-toggle="popover" data-bs-trigger="focus" title="Popover com Desativação" data-bs-content="Este popover será desativado ao perder o foco.">
            Clique para ver (auto-desativação)
        </button>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                    return new bootstrap.Popover(popoverTriggerEl);
                });
            });
        </script>
    `);
}
