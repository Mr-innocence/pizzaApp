function renderSummayList(state){
    const summayListDiv = document.createElement('div');
    summayListDiv.classList.add('section', 'summay');
    const summayListTitle = renderTitle({title: 'Summery'});

    const summayListItems = renderSummayListItems(state);

    summayListDiv.append(summayListTitle, summayListItems);
    return summayListDiv;
}
