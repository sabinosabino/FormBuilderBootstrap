function getForm() {
    return getTemplate(`
                <form>
                       <div class="row droppable-area" ondragover="allowDrop(event)" ondrop="dropComponent(event)">
                       </div>
                </form>
`)
}

function getFormGrid(){
       return getTemplate(`<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
  </div>
</div>`)
}