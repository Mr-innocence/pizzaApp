function renderSummaryList(state){
    const summaryListDiv = document.createElement('div');
    summaryListDiv.classList.add('section', 'summay');
    const summaryListTitle = renderTitle({title: 'Summery'});

    const summayListItems = renderSummaryListItems(state);

    summaryListDiv.append(summaryListTitle, summayListItems);
    return summaryListDiv;
}


