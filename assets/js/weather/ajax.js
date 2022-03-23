function get(url, success) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.onload = function() {
        success(httpRequest.responseText);
    }
    httpRequest.send();
};

function successHandler(data) {
    const dataObj = JSON.parse(data);
    const weatherDiv = document.querySelector('#weather');
    const weatherFragment = `
        <span class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="30"
            height="30"
        />${dataObj.name}
        </span>
        <span>
        <span class="tempF">${tempToC(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </span>
    `
    weatherDiv.innerHTML = weatherFragment;
    weatherDiv.classList.remove('hidden');
}

function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function tempToC(kelvin) {
    return (kelvin-273.15).toFixed(0);
}


document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'dd3fc419691c8366255874fac723a4c8'; // ADD YOUR API KEY BETWEEN THE QUOTES
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=danang&APPID=' + apiKey + '&lang=vi';
    get(url, successHandler);
});