function renderSize({size, activated, onClick}){
    const { name, imgSrc, price } = size;
    const sizeDiv = document.createElement('div');
    sizeDiv.classList.add('size', 'size--small');

    sizeDiv.onclick = () => onClick(size);

    const sizeImg = document.createElement('img');
    sizeImg.src = imgSrc;
    sizeImg.alt = name;
    
    const sizeDescript = document.createElement('div');
    sizeDescript.innerHTML = name;

    const sizeSpan = document.createElement('span');
    sizeSpan.innerText = price;
    sizeSpan.classList.add('size__price');

    function setSizeActivate(){
        
        sizeDiv.classList.add('size--active');
    }

    if(activated){
        setSizeActivate();
    }
    
    sizeDescript.append(sizeSpan);
    sizeDiv.append(sizeImg, sizeDescript);

    return sizeDiv;
}