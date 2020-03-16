const dismakeAutocomplete = () => autocomplete.innerHTML="";

const autocomplete = document.querySelector(".autocomplete-div");
const makeAutocomplete = (cidades) => {
    const option = cidades.map(cidade => 
        `<div onclick="setInput(event)" class='autocomplete-option'>${cidade}</div>`)
        autocomplete.innerHTML = option;    
}

function setInput(e){
    inputSearch.value = e.target.innerHTML
    dismakeAutocomplete();
}