// Column.js
function getColumnHTML() {
    return getTemplate(`
            <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            </div>
    `);
}

function getColumn3X3X3() {
    return getTemplate(`
            <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                
                <div class="component-wrapper col">
                    <button class="remove-btn" onclick="removeComponent(this)">x</button>
                    <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    </div>
                </div>

                <div class="component-wrapper col">
                    <button class="remove-btn" onclick="removeComponent(this)">x</button>
                    <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    </div>
                </div>

                <div class="component-wrapper col">
                    <button class="remove-btn" onclick="removeComponent(this)">x</button>
                    <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    </div>
                </div>
            </div>
    `);
}

// Colunas Iguais
function getColumnsEqual() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>

            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>

            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>
        </div>
    `);
}


// Colunas com Tamanhos Diferentes
function getColumnsDifferentSizes() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col-4">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>

            <div class="component-wrapper col-8">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>
        </div>
    `);
}

// Colunas Responsivas
function getColumnsResponsive() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col-sm-4 col-md-6">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>

            <div class="component-wrapper col-sm-8 col-md-6">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                </div>
            </div>
        </div>
    `);
}


// Colunas com Alinhamento
function getColumnsAlignment() {
    return getTemplate(`
        <div class="row align-items-center droppable-area" style="height: 100px;" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Alinhamento Centralizado
                </div>
            </div>
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Alinhamento Centralizado
                </div>
            </div>
        </div>
    `);
}

function getColumnsWithGutters() {
    return getTemplate(`
        <div class="row g-3 droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna com Espaçamento
                </div>
            </div>
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna com Espaçamento
                </div>
            </div>
        </div>
    `);
}


// Colunas Empilhadas em Dispositivos Pequenos
function getColumnsStacked() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col-12 col-md-6">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna 1 (Empilhada em XS, metade em MD)
                </div>
            </div>
            <div class="component-wrapper col-12 col-md-6">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna 2 (Empilhada em XS, metade em MD)
                </div>
            </div>
        </div>
    `);
}
function getColumnsOffset() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col-4 offset-2">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna com Offset (2/12 de espaço antes)
                </div>
            </div>
            <div class="component-wrapper col-6">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna 2
                </div>
            </div>
        </div>
    `);
}
function getColumnsAuto() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col-auto">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Conteúdo Ajustável
                </div>
            </div>
            <div class="component-wrapper col">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna Flexível
                </div>
            </div>
        </div>
    `);
}
function getColumnsColored() {
    return getTemplate(`
        <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            <div class="component-wrapper col bg-primary text-white">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna Azul
                </div>
            </div>
            <div class="component-wrapper col bg-success text-white">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna Verde
                </div>
            </div>
            <div class="component-wrapper col bg-danger text-white">
                <button class="remove-btn" onclick="removeComponent(this)">x</button>
                <div class="col-inner droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                    Coluna Vermelha
                </div>
            </div>
        </div>
    `);
}
