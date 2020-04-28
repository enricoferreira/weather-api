export const dismakeAutocomplete = () => autocomplete.innerHTML="";

const autocomplete = document.querySelector(".autocomplete-div");
export const makeAutocomplete = (cidades) => {
    console.log(cidades);
    const option = cidades.map(cidade => 
        `<div onclick="setInput(event)" class='autocomplete-option'>${cidade}</div>`).join(' ')
        
        autocomplete.innerHTML = option;
        
}

function setInput(e){
    inputSearch.value = e.target.innerHTML
    dismakeAutocomplete();
}