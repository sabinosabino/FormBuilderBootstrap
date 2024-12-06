// Cabeçalhos (Headings)
function getTypographyHeadings() {
    return getTemplate(`
        <div>
            <h1>Cabeçalho 1 (h1)</h1>
        </div>
    `);
}

// Texto com Estilos
function getTypographyTextStyles() {
    return getTemplate(`
        <div>
            <p class="lead">Este é um parágrafo de exemplo com o estilo <b>lead</b>.</p>
            <p><small class="text-muted">Texto pequeno e atenuado.</small></p>
            <p><strong>Texto em negrito.</strong></p>
            <p><em>Texto em itálico.</em></p>
            <p><mark>Texto destacado.</mark></p>
            <p class="text-primary">Texto azul (primário).</p>
            <p class="text-danger">Texto vermelho (perigo).</p>
        </div>
    `);
}

// Alinhamento de Texto
function getTypographyTextAlignment() {
    return getTemplate(`
        <div>
            <p class="text-start">Texto alinhado à esquerda.</p>
            <p class="text-center">Texto centralizado.</p>
            <p class="text-end">Texto alinhado à direita.</p>
            <p class="text-justify">Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
    `);
}

// Exemplo de Blockquote
function getTypographyBlockquote() {
    return getTemplate(`
        <figure>
            <blockquote class="blockquote">
                <p>"Esta é uma citação de exemplo."</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Alguém famoso em <cite title="Título da fonte">Fonte Famosa</cite>
            </figcaption>
        </figure>
    `);
}

// Listas Ordenadas e Não Ordenadas
function getTypographyLists() {
    return getTemplate(`
        <div>
            <h5>Lista Não Ordenada</h5>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <h5>Lista Ordenada</h5>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </div>
    `);
}

// Texto com Truncamento
function getTypographyTextTruncate() {
    return getTemplate(`
        <div style="width: 300px;">
            <p class="text-truncate">Este é um texto longo que será truncado se ultrapassar o limite da largura do container.</p>
        </div>
    `);
}

// Display Headings
function getTypographyDisplayHeadings() {
    return getTemplate(`
        <div>
            <h1 class="display-1">Display 1</h1>
        </div>
    `);
}
