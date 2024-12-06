// Figura Básica
function getFigureBasic() {
    return getTemplate(`
        <figure class="figure">
            <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="Imagem básica">
            <figcaption class="figure-caption">Uma legenda simples para a figura.</figcaption>
        </figure>
    `);
}

// Figura com Legenda no Topo
function getFigureCaptionTop() {
    return getTemplate(`
        <figure class="figure">
            <figcaption class="figure-caption text-start mb-2">Legenda no topo.</figcaption>
            <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="Imagem com legenda no topo">
        </figure>
    `);
}

// Figura com Alinhamento
function getFigureAlignment() {
    return getTemplate(`
        <div class="text-center">
            <figure class="figure">
                <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="Figura alinhada">
                <figcaption class="figure-caption text-center">Legenda alinhada ao centro.</figcaption>
            </figure>
        </div>
    `);
}

// Figura com Texto Personalizado
function getFigureCustomText() {
    return getTemplate(`
        <figure class="figure">
            <img src="https://via.placeholder.com/150" class="figure-img img-fluid rounded" alt="Imagem com legenda personalizada">
            <figcaption class="figure-caption text-muted">Este é um exemplo de texto personalizado em uma legenda.</figcaption>
        </figure>
    `);
}

// Figura Responsiva
function getFigureResponsive() {
    return getTemplate(`
        <div class="container">
            <figure class="figure">
                <img src="https://via.placeholder.com/1920x1080" class="figure-img img-fluid rounded" alt="Figura responsiva">
                <figcaption class="figure-caption text-center">Figura responsiva que se ajusta ao container.</figcaption>
            </figure>
        </div>
    `);
}
