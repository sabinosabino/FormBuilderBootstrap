function getBreadcrumbBasic() {
    return getTemplate(`
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    `);
}


function getBreadcrumbCustomSeparator() {
    return getTemplate(`
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    `);
}
function getBreadcrumbDisabledLink() {
    return getTemplate(`
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#" class="disabled" tabindex="-1" aria-disabled="true">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    `);
}


function getBreadcrumbActiveLinksOnly() {
    return getTemplate(`
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item"><a href="#">Data</a></li>
            </ol>
        </nav>
    `);
}

function getBreadcrumbCustomStyle() {
    return getTemplate(`
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 0.25rem;">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    `);
}

