import { render } from '../../index';
export function onToppingDivClick(topping){
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