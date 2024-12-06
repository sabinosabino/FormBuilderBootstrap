// Row.js
function getRowHTML() {
    // Retorna uma row Bootstrap com uma área droppable interna
return getTemplate(`
            <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
            </div>
    `);
}
