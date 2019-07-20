function renderSizes(state){
    const {sizes, selectedSizeName} = state;
    const sizesDiv = document.createElement('div');
    sizesDiv.classList.add('sizes__container');

    function getSizeDiv(size){
        const { name } = size;
        const activated = selectedSizeName.includes(name);
        return renderSize({size, activated, onClick: onSizeClick});
    }
    const sizeDivs = sizes.map(getSizeDiv);
    sizesDiv.append(...sizeDivs);
    
    return sizesDiv;
}
