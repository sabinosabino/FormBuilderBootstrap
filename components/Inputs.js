function getSelect() {
    return getTemplate(`<select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>`)
}

function getSelectLarge() {
    return getTemplate(`
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    `);
}


function getSelectSmall() {
    return getTemplate(`
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    `);
}


function getSelectMultiple() {
    return getTemplate(`
        <select class="form-select" multiple aria-label="multiple select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    `);
}

function getSelectWithDisabledOption() {
    return getTemplate(`
        <select class="form-select" aria-label="Select example with disabled option">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2" disabled>Two (disabled)</option>
            <option value="3">Three</option>
        </select>
    `);
}

function getSelectWithOptGroups() {
    return getTemplate(`
        <select class="form-select" aria-label="Example with optgroups">
            <option selected>Open this select menu</option>
            <optgroup label="Group 1">
                <option value="1">One</option>
                <option value="2">Two</option>
            </optgroup>
            <optgroup label="Group 2">
                <option value="3">Three</option>
                <option value="4">Four</option>
            </optgroup>
        </select>
    `);
}
function getChecks() {
    return getTemplate(`
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
    `);
}

function getChecksIndeterminate() {
    return getTemplate(`
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
  <label class="form-check-label" for="flexCheckIndeterminate">
    Indeterminate checkbox
  </label>
</div>
    `);
}


function getChecksDisable() {
    return getTemplate(`
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
  <label class="form-check-label" for="flexCheckDisabled">
    Disabled checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexCheckCheckedDisabled">
    Disabled checked checkbox
  </label>
</div>
    `);
}
function getRadios() {
    return getTemplate(`
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
    `);
}

function getRadiosDisable() {
    return getTemplate(`
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
  <label class="form-check-label" for="flexRadioDisabled">
    Disabled radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexRadioCheckedDisabled">
    Disabled checked radio
  </label>
</div>
    `);
}


function getRadiosSwitches() {
    return getTemplate(`
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled>
  <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled>
  <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
</div>
    `);
}


function getRadiosCheckInline() {
    return getTemplate(`
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
  <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
    `);
}

function getRadiosRadioInline() {
    return getTemplate(`
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
  <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
    `);
}

//RANGE

function getRangeBasic() {
    return getTemplate(`
        <label for="customRange1" class="form-label">Exemplo de slider básico</label>
        <input type="range" class="form-range" id="customRange1">
    `);
}
function getRangeSteps() {
    return getTemplate(`
        <label for="customRange2" class="form-label">Slider com múltiplos passos</label>
        <input type="range" class="form-range" min="0" max="5" step="1" id="customRange2">
    `);
}
function getRangeDisabled() {
    return getTemplate(`
        <label for="customRange3" class="form-label">Slider desabilitado</label>
        <input type="range" class="form-range" id="customRange3" disabled>
    `);
}
function getRangeCustom() {
    return getTemplate(`
        <label for="customRange4" class="form-label">Slider com cor personalizada</label>
        <input type="range" class="form-range bg-primary" id="customRange4">
    `);
}


//INPUT GROUP

function getInputGroupBasic() {
    return getTemplate(`
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
    `);
}
function getInputGroupPrefixSuffix() {
    return getTemplate(`
        <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" placeholder="Amount" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
        </div>
    `);
}
function getInputGroupWithButtons() {
    return getTemplate(`
        <div class="input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Example text with button" aria-describedby="button-addon1">
        </div>
    `);
}
function getInputGroupWithDropdown() {
    return getTemplate(`
        <div class="input-group mb-3">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button">
        </div>
    `);
}
function getInputGroupWithCheckbox() {
    return getTemplate(`
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
            </div>
            <input type="text" class="form-control" aria-label="Text input with checkbox">
        </div>
    `);
}
function getInputGroupWithRadio() {
    return getTemplate(`
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
            </div>
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    `);
}
function getInputGroupMultipleElements() {
    return getTemplate(`
        <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
        </div>
    `);
}

//float label

function getInputGroupFloatingLabelBasic() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
    `);
}
function getInputGroupFloatingLabelWithPrefix() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" id="floatingUsername" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <label for="floatingUsername">Username</label>
        </div>
    `);
}
function getInputGroupFloatingLabelWithSuffix() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <div class="input-group">
                <input type="text" class="form-control" id="floatingAmount" placeholder="Amount">
                <span class="input-group-text">$</span>
            </div>
            <label for="floatingAmount">Amount</label>
        </div>
    `);
}
function getInputGroupFloatingLabelWithMultipleElements() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <div class="input-group">
                <span class="input-group-text">With label</span>
                <input type="text" class="form-control" id="floatingMultiple" placeholder="First Name">
            </div>
            <label for="floatingMultiple">First name</label>
        </div>
    `);
}
function getInputGroupFloatingLabelWithCheckbox() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                </div>
                <input type="text" class="form-control" id="floatingCheckbox" placeholder="Text with checkbox">
            </div>
            <label for="floatingCheckbox">Text input with checkbox</label>
        </div>
    `);
}
function getInputGroupFloatingLabelWithRadio() {
    return getTemplate(`
        <div class="form-floating mb-3">
            <div class="input-group">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
                </div>
                <input type="text" class="form-control" id="floatingRadio" placeholder="Text with radio button">
            </div>
            <label for="floatingRadio">Text input with radio button</label>
        </div>
    `);
}


function getInputLabel(){
    return `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>`
}

function getInputLabelSmall(){
    return `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
</div>`
}

function getInputLabelMedium(){
    return `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input class="form-control form-control-md" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
</div>`
}


function getInputFile(){
    return `<div class="mb-3">
   <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>`
}


function getInputDataList(){
    return `<label for="exampleDataList" class="form-label">Datalist example</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
<datalist id="datalistOptions">
  <option value="San Francisco">
  <option value="New York">
  <option value="Seattle">
  <option value="Los Angeles">
  <option value="Chicago">
</datalist>`
}