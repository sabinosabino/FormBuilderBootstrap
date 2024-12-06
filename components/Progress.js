// Barra de Progresso Básica
function getProgressBasic() {
    return getTemplate(`
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
    `);
}

// Barra de Progresso com Diferentes Cores
// Barra de Progresso Verde (Success)
function getProgressSuccess() {
    return getTemplate(`
        <div class="progress mb-2">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
    `);
}

// Barra de Progresso Azul (Info)
function getProgressInfo() {
    return getTemplate(`
        <div class="progress mb-2">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
    `);
}

// Barra de Progresso Amarela (Warning)
function getProgressWarning() {
    return getTemplate(`
        <div class="progress mb-2">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
    `);
}

// Barra de Progresso Vermelha (Danger)
function getProgressDanger() {
    return getTemplate(`
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
    `);
}


// Barra de Progresso Listrada
function getProgressStriped() {
    return getTemplate(`
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
    `);
}

// Barra de Progresso Animada
function getProgressAnimated() {
    return getTemplate(`
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
        </div>
    `);
}

// Barras de Progresso Empilhadas
function getProgressStacked() {
    return getTemplate(`
        <div class="progress">
            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            <div class="progress-bar bg-warning" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            <div class="progress-bar bg-danger" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
        </div>
    `);
}
