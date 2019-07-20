function renderChooseYourSize(state){
    const chooseYourSizeSection = document.createElement('section');
    chooseYourSizeSection.classList.add('section', 'sizes');

    const chooseYourSizeTitle = renderTitle({title: 'Select Your size'});
    const chooseYourSizes = renderSizes(state);

    chooseYourSizeSection.append(chooseYourSizeTitle, chooseYourSizes);

    return chooseYourSizeSection;
}
