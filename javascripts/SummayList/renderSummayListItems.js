export function renderSummayListItems(state){
    const items = document.createElement('ul');
    items.classList.add('items');

    const item = document.createElement('li');
    item.classList.add('item');

    items.append(item);

    return items;
}




