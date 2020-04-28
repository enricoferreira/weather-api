const forecastRequest = (city, country)=>{
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=15d7815608000b6489a4631a09958c67`)
    .then(r=> r.json())
    .then(json => {return json})
}

const weatherRequest = (city, country)=>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=15d7815608000b6489a4631a09958c67&lang=pt_br`)
    .then(r => {
        if(r.status === 200){
            return r.json();
        }else{
            
        }
    })
    .then(json => json)
    .catch(r => {
        console.log("erro");
    })
}

const latLongRequest = (lat, long)=>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&appid=15d7815608000b6489a4631a09958c67`)
    .then(r => r.json())
    .then(json => json)    
}