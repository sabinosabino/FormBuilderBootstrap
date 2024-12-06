// Supondo que você tenha um array de componentes, cada um com um campo 'name' e 'getHTML'
const availableComponents = [
    { name: 'Row', getHTML: getRowHTML },



    { name: 'Colunas', getHTML: getColumnHTML },
    { name: 'Colunas 3,3,3', getHTML: getColumn3X3X3 },
    { name: 'Colunas Iguais', getHTML: getColumnsEqual },
    { name: 'Colunas com Tamanhos Diferentes', getHTML: getColumnsDifferentSizes },
    { name: 'Colunas Responsivas', getHTML: getColumnsResponsive },
    { name: 'Colunas com Alinhamento', getHTML: getColumnsAlignment },
    { name: 'Colunas com Espaçamento', getHTML: getColumnsWithGutters },
    { name: 'Colunas Empilhadas', getHTML: getColumnsStacked },
    { name: 'Colunas com Offset', getHTML: getColumnsOffset },
    { name: 'Colunas Auto', getHTML: getColumnsAuto },
    { name: 'Colunas Coloridas', getHTML: getColumnsColored },
    
    
    
    { name: 'Button', getHTML: getButtonHTML },
    { name: 'Form', getHTML: getForm },
    { name: 'Form Grid', getHTML: getFormGrid },
    { name: 'Accordion', getHTML: getAccordion },
    { name: 'Alert', getHTML: getAlert },
    { name: 'Select', getHTML: getSelect },
    { name: 'Select Grande', getHTML: getSelectLarge },
    { name: 'Select Mutiple', getHTML: getSelectMultiple },
    { name: 'Select Pequeno', getHTML: getSelectSmall },
    { name: 'Select Desabilitado', getHTML: getSelectWithDisabledOption },
    { name: 'Select Grupos', getHTML: getSelectWithOptGroups },
    { name: 'Checkbox', getHTML: getChecks },
    { name: 'Checkbox Desabilitado', getHTML: getChecksDisable },
    { name: 'Checkbox Indeterminado', getHTML: getChecksIndeterminate },
    { name: 'Radios', getHTML: getRadios },
    { name: 'Radios Inline', getHTML: getRadiosCheckInline },
    { name: 'Radios Desabilitado', getHTML: getRadiosDisable },
    { name: 'Check Switches', getHTML: getRadiosSwitches },
    { name: 'Check Inline', getHTML: getRadiosCheckInline },
    { name: 'Range Básico', getHTML: getRangeBasic },
    { name: 'Range com Passos', getHTML: getRangeSteps },
    { name: 'Range Desabilitado', getHTML: getRangeDisabled },
    { name: 'Range Personalizado', getHTML: getRangeCustom },
    { name: 'Check Inline', getHTML: getRadiosCheckInline },

    { name: 'Input Group Básico', getHTML: getInputGroupBasic },
    { name: 'Input Group Prefixo e Sufixo', getHTML: getInputGroupPrefixSuffix },
    { name: 'Input Group com Botões', getHTML: getInputGroupWithButtons },
    { name: 'Input Group com Dropdown', getHTML: getInputGroupWithDropdown },
    { name: 'Input Group com Checkbox', getHTML: getInputGroupWithCheckbox },
    { name: 'Input Group com Radio Button', getHTML: getInputGroupWithRadio },
    { name: 'Input Group com Múltiplos Elementos', getHTML: getInputGroupMultipleElements },


    { name: 'Input DataList', getHTML: getInputDataList },
    { name: 'Input File', getHTML: getInputFile },
    { name: 'Input Com Label', getHTML: getInputLabel },
    { name: 'Input Com Medio', getHTML: getInputLabelMedium },
    { name: 'Input Com Pequeno', getHTML: getInputLabelSmall },


    { name: 'Floating Label Básico', getHTML: getInputGroupFloatingLabelBasic },
    { name: 'Floating Label com Prefixo', getHTML: getInputGroupFloatingLabelWithPrefix },
    { name: 'Floating Label com Sufixo', getHTML: getInputGroupFloatingLabelWithSuffix },
    { name: 'Floating Label com Múltiplos Elementos', getHTML: getInputGroupFloatingLabelWithMultipleElements },
    { name: 'Floating Label com Checkbox', getHTML: getInputGroupFloatingLabelWithCheckbox },
    { name: 'Floating Label com Radio Button', getHTML: getInputGroupFloatingLabelWithRadio },

    { name: 'Alerta com Botão de Fechar', getHTML: getAlertWithDismiss },
    { name: 'Alerta de Vários Estilos', getHTML: getAlertStyles },
    { name: 'Alerta com Links', getHTML: getAlertWithLinks },
    { name: 'Alerta com Ícones', getHTML: getAlertWithIcons },
    { name: 'Alerta com Gradiente', getHTML: getAlertGradient },

    { name: 'Badge Básica', getHTML: getBadgeBasic },
    { name: 'Badge com Estilos', getHTML: getBadgeStyles },
    { name: 'Badge com Link', getHTML: getBadgeWithLink },
    { name: 'Badge em Botões', getHTML: getBadgeInButtons },
    { name: 'Badge com Texto Personalizado', getHTML: getBadgeCustomText },
    { name: 'Badge com Tamanhos Personalizados', getHTML: getBadgeCustomSize },

    { name: 'Breadcrumb Básico', getHTML: getBreadcrumbBasic },
    { name: 'Breadcrumb com Separador Customizado', getHTML: getBreadcrumbCustomSeparator },
    { name: 'Breadcrumb com Link Desabilitado', getHTML: getBreadcrumbDisabledLink },
    { name: 'Breadcrumb com Links Ativos Apenas', getHTML: getBreadcrumbActiveLinksOnly },
    { name: 'Breadcrumb com Estilo Personalizado', getHTML: getBreadcrumbCustomStyle },

    { name: 'Botão Básico', getHTML: getButtonBasic },
    { name: 'Botão com Variações de Cores', getHTML: getButtonColors },
    { name: 'Botão Outline', getHTML: getButtonOutline },
    { name: 'Botão com Grande', getHTML: getButtonSizesLarge },
    { name: 'Botão com Pequeno', getHTML: getButtonSizesSmall },
    { name: 'Botão Desabilitado', getHTML: getButtonDisabled },
    { name: 'Botão com Ícones', getHTML: getButtonWithIcon },
    { name: 'Botão de Grupo', getHTML: getButtonGroup },
    { name: 'Botão com Dropdown', getHTML: getButtonDropdown },

    { name: 'Grupo de Botões Básico', getHTML: getButtonGroupBasic },
    { name: 'Grupo de Botões Grande', getHTML: getButtonGroupSizesLarge },
    { name: 'Grupo de Botões Pequeno', getHTML: getButtonGroupSizesSmall },
    { name: 'Grupo de Botões Vertical', getHTML: getButtonGroupVertical },
    { name: 'Grupo de Botões com Dropdown', getHTML: getButtonGroupWithDropdown },
    { name: 'Grupo de Botões com Checkboxes', getHTML: getButtonGroupCheckboxes },
    { name: 'Grupo de Botões com Radios', getHTML: getButtonGroupRadios },

    { name: 'Card Básico', getHTML: getCardBasic },
    { name: 'Card com Imagem no Topo', getHTML: getCardWithImageTop },
    { name: 'Card com Lista', getHTML: getCardWithList },
    { name: 'Card com Imagem de Fundo', getHTML: getCardWithImageBackground },
    { name: 'Card com Navegação', getHTML: getCardWithNavigation },
    { name: 'Card com Rodapé', getHTML: getCardWithFooter },
    { name: 'Deck de Cards', getHTML: getCardDeck },

    { name: 'Carousel Básico', getHTML: getCarouselBasic },
    { name: 'Carousel com Indicadores', getHTML: getCarouselWithIndicators },
    { name: 'Carousel com Legendas', getHTML: getCarouselWithCaptions },
    { name: 'Carousel com Intervalo Customizado', getHTML: getCarouselWithInterval },

    { name: 'Botão de Fechar Básico', getHTML: getCloseButtonBasic },
    { name: 'Botão de Fechar com Ícones', getHTML: getCloseButtonWithIcon },
    { name: 'Botão de Fechar em Alerta', getHTML: getCloseButtonInAlert },
    { name: 'Botão de Fechar em Modal', getHTML: getCloseButtonInModal },

    { name: 'Collapse Básico', getHTML: getCollapseBasic },
    { name: 'Collapse com Botão', getHTML: getCollapseWithButton },
    { name: 'Collapse com Múltiplos Itens', getHTML: getCollapseMultiple },
    { name: 'Collapse Horizontal', getHTML: getCollapseHorizontal },

    { name: 'Dropdown Básico', getHTML: getDropdownBasic },
    { name: 'Dropdown com Divisor', getHTML: getDropdownWithDivider },
    { name: 'Dropdown com Tamanhos Customizados', getHTML: getDropdownCustomSizes },
    { name: 'Dropdown com Direções Customizadas', getHTML: getDropdownCustomDirections },
    { name: 'Dropdown com Cabeçalhos', getHTML: getDropdownWithHeaders },

    { name: 'List Group Básico', getHTML: getListGroupBasic },
    { name: 'List Group com Links', getHTML: getListGroupWithLinks },
    { name: 'List Group com Cores', getHTML: getListGroupWithColors },
    { name: 'List Group com Conteúdo Customizado', getHTML: getListGroupCustomContent },
    { name: 'List Group com Checkbox', getHTML: getListGroupWithCheckbox },

    { name: 'Modal Básico', getHTML: getModalBasic },
    { name: 'Modal com Tamanhos Personalizados', getHTML: getModalCustomSizes },
    { name: 'Modal Centralizado', getHTML: getModalCentered },
    { name: 'Modal Rolável', getHTML: getModalScrollable },


    { name: 'Nav Básico', getHTML: getNavBasic },
    { name: 'Nav com Pills', getHTML: getNavPills },
    { name: 'Tabs Básicas', getHTML: getTabsBasic },
    { name: 'Tabs com Conteúdo', getHTML: getTabsWithContent },
    { name: 'Nav Vertical', getHTML: getNavVertical },
    { name: 'Nav com Dropdown', getHTML: getNavWithDropdown },
    { name: 'Nav Template', getHTML: getBeautifulNavbar },


    { name: 'Navbar Básica', getHTML: getNavbarBasic },
    { name: 'Navbar Escura', getHTML: getNavbarDark },
    { name: 'Navbar Fixa no Topo', getHTML: getNavbarFixedTop },
    { name: 'Navbar Transparente', getHTML: getNavbarTransparent },

    { name: 'Offcanvas Básico', getHTML: getOffcanvasBasic },
    { name: 'Offcanvas com Navegação', getHTML: getOffcanvasWithNav },
    { name: 'Offcanvas com Formulário', getHTML: getOffcanvasWithForm },
    { name: 'Offcanvas Rolável', getHTML: getOffcanvasScrollable },

    { name: 'Paginação Básica', getHTML: getPaginationBasic },
    { name: 'Paginação com Ícones', getHTML: getPaginationWithIcons },
    { name: 'Paginação com Estados', getHTML: getPaginationWithStates },
    { name: 'Paginação com Tamanhos', getHTML: getPaginationWithSizes },
    { name: 'Paginação Centralizada', getHTML: getPaginationCentered },

    { name: 'Popover Básico', getHTML: getPopoverBasic },
    { name: 'Popover com Direções', getHTML: getPopoverWithDirections },
    { name: 'Popover com HTML', getHTML: getPopoverWithHTML },
    { name: 'Popover Desativável', getHTML: getPopoverDismissible },


    { name: 'Barra de Progresso Básica', getHTML: getProgressBasic },
    { name: 'Barra Listrada', getHTML: getProgressStriped },
    { name: 'Barra Animada', getHTML: getProgressAnimated },
    { name: 'Progresso Empilhado', getHTML: getProgressStacked },
    { name: 'Barra de Progresso Verde', getHTML: getProgressSuccess },
    { name: 'Barra de Progresso Azul', getHTML: getProgressInfo },
    { name: 'Barra de Progresso Amarela', getHTML: getProgressWarning },
    { name: 'Barra de Progresso Vermelha', getHTML: getProgressDanger },


    { name: 'Scrollspy Básico', getHTML: getScrollspyBasic },
    { name: 'Scrollspy com Navbar', getHTML: getScrollspyWithNavbar },
    { name: 'Scrollspy Vertical', getHTML: getScrollspyVertical },


    { name: 'Spinner Básico', getHTML: getSpinnerBasic },
    { name: 'Spinner com Texto', getHTML: getSpinnerWithText },
    { name: 'Spinner com Cores', getHTML: getSpinnerWithColors },
    { name: 'Spinner com Tamanhos', getHTML: getSpinnerWithSizes },
    { name: 'Spinner Listrado', getHTML: getSpinnerStriped },
    { name: 'Spinner Listrado com Cores', getHTML: getSpinnerStripedWithColors },

    { name: 'Toast Básico', getHTML: getToastBasic },
    { name: 'Toast com Auto-Hide', getHTML: getToastAutoHide },
    { name: 'Toast com Cores', getHTML: getToastWithColors },
    { name: 'Toast com Múltiplos Itens', getHTML: getToastMultiple },
    

    { name: 'Tooltip Básico', getHTML: getTooltipBasic },
    { name: 'Tooltip com Direções', getHTML: getTooltipWithDirections },
    { name: 'Tooltip com HTML', getHTML: getTooltipWithHTML },
    { name: 'Tooltip Desativável', getHTML: getTooltipDismissible },

    { name: 'Texto Cabeçalhos', getHTML: getTypographyHeadings },
    { name: 'Texto Estilos de Texto', getHTML: getTypographyTextStyles },
    { name: 'Texto Alinhamento de Texto', getHTML: getTypographyTextAlignment },
    { name: 'Texto Blockquote', getHTML: getTypographyBlockquote },
    { name: 'Texto Listas', getHTML: getTypographyLists },
    { name: 'Texto Texto com Truncamento', getHTML: getTypographyTextTruncate },
    { name: 'Texto Display Headings', getHTML: getTypographyDisplayHeadings },


    { name: 'Imagem Básica', getHTML: getImageBasic },
    { name: 'Imagem com Borda Arredondada', getHTML: getImageRounded },
    { name: 'Imagem Circular', getHTML: getImageCircle },
    { name: 'Imagem com Thumbnail', getHTML: getImageThumbnail },
    { name: 'Imagem Responsiva', getHTML: getImageResponsive },
    { name: 'Imagem com Alinhamento', getHTML: getImageAlignment },


    { name: 'Tabela Básica', getHTML: getTableBasic },
    { name: 'Tabela com Bordas', getHTML: getTableBordered },
    { name: 'Tabela com Listras', getHTML: getTableStriped },
    { name: 'Tabela com Hover', getHTML: getTableHover },
    { name: 'Tabela Pequena', getHTML: getTableSmall },


    { name: 'Figura Básica', getHTML: getFigureBasic },
    { name: 'Figura com Legenda no Topo', getHTML: getFigureCaptionTop },
    { name: 'Figura com Alinhamento', getHTML: getFigureAlignment },
    { name: 'Figura com Texto Personalizado', getHTML: getFigureCustomText },
    { name: 'Figura Responsiva', getHTML: getFigureResponsive },
    // Adicione outros componentes conforme necessário
];

let draggedComponent = null;
let exportModal;

document.addEventListener("DOMContentLoaded", () => {
    const componentList = document.getElementById('component-list');
    const searchInput = document.getElementById('searchComponents');

    // Função para desenhar a lista de componentes filtrados
    function renderComponentList(filterText = '') {
        componentList.innerHTML = ''; // limpa a lista
        const filtered = availableComponents.filter(comp => 
            comp.name.toLowerCase().includes(filterText.toLowerCase())
        );
        filtered.forEach(comp => {
            const div = document.createElement('div');
            div.classList.add('component');
            div.draggable = true;
            div.textContent = comp.name;
            div.addEventListener('dragstart', (e) => {
                draggedComponent = comp;
            });
            componentList.appendChild(div);
        });
    }

    // Chama a função inicialmente para mostrar todos os componentes
    renderComponentList();

    // Ao digitar no campo de busca, filtrar a lista
    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value;
        renderComponentList(searchValue);
    });

    // Inicializa o modal do Bootstrap
    const modalEl = document.getElementById('exportModal');
    exportModal = new bootstrap.Modal(modalEl, {keyboard: false});
});

function allowDrop(event) {
    event.preventDefault();
}

function dropComponent(event) {
    event.preventDefault();
    if (draggedComponent) {
        const html = draggedComponent.getHTML();
        event.currentTarget.insertAdjacentHTML('beforeend', html);
        draggedComponent = null;
    }
}

function removeComponent(el) {
    const wrapper = el.closest('.component-wrapper');
    if (wrapper) {
        wrapper.remove();
    }
}

// Função que limpa o HTML, removendo atributos e classes desnecessárias
function cleanNode(node) {
    if (node.nodeType === 1) {
        // Remover event handlers inline e atributos não desejados
        const attributesToRemove = [];
        for (const attr of node.attributes) {
            if (attr.name.startsWith('on') || attr.name === 'draggable') {
                attributesToRemove.push(attr.name);
            }
        }
        for (const att of attributesToRemove) {
            node.removeAttribute(att);
        }

        // Se for um botão de remoção ou um elemento provisório, remover
        if (node.tagName.toLowerCase() === 'button' && node.textContent.trim() === 'x') {
            node.remove();
            return;
        }

        // Remover classes de edição
        if (node.classList && node.classList.length > 0) {
            const classesToRemove = [
                'component-wrapper',
                'droppable-area',
                'component',
                'col-inner'
            ];
            const filteredClasses = [...node.classList].filter(cl => !classesToRemove.includes(cl));
            node.className = filteredClasses.join(' ');
        }

        // Remover qualquer h3 de instrução
        if (node.tagName.toLowerCase() === 'h3' && node.textContent.includes('Arraste e solte componentes aqui')) {
            node.remove();
            return;
        }

        // Limpar recursivamente os filhos
        for (const child of [...node.childNodes]) {
            cleanNode(child);
        }
    }
}

function exportHTML() {
    const canvas = document.getElementById('canvas');
    // Clona o conteúdo do canvas
    const clone = canvas.cloneNode(true);

    // Limpa o clone removendo atributos e classes não desejadas
    cleanNode(clone);

    // Pega somente o HTML interno limpo do clone
    const finalHTML = clone.innerHTML.trim();

    const textarea = document.getElementById('exportedHTML');
    textarea.value = finalHTML;
    exportModal.show();
}

function copyHTML() {
    const textarea = document.getElementById('exportedHTML');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("HTML copiado para a área de transferência!");
}

function viewResult() {
    const textarea = document.getElementById('exportedHTML');
    const htmlContent = textarea.value;

    // Salva o HTML no localStorage
    localStorage.setItem('exportedHTML', htmlContent);

    // Abre a página preview.html em uma nova aba
    window.open('result.html', '_blank');
}
