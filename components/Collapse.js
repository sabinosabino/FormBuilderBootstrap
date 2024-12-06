// Collapse Básico
function getCollapseBasic() {
    return getTemplate(`
        <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link com Toggle
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Este é um exemplo de conteúdo que pode ser colapsado.
            </div>
        </div>
    `);
}

// Collapse com Botão de Controle
function getCollapseWithButton() {
    return getTemplate(`
        <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseButtonExample" aria-expanded="false" aria-controls="collapseButtonExample">
            Mostrar/Esconder
        </button>
        <div class="collapse mt-2" id="collapseButtonExample">
            <div class="card card-body">
                Este é um exemplo de collapse controlado por botão.
            </div>
        </div>
    `);
}

// Collapse com Múltiplos Itens
function getCollapseMultiple() {
    return getTemplate(`
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Primeiro Item
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Este é o corpo do primeiro item.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Segundo Item
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Este é o corpo do segundo item.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Terceiro Item
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Este é o corpo do terceiro item.
                    </div>
                </div>
            </div>
        </div>
    `);
}

// Collapse com Conteúdo Horizontal
function getCollapseHorizontal() {
    return getTemplate(`
        <div style="min-height: 120px;">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHorizontalExample" aria-expanded="false" aria-controls="collapseHorizontalExample">
                Mostrar/Esconder Horizontal
            </button>
            <div class="collapse collapse-horizontal" id="collapseHorizontalExample">
                <div class="card card-body" style="width: 300px;">
                    Este é um exemplo de collapse horizontal.
                </div>
            </div>
        </div>
    `);
}
