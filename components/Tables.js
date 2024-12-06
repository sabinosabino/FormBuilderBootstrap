// Tabela Básica
function getTableBasic() {
    return getTemplate(`
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">País</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>João</td>
                    <td>25</td>
                    <td>Brasil</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Maria</td>
                    <td>30</td>
                    <td>Portugal</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Carlos</td>
                    <td>28</td>
                    <td>Espanha</td>
                </tr>
            </tbody>
        </table>
    `);
}

// Tabela com Bordas
function getTableBordered() {
    return getTemplate(`
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Notebook</td>
                    <td>$1,200</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Smartphone</td>
                    <td>$800</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Tablet</td>
                    <td>$400</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
    `);
}

// Tabela com Listras
function getTableStriped() {
    return getTemplate(`
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Usuário</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>João</td>
                    <td>joao@example.com</td>
                    <td>Ativo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Maria</td>
                    <td>maria@example.com</td>
                    <td>Inativo</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Carlos</td>
                    <td>carlos@example.com</td>
                    <td>Ativo</td>
                </tr>
            </tbody>
        </table>
    `);
}

// Tabela com Hover
function getTableHover() {
    return getTemplate(`
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Projeto</th>
                    <th scope="col">Equipe</th>
                    <th scope="col">Prazo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Website</td>
                    <td>Equipe A</td>
                    <td>15/12/2024</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>App Mobile</td>
                    <td>Equipe B</td>
                    <td>01/01/2025</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Dashboard</td>
                    <td>Equipe C</td>
                    <td>30/11/2024</td>
                </tr>
            </tbody>
        </table>
    `);
}

// Tabela Pequena
function getTableSmall() {
    return getTemplate(`
        <table class="table table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Cidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Ana</td>
                    <td>22</td>
                    <td>São Paulo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Pedro</td>
                    <td>34</td>
                    <td>Rio de Janeiro</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Sofia</td>
                    <td>28</td>
                    <td>Curitiba</td>
                </tr>
            </tbody>
        </table>
    `);
}
