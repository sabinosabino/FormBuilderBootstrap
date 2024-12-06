// Imagem Básica
function getImageBasic() {
    return getTemplate(`
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="img-fluid" alt="Imagem básica">
    `);
}

// Imagem com Borda Arredondada
function getImageRounded() {
    return getTemplate(`
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="rounded img-fluid" alt="Imagem com borda arredondada">
    `);
}

// Imagem em Formato de Círculo
function getImageCircle() {
    return getTemplate(`
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="rounded-circle img-fluid" alt="Imagem circular">
    `);
}

// Imagem com Thumbnail
function getImageThumbnail() {
    return getTemplate(`
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="img-thumbnail" alt="Imagem com thumbnail">
    `);
}

// Imagem Responsiva
function getImageResponsive() {
    return getTemplate(`
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="img-fluid" alt="Imagem responsiva">
        <p class="mt-2">A classe <code>.img-fluid</code> faz com que a imagem seja redimensionada de forma responsiva para o container pai.</p>
    `);
}

// Imagem com Alinhamento
function getImageAlignment() {
    return getTemplate(`
        <div class="text-center">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pontotel.com.br%2Fimagem-corporativa%2F&psig=AOvVaw36S91iIlGDSoF5A94rWqJd&ust=1733594200727000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiSpu3bk4oDFQAAAAAdAAAAABAR" class="rounded mx-auto d-block" alt="Imagem centralizada">
        </div>
        <p class="text-center mt-2">A imagem está alinhada ao centro usando utilitários de Bootstrap.</p>
    `);
}
