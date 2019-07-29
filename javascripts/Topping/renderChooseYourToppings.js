import { renderTitle } from '../renderTitle';
import { renderToppings } from './renderTopping';
export function renderChooseYourToppings(state){
    const chooseYourToppingsSection = document.createElement('section');
    chooseYourToppingsSection.classList.add('section', 'toppings');

    const chooseYourToppingsTitle = renderTitle({title: 'choose your topping'});
    const chooseYourToppings = renderToppings(state);

    chooseYourToppingsSection.append(chooseYourToppingsTitle, chooseYourToppings);

    return chooseYourToppingsSection;
}