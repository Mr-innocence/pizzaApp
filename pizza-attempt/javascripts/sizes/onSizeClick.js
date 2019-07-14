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