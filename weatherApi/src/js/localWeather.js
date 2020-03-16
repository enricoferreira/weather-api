const getPosition = (pos) => {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;

    latLongRequest(lat, long).then(clima => {        
        updateWeatherInfo(clima)        
    })
}

window.addEventListener("load", ()=>navigator.geolocation.getCurrentPosition(getPosition))
