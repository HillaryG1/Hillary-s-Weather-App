const apiKey = '8a2c658f6e6f76f1a19d5fb0e81fcc7d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';

//// Cache elements
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weatherIcon')
const searchInput = document.querySelector('.searchInput');
const cityName = document.getElementById('city');

let buttonAdded = false; // Track if the button has been added

////////////// Modify at least one attribute of an element in response to user interaction:
// Focus event listener for search input
searchBox.addEventListener('focus', () => {
    // Change placeholder text when focused
    searchBox.placeholder = 'e.g. New York, London';
});

// Blur event listener for search input
searchBox.addEventListener('blur', () => {
    // Reset placeholder text when blurred out
    searchBox.placeholder = 'enter city name';
});


async function checkWeather(city){
    
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (city.trim().length === 0) {
        // Shows an error message.  
        window.alert('Please enter a city name.'); //(window.()Use at least two Browser Object Model (BOM) properties or methods
        return;  //stop execution
    }
    

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';

    }else {
        var data = await response.json();

        cityName.textContent = data.name;
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
        
 /////////Create at least one element using createElement.
 if (!buttonAdded) {
        const newButton = document.createElement('button');
        newButton.textContent = 'Updated!'; //

// added an event listener to the button
        newButton.addEventListener('click', () => {
        window.alert('Weather has been successfully updated!'); // (using BOM methodd)an alert is displayed when the button is clicked 
    });

// Appends the button to the card
    const card = document.querySelector('.card');
    card.appendChild(newButton); //Use appendChild and/or prepend to add new elements to the DOM.


    buttonAdded = true; // indicates that the button has been added
}
////////////////

 // Cache the .weather element 
 const weatherElement = document.querySelector('.weather'); 

 // DOM Traversal 
 const descriptionElement = weatherElement.firstChild; // Get the first child (<p>)
 
 // Update the description content
 descriptionElement.textContent = data.weather[0].description;


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

////////////Modify the style and/or CSS classes of an element in response to user interactions using the `style` or `classList` properties
// Add event listeners for focus and blur events
searchInput.addEventListener('focus', () => {
    // Change background color to light blue when focused
    searchInput.style.backgroundColor = '#c4e3f6';
});

searchInput.addEventListener('blur', () => {
    // Reset background color to white when blurred out
    searchInput.style.backgroundColor = '#ffffff';
});
console.log('Current URL:', window.location.href); //BOM Property (window.location) shows the  URL in the console
