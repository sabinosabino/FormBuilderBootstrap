// Nav Básico
function getNavBasic() {
    return getTemplate(`
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Ativo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Outro Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Desabilitado</a>
            </li>
        </ul>
    `);
}

// Nav com Pills
function getNavPills() {
    return getTemplate(`
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Pill Ativo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pill 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pill 3</a>
            </li>
        </ul>
    `);
}

// Tabs Básicas
function getTabsBasic() {
    return getTemplate(`
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tab Ativo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tab 2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Tab 3</a>
            </li>
        </ul>
    `);
}

// Tabs com Conteúdo
function getTabsWithContent() {
    return getTemplate(`
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                Conteúdo para a aba Home.
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                Conteúdo para a aba Profile.
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                Conteúdo para a aba Contact.
            </div>
        </div>
    `);
}

// Nav Vertical
function getNavVertical() {
    return getTemplate(`
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Ativo</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Outro Link</a>
            </li>
        </ul>
    `);
}

// Nav com Dropdown
function getNavWithDropdown() {
    return getTemplate(`
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Ativo</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Ação</a></li>
                    <li><a class="dropdown-item" href="#">Outra ação</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Algo mais</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    `);
}


function getBeautifulNavbar() {
    return getTemplate(`
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Minha Marca</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Recursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Preços</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Ação</a></li>
                                <li><a class="dropdown-item" href="#">Outra ação</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Algo mais</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                        <button class="btn btn-outline-light" type="submit">Pesquisar</button>
                    </form>
                </div>
            </div>
        </nav>
    `);
}
