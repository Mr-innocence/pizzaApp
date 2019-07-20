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