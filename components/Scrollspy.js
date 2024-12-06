// Scrollspy Básico
function getScrollspyBasic() {
    return getTemplate(`
        <div class="row">
            <nav id="navbar-example" class="col-md-3 d-none d-md-block bg-light position-fixed">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#section1">Seção 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section2">Seção 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section3">Seção 3</a>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" class="scrollspy-example col-md-9 offset-md-3" tabindex="0" style="height: 400px; overflow-y: scroll;">
                <h4 id="section1">Seção 1</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <h4 id="section2">Seção 2</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <h4 id="section3">Seção 3</h4>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
    `);
}

// Scrollspy com Navbar
function getScrollspyWithNavbar() {
    return getTemplate(`
        <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
            <a class="navbar-brand" href="#">Scrollspy Navbar</a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#item1">Item 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#item2">Item 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#item3">Item 3</a>
                </li>
            </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0" style="height: 400px; overflow-y: scroll;">
            <h4 id="item1">Item 1</h4>
            <p>Lorem ipsum dolor sit amet...</p>
            <h4 id="item2">Item 2</h4>
            <p>Lorem ipsum dolor sit amet...</p>
            <h4 id="item3">Item 3</h4>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
    `);
}

// Scrollspy Vertical com Lista de Navegação
function getScrollspyVertical() {
    return getTemplate(`
        <div class="row">
            <div class="col-md-3">
                <nav id="scrollspy-list-example" class="list-group">
                    <a class="list-group-item list-group-item-action active" href="#list-item-1">List Item 1</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-2">List Item 2</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-3">List Item 3</a>
                </nav>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#scrollspy-list-example" data-bs-offset="0" class="scrollspy-example col-md-9" tabindex="0" style="height: 400px; overflow-y: scroll;">
                <h4 id="list-item-1">List Item 1</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <h4 id="list-item-2">List Item 2</h4>
                <p>Lorem ipsum dolor sit amet...</p>
                <h4 id="list-item-3">List Item 3</h4>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
    `);
}
