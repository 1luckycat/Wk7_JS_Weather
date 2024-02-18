// import dotenv from 'dotenv';
// dotenv.config();
let form = document.querySelector('#weather-form');
let getCity = "";
const API_KEY = 'e6df94833f7b3cebec300444948cd589'



form.addEventListener('submit', async (event) => {
    event.preventDefault();
    getCity = document.querySelector('#city').value;
    console.log(getCity)
    
    await loadData();
})


const getData = async () => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${API_KEY}&units=imperial`);
    console.log(response.data);
    return response.data;

}


const DOMElements = {
    "weather" : ".weather-info"
}

const createList = (city, temp, high, low, forecast, humidity) => {
    const html = `<div id=${city} class='table d-flex justify-content-center' style="width: 18rem;">
    <table class="table">
        <thead>
            <tr>
            <th scope="col">City</th>
            <th scope="col">Current Temperature</th>
            <th scope="col">Max Temperature</th>
            <th scope="col">Min Temperature</th>
            <th scope="col">Forecast</th>
            <th scope="col">Humidity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">${city}</th>
            <td>${temp}</td>
            <td>${high}</td>
            <td>${low}</td>
            <td>${forecast}</td>
            <td>${humidity}</td>
            </tr>
        </tbody>
    </div>`;

    document.querySelector(DOMElements['weather']).insertAdjacentHTML('beforeend', html);
}


const loadData = async () => {
    const info = await getData();
        createList(info.name, info.main.temp, info.main.temp_max, info.main.temp_min, info.weather[0].main, info.main.humidity);

};

function SearchPhotos() {
    let clientId = "diuBWEGUJSqaoD6BxQCDJn_0_Q472hVdG5a3571fIw4"
    let query = document.getElementById("city").value
    let url = "https://api.unsplash.com/search/photos?client_id="+clientId+"&query="+ query;

    fetch(url)
        .then(function (data) {
            return data.json();

        })
        .then(function(data) {
            console.log(data);
            let result = data.results[0].urls.small

            
            // data.results.forEach(photo => {
            //     let result = `
            //     <img src="${photo.urls.small}">
            //     <a href="${photo.links.download}">
            // `;
            $('#result').append(result);
        })
};

// })};
