const inputSearch = document.querySelector("#search-value");
const btnPesquisar = document.querySelector("#btn-pesquisa");

inputSearch.addEventListener("keyup", ()=>{
    if(inputSearch.value.length > 2){
        listarCidades().then(response => {
            const cidadePesquisada = inputSearch.value.toUpperCase();
            const arrayCidadesFiltradas = [];
            const nomeFormatPesquisa = response.map(cidade => {return cidade.city.name + ", " + cidade.city.country});
            nomeFormatPesquisa.forEach(nome => {
                if(nome.toUpperCase().indexOf(cidadePesquisada)>-1){
                    arrayCidadesFiltradas.push(nome);
                }
            });
            makeAutocomplete(arrayCidadesFiltradas);
        })
    }else{
        dismakeAutocomplete();
    }
})

const validateInput = ()=>{
    if(inputSearch.value === ""){
        messageInformation('Preencha o campo em branco', 'Erro na busca!', false);
    }else{        
        const city = inputSearch.value.split(", ")[0];
        const country = inputSearch.value.split(", ")[1];
        
        const resultado = weatherRequest(city, country).then(response => {            
            updateWeatherInfo(response)
            messageInformation("Cidade de ".concat(city).concat(' pesquisada com sucesso'), 'Cidade encontrada', true);
        }).catch(r => {
            messageInformation('Cidade não encontrada', 'Erro na busca!', false);
        })        
    }
}
btnPesquisar.addEventListener("click", ()=>{
    event.preventDefault();
    validateInput();
})

