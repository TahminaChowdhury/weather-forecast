


    const searchField= document.getElementById('input-field');
    searchField.value='';
   


document.getElementById('btn').addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchField.value+'&units=metric&appid=93609621b1c74983013d48c1dff56dde')
    .then(res => res.json())
    .then(data => displayData(data))
    
});








const displayData = data => {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.textContent ='';
    const div =document.createElement('div');
    div.innerHTML =`
        <h2>${data.name}</h2>
        <h2>${parseInt(data.main.temp) + '°C'}</h2>
        <p>${data.weather[0].main}</p>

    `
    weatherInfo.appendChild(div);
};


