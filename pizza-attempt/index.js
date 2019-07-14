let state = {
    sizes: [
        {
            name: 'Small',
            imgSrc: './assets/size.png',
            price: 9.99,
        },
        {
            name: 'Medium',
            imgSrc: './assets/size.png',
            price: 10.99,
        },
        {
            name: 'Large',
            imgSrc: './assets/size.png',
            price: 11.99,
        },
    ],
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
    selectedToppingNames: [],
    selectedSizeName: [],
}


function renderTitle({title}) {
    const titleH2 = document.createElement('h2');
    titleH2.innerText = title;

    return titleH2;
}

function renderPizzaCreator(state){
    const pizzaCreatorDiv = document.createElement('div');
    pizzaCreatorDiv.classList.add('pizza-creator-app');
    
    const chooseYourSize = renderChooseYourSize(state);
    const chooseYourToppings = renderChooseYourToppings(state);
    const summayList = renderSummaryList(state);

    pizzaCreatorDiv.append(chooseYourSize, chooseYourToppings, summayList);

    return pizzaCreatorDiv;
}

function render(){
    const root = document.querySelector('#root');
    const pizzaCreator = renderPizzaCreator(state);
    root.innerHTML = null;
    root.append(pizzaCreator);
}




