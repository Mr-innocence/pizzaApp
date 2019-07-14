function renderToppings(state){
    const { toppings, selectedToppingNames } = state;
    
    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add("toppings__container");

    function getToppingDiv(topping){
        const { name } = topping;
        const activated = selectedToppingNames.includes(name);

        return renderTopping({ topping, activated, onClick: onToppingDivClick});
    }
    const toppingDivs = toppings.map(getToppingDiv);
    toppingsDiv.append(...toppingDivs);

    return toppingsDiv
}