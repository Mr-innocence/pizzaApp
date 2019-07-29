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

function onToppingDivClick(topping){
    const { name } = topping;
    const { selectedToppingNames } = state;
    const activated = selectedToppingNames.includes(name);

    function deactive()
    {
        const newSelectedToppingNames = selectedToppingNames.filter(thisName => thisName !== name);
        state = {
            ...state,
            selectedToppingNames: newSelectedToppingNames
        };
        render();
    }

    function activate(){
        console.log(state.selectedToppingNames);
        const newSelectedToppingNames = [...selectedToppingNames, name];
        state = {
            ...state,
            selectedToppingNames: newSelectedToppingNames
        };
        console.log(state.selectedToppingNames);
        render();            
    }

    if(activated){
        deactive();
        return;           
    }
    activate();
}

function onSizeClick(size){
    const { name } = size;
    const { selectedSizeName } = state;
    const activated = selectedSizeName.includes(name);

    function deactive()
    {
        const newSelectedSizeName = selectedSizeName.filter(thisName => thisName !== name);
        state = {
            ...state,
            selectedSizeName: newSelectedSizeName
        };
        render();
    }

    function activate(){
        console.log(state.selectedSizeName);
        const newSelectedSizeName = [name];
        state = {
            ...state,
            selectedSizeName: newSelectedSizeName
        };
        console.log(state.selectedSizeName);
        render();            
    }

    if(activated){
        deactive();
        return;           
    }
    activate();

}
function renderTopping({ topping, activated, onClick}){
    const {imgSrc, name} = topping;
    const toppingDiv = document.createElement('div');
    toppingDiv.classList.add('topping');

    toppingDiv.onclick = () => onClick(topping);


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

function renderTitle({title}) {
    const titleH2 = document.createElement('h2');
    titleH2.innerText = title;
    return titleH2;
}

function renderChooseYourToppings(state){
    const chooseYourToppingsSection = document.createElement('section');
    chooseYourToppingsSection.classList.add('section', 'toppings');

    const chooseYourToppingsTitle = renderTitle({title: 'choose your topping'});
    const chooseYourToppings = renderToppings(state);

    chooseYourToppingsSection.append(chooseYourToppingsTitle, chooseYourToppings);

    return chooseYourToppingsSection;
}

function renderChooseYourSize(state){
    const chooseYourSizeSection = document.createElement('section');
    chooseYourSizeSection.classList.add('section', 'sizes');

    const chooseYourSizeTitle = renderTitle({title: 'Select Your size'});
    const chooseYourSizes = renderSizes(state);

    chooseYourSizeSection.append(chooseYourSizeTitle, chooseYourSizes);

    return chooseYourSizeSection;
}

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

function renderPizzaCreator(state){
    const pizzaCreatorDiv = document.createElement('div');
    pizzaCreatorDiv.classList.add('pizza-creator-app');
    
    const chooseYourSize = renderChooseYourSize(state);
    const chooseYourToppings = renderChooseYourToppings(state);
    const summayList = renderSummayList(state);

    pizzaCreatorDiv.append(chooseYourSize, chooseYourToppings, summayList);

    return pizzaCreatorDiv;
}

function render(){
    const root = document.querySelector('#root');
    const pizzaCreator = renderPizzaCreator(state);
    root.innerHTML = null;
    root.append(pizzaCreator);
}

function renderSummayList(state){
    const summayListDiv = document.createElement('div');
    summayListDiv.classList.add('section', 'summay');
    const summayListTitle = renderTitle({title: 'Summery'});

    const summayListItems = renderSummayListItems(state);

    summayListDiv.append(summayListTitle, summayListItems);
    return summayListDiv;
}

function renderSummayListItems(state){
    const items = document.createElement('ul');
    items.classList.add('items');

    const item = document.createElement('li');
    item.classList.add('item');

    items.append(item);

    return items;
}

{/* <div class="section summary">
            <h2>Summery</h2>
            <ul class="items">
              <li class="item">
                <span class="item__name">Pizza (Small)</span>
                <span class="item__price">$9.99</span>
              </li>
              <li class="item">
                <span class="item__name">Olive</span>
                <span class="item__price">$0.99</span>
              </li> */}