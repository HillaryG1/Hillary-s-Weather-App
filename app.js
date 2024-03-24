const apiKey = '8a2c658f6e6f76f1a19d5fb0e81fcc7d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weatherIcon')


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';

    }else {
        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°F';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'mph';
    
        if(data.weather [0].main == 'Clouds'){
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/1146/1146869.png';
        } else if (data.weather [0].main == 'Clear') {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/4814/4814268.png';
    
        }else if (data.weather [0].main == 'Rain') {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/7626/7626413.png';
    
        }else if (data.weather [0].main == 'Drizzle') {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/3093/3093390.png';
    
        }else if (data.weather [0].main == 'Mist') {
            weatherIcon.src = 'https://cdn-icons-png.flaticon.com/128/191/191056.png';
    
        // }else if (data.weather [0].main == 'Mist') {
        //   weatherIcon.src = '';
    
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    }
    



}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value); 

});

searchBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});



