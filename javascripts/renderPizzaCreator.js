import { renderChooseYourSize } from './Size/renderChooseYourSize';
import { renderChooseYourToppings } from './Topping/renderChooseYourToppings';
import { renderSummayList } from './SummayList/renderSummayList';

export function renderPizzaCreator(state){
    const pizzaCreatorDiv = document.createElement('div');
    pizzaCreatorDiv.classList.add('pizza-creator-app');
    
    const chooseYourSize = renderChooseYourSize(state);
    const chooseYourToppings = renderChooseYourToppings(state);
    const summayList = renderSummayList(state);

    pizzaCreatorDiv.append(chooseYourSize, chooseYourToppings, summayList);

    return pizzaCreatorDiv;
}