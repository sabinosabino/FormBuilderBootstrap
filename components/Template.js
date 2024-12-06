// Row.js
function getTemplate(elemento) {
    // Retorna uma row Bootstrap com uma área droppable interna
    return `
        <div class="component-wrapper">
            <button class="remove-btn" onclick="removeComponent(this)">x</button>
            ${elemento}
            </div>
        </div>
    `;
}
