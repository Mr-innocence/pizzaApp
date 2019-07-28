import { onToppingDivClick } from './onToppingDivClick';

export function renderTopping({ topping, activated, onClick}){
    const {imgSrc, name} = topping;
    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    toppingDiv.onclick = () => onToppingDivClick(topping);


    function setActivate(){
        toppingDiv.classList.add('topping--active');
    }

    const toppingImg = document.createElement('img')
    toppingImg.src = imgSrc;
    toppingImg.alt = name;

    const nameSpan = document.createElement('span');
    nameSpan.innerText = name;

    if(activated){
        setActivate();
    }

    toppingDiv.append(toppingImg, nameSpan);

    return toppingDiv;
}