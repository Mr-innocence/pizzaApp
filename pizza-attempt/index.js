function renderTopping({ topping, active}){
    const {imgSrc, name} = topping;
    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    function setActive(){
        toppingDiv.classList.add('topping--active');
    }

    const toppingImg = document.createElement('img')
    toppingImg.src = imgSrc;
    toppingImg.alt = name;

    const nameSpan = document.createElement('span');
    nameSpan.innerText = name;

    if(active){
        setActive();
    }

    toppingDiv.append(toppingImg, nameSpan);

    return toppingDiv;
}

function renderToppings({toppings, selectedToppingNames}){
    const toppingsDiv = document.createElement('div');
    toppingsDiv.classList.add("toppings__container");

    function getToppingDiv(topping){
        const { name } = topping;
        const active = selectedToppingNames.includes(name);

        return renderTopping({ topping, active});
    }
    const toppingDivs = toppings.map(getToppingDiv);
    toppingsDiv.append(...toppingDivs);

    return toppingsDiv
}

function renderTitle({title}) {
    const titleH2 = document.createElement('h2');
    titleH2.innerText = title;

    return titleH2;
}

function renderChooseYourToppings(){
    const state = {
        toppings: [
            {
                name: 'Anchovy',
                imgSrc: './assets/toppings/anchovy.svg',
                price: 0.99,
            },
            {
                name: 'Bacon',
                imgSrc: './assets/toppings/bacon.svg',
                price: 0.99,
            },
            {
                name: 'Basil',
                imgSrc: './assets/toppings/basil.svg',
                price: 0.99,
            },
            {
                name: 'Chili',
                imgSrc: './assets/toppings/chili.svg',
                price: 0.99,
            },
            {
                name: 'Mozzarella',
                imgSrc: './assets/toppings/mozzarella.svg',
                price: 0.99,
            },
            {
                name: 'Mushroom',
                imgSrc: './assets/toppings/mushroom.svg',
                price: 0.99,
            },
            {
                name: 'Olive',
                imgSrc: './assets/toppings/olive.svg',
                price: 0.99,
            },
            {
                name: 'Onion',
                imgSrc: './assets/toppings/onion.svg',
                price: 0.99,
            },
            {
                name: 'Pepper',
                imgSrc: './assets/toppings/pepper.svg',
                price: 0.99,
            },
            {
                name: 'Pepperoni',
                imgSrc: './assets/toppings/pepperoni.svg',
                price: 0.99,
            },
            {
                name: 'Peppers',
                imgSrc: './assets/toppings/peppers.svg',
                price: 0.99,
            },
            {
                name: 'Sweetcorn',
                imgSrc: './assets/toppings/sweetcorn.svg',
                price: 0.99,
            },
            ], 
        selectedToppingNames: ['Pepper'],
    }
    const chooseYourToppingsSection = document.createElement('section');
    chooseYourToppingsSection.classList.add('section', 'toppings');

    const chooseYourToppingsTitle = renderTitle({title: 'choose your topping'});
    const chooseYourToppings = renderToppings(state);

    chooseYourToppingsSection.append(chooseYourToppingsTitle, chooseYourToppings);

    return chooseYourToppingsSection;
}

function renderPizzaCreator(){
    const pizzaCreatorDiv = document.createElement('div');

    const chooseYourToppings = renderChooseYourToppings();

    pizzaCreatorDiv.append(chooseYourToppings);

    return pizzaCreatorDiv;
}