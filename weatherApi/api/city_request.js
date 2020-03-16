const listarCidades = ()=>{
    return fetch('./api/json/city.json')
    .then(r => {
        console.log(r.status);
        return r.json();
    })
    .then(json => json);
}